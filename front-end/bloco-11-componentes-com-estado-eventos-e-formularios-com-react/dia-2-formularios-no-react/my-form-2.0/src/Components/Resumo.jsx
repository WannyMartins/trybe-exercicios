import React from 'react';

class Resumo extends React.Component {
    render(){
        return(
            <div>
                Resumo do Currículo:
                <textarea 
                    name="resumo" 
                    id="resumo" 
                    cols="30" 
                    rows="10" 
                    maxLength="1000" 
                    required>
                </textarea>
            </div>
        )
    }
}

export default Resumo