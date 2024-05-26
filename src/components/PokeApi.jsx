import { useState } from 'react'
import './PokeApi.css'

const pokemon = "mew";
const dataPoke = async (pkm) =>{
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`);
  const results = await data.json();
  return results;
}

const data = await dataPoke(pokemon);
export default function PokeApi() {
  return (
  <article className='pkm'>
    <div>
      <h3>{data.id}</h3>
      <h3 className='pkmName'>{data.name}</h3>
    </div>
    <img src={data.sprites.other.dream_world.front_default}/><br/>
    {data.stats.map((sta) => {
    return (
      <div><p>{sta.stat.name}:</p><p>{sta.base_stat}</p></div>
    );
    })}
  </article>
  )
}