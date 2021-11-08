import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class SuperTrunfo extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="album">
        {
          cards
            .filter((card) => card.cardTrunfo === true)
            .map((card) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            ))
        }
      </div>
    );
  }
}

SuperTrunfo.propTypes = {
  cards: propTypes.arrayOf(Object),
};

SuperTrunfo.defaultProps = {
  cards: propTypes.arrayOf(Object),
};

export default SuperTrunfo;
