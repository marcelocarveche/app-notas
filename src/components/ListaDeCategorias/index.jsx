import React, { Component } from "react";
import "./estilos.css";

export default class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias: []}
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e) {
    // console.log(e.key)
    if (e.key == "Enter") {
      console.log("Adicionar categoria");
      this.props.categorias.adicionarCategoria(e.target.value);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>;
          })}
        </ul>
        <input
            className="lista- categorias_input"
          onKeyUp={this._handleEventoInput.bind(this)}
          type="text"
          name=""
          id=""
          placeholder="Adicionar categoria"
        />
      </section>
    );
  }
}