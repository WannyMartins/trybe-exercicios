import React from 'react';
import Task from './task';
import './App.css';



function App() {
  const tarefas =['constante', 'string', 'array', 'sort']
  return (
    <ul>
      {
        tarefas.map((tarefa) => <Task tarefa={tarefa} sufixo="-sufixo" />)
      }
    </ul>
    )
}


export default App;
