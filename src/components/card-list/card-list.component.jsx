import { Component } from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { items, itemType, itemImageSet } = this.props;
    return (
      <div className='card-list'>
        {items.map((item) => {
          return (
            <Card item={item} itemType={itemType} itemImageSet={itemImageSet} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
