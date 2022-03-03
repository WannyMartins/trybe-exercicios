import React from 'react'
import Dados from './Dados'
import Endereco from './Endereco'


class FieldsetDados extends React.Component {
    render(){
        const { handleChange } = this.props
        return(
            <fieldset className='fieldset'>
                <legend>Dados Pessoais</legend>
                <Dados handleChange={ handleChange }/>
                <Endereco handleChange={ handleChange } />
            </fieldset>
        )
    }
}

export default FieldsetDados