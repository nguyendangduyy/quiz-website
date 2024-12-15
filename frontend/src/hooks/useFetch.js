import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false) 
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [url])

  return {
    data,
  }
}

export default useFetch