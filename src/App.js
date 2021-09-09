import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas,
    };
    this.setState(novoEstado);
    // console.log(this.notas.length);
    // console.log('Uma nova nota foi criada Título: ' + titulo + ' Texto: ' + texto);
  }

  deletarNota(index) {
    arrayNotas.splice(index,1);
    let arrayNotas = this.state.notas;
    this.setState({
      notas:arrayNotas
    });
    // console.log("Delete");
  }
  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          deletarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}
