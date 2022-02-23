import React from 'react';

class Button extends React.Component {
    render(){
        const { handleChange, submit, clear } = this.props

        return(
            <div className='button'>
                <button type="submit"  
                    onChange={ handleChange } 
                    onClick={ submit }
                    >Enviar
                </button>
                <button 
                    type='reset'  
                    onChange={ handleChange } 
                    onClick={ clear }
                    >Limpar
                </button>
            </div>
        )
    }
}

export default Button