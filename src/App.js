import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  // * React method which run when component was first mount (visible in HTML DOM).
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState(
      () => {
        return { monsters: users };
      },
      // * This callback guarantee that the setState fully end asynchronous code before we go next.
      () => {}
    );
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {
          searchString,
        };
      },
      () => {}
    );
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

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
  }
}

export default App;
