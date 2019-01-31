import React, { Component } from 'react';
import Header from './Header'
import '../CSS/App.css';
class App extends Component {
  state = {
    noticias: []
  };
  componentDidMount() {
    this.getCategorias();
  }
  getCategorias = () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=6DAUMMSOKET7RPW7IHEN`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        console.log(categorias.categories)
        console.log(categorias.categories)
      });
  };
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
