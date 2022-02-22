import React from 'react'
import Dados from './Dados'
import Endereco from './Endereco'


class FieldsetDados extends React.Component {
    render(){
        return(
            <fieldset className='fieldset'>
                <legend>Dados Pessoais</legend>
                <Dados />
                <Endereco />
            </fieldset>
        )
    }
}

export default FieldsetDados