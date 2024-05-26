import { useState } from 'react'
import './PokeApi.css'

const dataPoke = async (pkm) =>{
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`);
  const results = await data.json();
  return results;
}

const pokemon = "rayquaza";
const data = await dataPoke(pokemon);
export default function PokeApi() {
  return (
  <article className='pkm'>
    <div className='pkm-desc'>
      <p>
        <h3>{data.id}</h3>
        <h3 className='pkmName'>{data.name}</h3>
      </p>
      <img src={data.sprites.other.dream_world.front_default}/>
      <div className="stats">
        {data.stats.map((sta) => {
        return (
          <p><div>{sta.stat.name}:</div><div>{sta.base_stat}</div></p>
        );
        })}
      </div>
    </div>
  </article>
  )
}