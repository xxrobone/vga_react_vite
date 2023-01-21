import { useState, useEffect } from 'react'
import {useFetch} from './hooks/useFetch'
import './App.css'
import Loader from './components/loader/Loader'
import ItemList from './components/itemlist/ItemList'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = `${API_URL}?key=${API_KEY}&page=${1}&page_size=${20}`;
const GAME_SEARCH = `${API_URL}?key=${API_KEY}&search=`

function App() {
  const [url, setUrl] = useState(BASE_URL);
  const { data: data, isLoading, error } = useFetch(url, { type: 'GET' })

  return (
    <div className="App"> 
    {isLoading && <Loader />}  
    {error && <div><p>Could not load data...</p></div>}

    <ItemList data={data} />
      
    </div>
  )
}

export default App
