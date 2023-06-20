import { useState , useEffect } from 'react'
import './App.css'
import { useFetch } from './components/useFetch';

function App() {
  const [loading , data , err] = useFetch(`https://jsonplaceholder.typicode.com/photos`)

  return (
    <div className='App'>
      {
        err ? <p>{err}</p> : null 
      }
      {
        !err && (
          loading ? <p>loading....</p> :
            data.map((photo , i) => {
              return (
                <img key={i} src={photo.url} style={{width: '100px'}} />
              )
            })
        )
      }
    </div>
  )
}

export default App
