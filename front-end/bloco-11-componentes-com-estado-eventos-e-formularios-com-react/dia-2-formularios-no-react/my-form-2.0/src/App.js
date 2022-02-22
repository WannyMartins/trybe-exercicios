import React from 'react';
import './App.css';
import FieldsetDados from './Components/FieldsetDados';
import FieldsetTrabalho from './Components/FieldsetTrabalho';


class App extends React.Component {
  render() {
  return (
    <form>
      <FieldsetDados />
      <FieldsetTrabalho />
    </form>
  );
}}

export default App;
