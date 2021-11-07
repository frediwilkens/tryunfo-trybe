import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardImage, cardDescription, cardTrunfo,
      cardAttr1, cardAttr2, cardAttr3, cardRare } = this.props;
    return (
      <div className="card">
        <p data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">
          Capacity:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Crowd:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Beauty:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        {
          cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>
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
  cardAttr1: '99',
  cardAttr2: '99',
  cardAttr3: '99',
  cardRare: 'muito raro',
  cardTrunfo: true,
};

export default Card;
