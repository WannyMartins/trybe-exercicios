import React from 'react';
import './App.css';
import Button from './Components/Button';
import FieldsetDados from './Components/FieldsetDados';
import FieldsetTrabalho from './Components/FieldsetTrabalho';
import Erro from './Components/Erro';
import FormDataDisplay from './Components/FormDataDisplay';

const estadoInicial = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: 'selecione',
    tipo: 'house',
    resumo: '',
    cargo: '',
    descricaoCargo: '',
    erro: {},
    submitted: false,
}


class App extends React.Component {
  constructor() {
    super()

    this.state = estadoInicial;
  }

  validandoField = (item, value) => {
    switch (item) {
      case 'email':
        const valido = value.match(/\S+@\S+\.\S+/)
        return valido ? '' : ' é inválido '
      default:
        break;
    }
    return '';
  }

  enderecoValido = endereco => endereco.replace(/[^\w\s]/gi, '')


  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;
    if (name === 'endereco') value = this.enderecoValido(value);

    this.updateState(name, value);
  }

  updateState = (name, value) => {
    this.setState((state) => ({
      [name]: value,

      erro: {
        ...state.erro,
        [name]: this.validandoField(name, value)
      }
    }))
  } 

  handleChange = e => {
    let { name, value } = e.target;

    if (name === 'nome') value = value.toUpperCase();

    this.updateState(name, value);
  }


  submit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true})
  }

  clear = () => {
    this.setState(estadoInicial)

  }

  render() {
    const { submitted } =this.state
  return (
    <form className='App'>
      <FieldsetDados handleChange={this.handleChange} onBlurHandler={ this.onBlurHandler }/>
      <FieldsetTrabalho handleChange={this.handleChange} />
      <Button 
        handleChange={this.handleChange} 
        clear={this.clear} 
        submit={this.submit}
      />
      <div>
        <Erro erro={this.state.erro} />
      </div>
        { submitted && <FormDataDisplay estadoAtual={ this.state } /> }
    </form>
  );
}}

export default App;
