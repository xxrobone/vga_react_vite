import { useState, useEffect } from 'react'
import {useFetch} from './hooks/useFetch'
import Loader from './components/loader/Loader'
import ItemList from './components/itemlist/ItemList'
import Header from './components/header/Header'
import Button from './components/ui/buttons/Button'
import Hero from './components/hero/Hero'

// styles
import './App.css'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = `${API_URL}?key=${API_KEY}&page=${1}&page_size=${20}`;
const GAME_SEARCH = `${API_URL}?key=${API_KEY}&search=`

function App() {
  const [url, setUrl] = useState(BASE_URL);
  const { data: data, isLoading, error } = useFetch(url, { type: 'GET' })

  return (
    <div className="App"> 
      <Header />
      <main>
        <Hero />
        <div className='buttons_wrapper'>
          <Button variant='default'>Must play games</Button>
          <Button variant='default'>Top score games</Button>
          <Button variant='default'>Top 2022</Button>
          <Button variant='default'>Upcoming games</Button>
        </div>
    {isLoading && <Loader />}  
    {error && <div><p>Could not load data...</p></div>}

    <ItemList data={data} />
      </main>      
    </div>
  )
}

export default App
