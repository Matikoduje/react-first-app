import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { item, itemImageSet, itemType } = this.props;
    const { name, id, email } = item;
    return (
      <div className='card-container' key={id}>
        <img
          alt={`${itemType} ${name}`}
          src={`https://robohash.org/${id}?set=${itemImageSet}&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
