import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardImage, cardDescription, cardTrunfo,
      cardAttr1, cardAttr2, cardAttr3, cardRare } = this.props;
    return (
      <div className="card">
        <p className="title" data-testid="name-card">{ cardName }</p>
        <div className="image-box">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p className="description" data-testid="description-card">{ cardDescription }</p>
        <div className="attr-box">
          <p className="attr" data-testid="attr1-card">
            <span>Capacity:</span>
            { cardAttr1 }
          </p>
          <p className="attr" data-testid="attr2-card">
            <span>Crowd:</span>
            { cardAttr2 }
          </p>
          <p className="attr" data-testid="attr3-card">
            <span>Beauty:</span>
            { cardAttr3 }
          </p>
        </div>
        <div className="rarity-box">
          <p className="rarity" data-testid="rare-card">{ cardRare }</p>
        </div>
        {
          cardTrunfo === true
          && <p data-testid="trunfo-card" className="ultratrunfo">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: 'Stanford Bridge',
  cardImage: 'https://static.wikia.nocookie.net/the-football-database/images/7/78/Chelsea_Stamford_Bridge_001.jpg',
  cardDescription: 'Chelsea FC Stadium located in London UK.',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardRare: 'normal',
  cardTrunfo: true,
};

export default Card;
