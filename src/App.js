import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado= {
      notas: novoArrayDeNotas,
    };
    this.setState(novoEstado);
    // console.log(this.notas.length);
    // console.log('Uma nova nota foi criada Título: ' + titulo + ' Texto: ' + texto);
  }
    render(){
      return (
        <section>
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section>
      );
    }
}