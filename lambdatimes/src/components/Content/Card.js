import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  // console.log(props);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt=""/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })
}

Card.defaultProps = {
  cards: {
    author: "",
    headline: "",
    img: "",
    tab: ""
  }
}

export default Card;
