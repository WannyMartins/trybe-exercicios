import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
import '../index.css';



class Pokedex extends React.Component {
    render() {
         return(
             <div className='pokedex'>
                 {  pokemons.map((pokemon) =>                      
                    <Pokemon name={pokemon.name}
                            type={pokemon.type} 
                            averageWeight={pokemon.averageWeight}
                            image={pokemon.image}
                            moreInfo={pokemon.moreInfo}
                            key={pokemon.id}/>)
                }
             </div>
        )   
    }
}

export default Pokedex;