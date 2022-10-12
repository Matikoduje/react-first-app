import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  // * useState returns [value, setValue] Initialization new state variable searchField with value ''.
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // * Second argument is dependency array (can be state variables or props). Every time dependency was changed REACT
  // * run only the callback function. Not the whole component function.
  // ! In this example I didn't pass any value into array. That means this callback only fired once during functional component life. When was mounted.
  // ! This example is similar to 'didComponentMount' from class component.
  useEffect(() => {
    async function fetchData() {
      console.log('123');
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      setMonsters(users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]); // * Filtered Monsters depends on searchField and monsters. Every change on one of them invokes this effect.

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    // * Use created "setValue" method (in this case created with name setSearchField) to change state variable value.
    // ! Functional component rerender whole function when state variable value is change (or props changed).
    // * This is important because on some situation newly saved value can have the same value as before.
    // * At this case, REACT won't rerender component.
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box-monsters'
      />
      <CardList
        itemImageSet={'set2'}
        itemType={'monster'}
        items={filteredMonsters}
      />
    </div>
  );
};

export default App;
