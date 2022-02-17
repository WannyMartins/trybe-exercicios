import React from 'react';

class Task extends React.Component {
    render() {
        const { tarefa, sufixo } = this.props
         return (
            <li>
                {`${tarefa}${sufixo}`}
            </li>
            );
        }
  }
  
  export default Task;