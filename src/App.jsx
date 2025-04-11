import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Table from './components/table/Table'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const initalBooks = localStorage.getItem('books')
    if (initalBooks) {
      setBooks(JSON.parse(initalBooks))
    }
  }, [])

  return (
    <>
      <Table
        books={books}
      />

      <div className='btnContainer'>
        <button className='btn'>
          +
        </button>
      </div>

    </>
  )
}

export default App
