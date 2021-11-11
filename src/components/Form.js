import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  hasSuperTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return <p className="Trunfed">Você já tem um Super Trunfo em seu baralho</p>;
    }
    return (
      <label htmlFor="cardTrunfo">
        Super Trunfo:
        <input
          className="form-cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          id="cardTrunfo"
        />
      </label>
    );
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo,
    } = this.props;

    return (
      <form className="form">
        <label htmlFor="cardName">
          Name:
          <input
            className="form-cardName"
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label className="descriptionLabel" htmlFor="cardDescription">
          Description:
          <textarea
            className="form-cardDescription"
            placeholder="Type card description here!"
            rows="5"
            cols="35"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="cardDescription"
          />
        </label>

        <label htmlFor="cardAttr1">
          Capacity:
          <input
            className="form-cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
            name="cardAttr1"
            id="cardAttr1"
          />
        </label>

        <label htmlFor="cardAttr2">
          Crowd:
          <input
            className="form-cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
            name="cardAttr2"
            id="cardAttr2"
          />
        </label>

        <label htmlFor="cardAttr3">
          Beauty:
          <input
            className="form-cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
            name="cardAttr3"
            id="cardAttr3"
          />
        </label>

        <label htmlFor="cardImage">
          Image:
          <input
            className="form-cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            id="cardImage"
          />
        </label>

        <label htmlFor="cardRare">
          Raridade:
          <select
            className="form-cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
            name="cardRare"
            id="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {this.hasSuperTrunfo(hasTrunfo, cardTrunfo, onInputChange)}

        <button
          className="saveButton"
          type="button"
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
  hasTrunfo: PropTypes.bool,
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
  hasTrunfo: false,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
