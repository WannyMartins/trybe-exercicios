import React from 'react';
import Resumo from './Resumo';
import Cargo from './Cargo';


class FieldsetDados extends React.Component {
    render(){
        return(
            <fieldset className='fieldset'>
                <legend>Dados Profissionais</legend>
                <Resumo />
                <Cargo />
            </fieldset>
        )
    }
}

export default FieldsetDados