import { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoding(false)
        // console.log(json);
      })
      .catch(err => {
        setLoding(false);
        setErr(`데이터를 읽을 수 없습니다!`);
      })
  }, [uri])

  return [loading, data, err]
}