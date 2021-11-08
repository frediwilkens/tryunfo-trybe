import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

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

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, saveButton, hasTrunfo } = this.state;
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
      </div>
    );
  }
}

export default App;
