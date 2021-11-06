import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Stanford Bridge',
      image: 'https://static.wikia.nocookie.net/the-football-database/images/7/78/Chelsea_Stamford_Bridge_001.jpg',
      description: 'Chelsea FC Stadium located in London UK.',
      attr1: '42',
      attr2: '100',
      attr3: '100',
      rarity: 'muito raro',
      trunfo: false,
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    });
  }

  render() {
    const { name, image, description,
      attr1, attr2, attr3,
      rarity, trunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
