import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Eventos from "./Eventos";
import "../CSS/App.css";
class App extends Component {
  token = "6DAUMMSOKET7RPW7IHEN";

  state = {
    categorias: [],
    eventos: []
  };
  componentDidMount() {
    this.getCategorias();
  }
  getCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        console.log(categorias);
        this.setState({ categorias: categorias.categories });
      });
  };
  obtenerEventos = async busqueda => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&token=${
      this.token
    }&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        console.log(eventos)
        this.setState({ eventos:eventos.events });
        
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container" />
        <Formulario
          categorias={this.state.categorias}
          obtenerEventos={this.obtenerEventos}
        />
        <Eventos eventos={this.state.eventos}/>
      </div>
    );
  }
}

export default App;
