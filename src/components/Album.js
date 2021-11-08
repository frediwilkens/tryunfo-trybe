import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Album extends React.Component {
  render() {
    const { cards, excludeCard, filterName } = this.props;
    return (
      <div className="album">
        {
          cards
            .filter((card) => card.cardName.includes(filterName))
            .map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => excludeCard(card) }
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  cards: propTypes.arrayOf(Object),
  excludeCard: propTypes.func,
  filterName: propTypes.string,
};

Album.defaultProps = {
  cards: propTypes.arrayOf(Object),
  excludeCard: propTypes.func,
  filterName: '',
};

export default Album;
