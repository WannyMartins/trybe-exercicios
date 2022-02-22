import React from 'react'
import './dados.css'

class Dados extends React.Component {
    render(){
        return(
            <div>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" 
                    name="nome" 
                    id="nome" 
                    className="nome" 
                    maxLength="40"
                    required/>
                </label>
                <label htmlFor="email">
                    email:
                    <input type="email" 
                    name="email" 
                    id="email" 
                    className="email" 
                    maxLength="50"
                    required/>
                </label>
                <label htmlFor="CPF">
                    CPF:
                    <input type="text" 
                    name="CPF" 
                    id="CPF" 
                    className="CPF" 
                    maxLength="11"
                    required/>
                </label>
            </div>
        )
    }
}

export default Dados