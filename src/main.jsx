import React from 'react'
import ReactDOM from 'react-dom/client'
import Movies from './components/Movies.jsx'
import PokeApi from './components/PokeApi.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Movies />
    <PokeApi />
  </React.StrictMode>,
)
