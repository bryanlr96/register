import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const initalBooks = localStorage.getItem('books')
    if(initalBooks){
      setBooks(JSON.parse(initalBooks))
    }
    console.log(books)
  },[])

  return (
    <>
      
    </>
  )
}

export default App
