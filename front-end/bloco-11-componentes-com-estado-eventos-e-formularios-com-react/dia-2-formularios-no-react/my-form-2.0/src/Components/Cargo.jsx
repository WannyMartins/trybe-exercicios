import React from 'react';

class Cargo extends React.Component {
    render(){
        const { handleChange } = this.props
        return(
            <div>
                Cargo:
                <textarea 
                    name="cargo" 
                    id="cargo" 
                    cols="30" 
                    rows="10" 
                    maxLength="40" 
                    // onMouseEnter='Preencha com cuidado esta informação.'
                    required
                    onChange={ handleChange }
                    >
                </textarea>
                Descrição do Cargo: 
                <textarea 
                    name="descricaoCargo" 
                    id="descricaoCargo" 
                    cols="30" 
                    rows="10" 
                    maxLength="500" 
                    // onMouseEnter='Preencha com cuidado esta informação.'
                    required
                    onChange={ handleChange }
                    >
                </textarea>
            </div>
        )
    }
}

export default Cargo