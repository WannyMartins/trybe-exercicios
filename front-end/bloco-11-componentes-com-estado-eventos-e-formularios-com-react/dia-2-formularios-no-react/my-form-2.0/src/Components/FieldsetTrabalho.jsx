import React from 'react';
import Resumo from './Resumo';
import Cargo from './Cargo';


class FieldsetDados extends React.Component {
    render(){
        const { handleChange } = this.props

        return(
            <fieldset className='fieldset'>
                <legend>Dados Profissionais</legend>
                <Resumo handleChange={ handleChange }/>
                <Cargo handleChange={ handleChange }/>
            </fieldset>
        )
    }
}

export default FieldsetDados