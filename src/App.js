import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import Album from './components/Album';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      saveButton: true,
      hasTrunfo: false,
      cards: [],
      filterName: '',
    };
  }

  saveCard = (event) => {
    event.preventDefault();
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;

    const card = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((state) => {
      const { cards } = state;
      return {
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
        saveButton: true,
        hasTrunfo: state.hasTrunfo || cardTrunfo,
        cards: [...cards, card],
      };
    });
  }

  saveValidation = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    const min = 0;
    const max = 90;
    const sum = 210;

    if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 >= min && cardAttr1 <= max
      && cardAttr2 >= min && cardAttr2 <= max
      && cardAttr3 >= min && cardAttr3 <= max
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sum) {
      return this.setState({ saveButton: false });
    } return this.setState({ saveButton: true });
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, this.saveValidation);
  }

  excludeCard = (targetCard) => {
    this.setState((state) => ({
      cards: state.cards.filter((card) => card !== targetCard),
      hasTrunfo: state.hasTrunfo && !targetCard.cardTrunfo,
    }));
  }

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, saveButton, hasTrunfo,
      cards, filterName } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ saveButton }
          onSaveButtonClick={ this.saveCard }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <label htmlFor="filterName">
          Name Filter:
          <input
            type="text"
            data-testid="name-filter"
            name="filterName"
            id="filterName"
            value={ filterName }
            onChange={ this.handleChange }
          />
        </label>
        <Album
          cards={ cards }
          excludeCard={ this.excludeCard }
          filterName={ filterName }
        />
      </div>
    );
  }
}

export default App;
