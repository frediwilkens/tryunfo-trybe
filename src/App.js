import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      image: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rarity: 'normal',
      trunfo: false,
      saveButton: true,
    };
  }

  saveButtonFunction = () => {
    const { name, description, image,
      rarity, attr1, attr2, attr3,
    } = this.state;

    const min = 0;
    const max = 90;
    const sum = 210;

    if (name && description && image && rarity
      && attr1 >= min && attr1 <= max
      && attr2 >= min && attr2 <= max
      && attr3 >= min && attr3 <= max
      && (Number(attr1) + Number(attr2) + Number(attr3)) <= sum) {
      return this.setState({ saveButton: false });
    } return this.setState({ saveButton: true });
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, this.saveButtonFunction);
  }

  render() {
    const { name, image, description,
      attr1, attr2, attr3,
      rarity, trunfo, saveButton } = this.state;
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
          isSaveButtonDisabled={ saveButton }
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
