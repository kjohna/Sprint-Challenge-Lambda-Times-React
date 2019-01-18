import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  const cards = props.cards.map((card, i) =>{
    return (
      <Card card={card} key={i} />
    );
  })
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a new Card component for each passing the card as the only prop*/}
      {cards}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })
}

Cards.defaultProps = {
  cards: {
    author: "",
    headline: "",
    img: "",
    tab: ""
  }
}

export default Cards;