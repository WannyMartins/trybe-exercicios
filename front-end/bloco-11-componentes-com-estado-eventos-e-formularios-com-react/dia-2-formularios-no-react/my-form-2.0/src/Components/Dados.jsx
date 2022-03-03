import React from 'react'
import './dados.css'

class Dados extends React.Component {
    render(){
        const { handleChange } = this.props;
        return(
            <div>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" 
                    name="nome" 
                    id="nome" 
                    className="nome" 
                    maxLength="40"
                    required
                    onChange={ handleChange }
                    />
                </label>
                <label htmlFor="email">
                    email:
                    <input type="email" 
                    name="email" 
                    id="email" 
                    className="email" 
                    maxLength="50"
                    onChange={ handleChange }
                    required/>
                </label>
                <label htmlFor="cpf">
                    CPF:
                    <input type="text" 
                    name="cpf" 
                    id="cpf" 
                    className="cpf" 
                    maxLength="11"
                    required
                    onChange={ handleChange }
                    />
                </label>
            </div>
        )
    }
}

export default Dados