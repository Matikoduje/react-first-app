import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ items, itemType, itemImageSet }) => (
  <div className='card-list'>
    {items.map((item) => {
      return (
        <Card item={item} itemType={itemType} itemImageSet={itemImageSet} />
      );
    })}
  </div>
);

export default CardList;
