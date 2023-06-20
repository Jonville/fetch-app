import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data , setData] = useState([]);

  // const fetchData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data)
  //     });
  // };

  // axios 로 밑에 처럼 가능

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const fetchData = () => {
    axios.get(url)
      .then(data => {
        setData(data.data)
      })
      .catch(err => {
        console.log(err + '서버요청 에러')
      })
  }

  return (
    <div className='container'>
      <button onClick={fetchData}>Fetch Data</button>
      {
        data ? (
          <ul>
            {
              data.map((item) => (
                <li key={item.id} >{item.title}</li>
              ))
            }
          </ul>
        ) : null
      }
    </div>
  )
}

export default App
