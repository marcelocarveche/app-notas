import { Component } from "react";
import "./estilos.css";
export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = {categorias: []}

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
    
  }

  componentWillUnmount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handleMudancaDeTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaDoTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _hadleMudancaCategoria(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._hadleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option value="Sem categoria">Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index} value={categoria}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaDoTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
