import React from 'react';

class Erro extends React.Component {
    render(){
        const { erro } = this.props

        return(
            <div>
               {
                   Object.keys(erro).filter((name) => (
                       erro[name].length > 0
                   )).map((name, index) => (
                       <p key={ index }>
                           { name }
                           { erro[ name  ]}
                       </p>
                   ))
               }
            </div>
        )
    }
}

export default Erro