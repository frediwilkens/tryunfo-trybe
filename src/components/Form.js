import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            data-testid="name-input"
            name="name"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Description:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            id="description"
          />
        </label>

        <label htmlFor="attr1">
          Capacity:
          <input
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
            name="attr1"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Crowd:
          <input
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
            name="attr2"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Beauty:
          <input
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
            name="attr3"
            id="attr3"
          />
        </label>

        <label htmlFor="image">
          Image:
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
            id="image"
          />
        </label>

        <label htmlFor="rarity">
          Raridade:
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
            name="rarity"
            id="rarity"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="trunfo"
            id="trunfo"
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
