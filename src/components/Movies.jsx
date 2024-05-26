import { useState } from 'react'
import './Movies.css'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e88a9b487msh01d6307eac1549dp1de4cfjsn3280cb953653',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

const peli = "Pokemon";
const dataPeli = async (peli) =>{
  try {
    const data = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${peli}?exact=false&titleType=movie`, options);
    const results = await data.json();
    return results;
  } catch (err) {
    console.error(err);
  }
}

const data = await dataPeli(peli);
export default function Movies() {
  return (
    <>
      {data.results.map(e =>{
        return (
          <article>
            <div className="img-container">
              {(e.primaryImage != null) ? (<img src={e.primaryImage.url} />) : (<img src="./src/components/Image-not-found.png" className='img404'/>)}                 
            </div>
            <div className="desc-container">
              <h3>{e.titleText.text}</h3>
              <div className="desc">
                <p>Release Date</p>
                <p>day: {(e.releaseDate != null ? e.releaseDate.day : '-')}</p>
                <p>month: {(e.releaseDate != null ? e.releaseDate.month : '-')}</p>
                <p>year: {(e.releaseDate != null ? e.releaseDate.year : '-')}</p>
              </div>
            </div>
          </article>
          );})}
    </>
  )
}