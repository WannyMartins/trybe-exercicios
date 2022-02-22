import React from 'react';

class Cargo extends React.Component {
    render(){
        return(
            <div>
                Cargo:
                <textarea 
                    name="Cargo" 
                    id="Cargo" 
                    cols="30" 
                    rows="10" 
                    maxLength="40" 
                    // onMouseEnter='Preencha com cuidado esta informação.'
                    required>
                </textarea>
                Descrição do Cargo: 
                <textarea 
                    name="Cargo" 
                    id="Cargo" 
                    cols="30" 
                    rows="10" 
                    maxLength="500" 
                    // onMouseEnter='Preencha com cuidado esta informação.'
                    required>
                </textarea>
            </div>
        )
    }
}

export default Cargo