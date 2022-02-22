import React from 'react';
import '../index.css';



class Pokemon extends React.Component {
    render() {
        const { name, type,  averageWeight, image, moreInfo} = this.props
        return(
            <div className='pokemon'>
                <p className='name'>{ name }</p>
                <div className='dados'>
                    <div className='typePeso'>
                        <p className='type'>{ type }</p>
                        <p className='peso'>{`${ averageWeight.value } ${  
                        averageWeight.measurementUnit }`}</p>
                        <a href={moreInfo} target="_blank" rel="noreferrer" className='moreInfo'>{`Saiba Mais Sobre ${ name }`}</a>
                    </div>
                    <img className='imagem' src={ image } alt={`imagem do ${ name }`} />
                </div>
            </div>
            )
    }
}

export default Pokemon;