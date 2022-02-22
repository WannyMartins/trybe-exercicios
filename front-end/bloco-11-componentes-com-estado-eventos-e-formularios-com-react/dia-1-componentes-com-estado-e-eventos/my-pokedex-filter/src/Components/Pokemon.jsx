import React from 'react';
import '../Components-css/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p className="nome">{ name }</p>
          <p> Tipo: <br />{ type }</p>
          <p>
            Peso: <br />{ averageWeight.value } { averageWeight.measurementUnit }
          </p>
        </div>
        <img src={ image } alt={`${name} sprite`} />
        <a href={moreInfo} target="_blank" rel="noreferrer" className='moreInfo'>{`Saiba Mais Sobre ${ name }`}</a>
      </div>
    );
  }
}

export default Pokemon;