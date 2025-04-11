import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Table from './components/table/Table'
import Modal from './components/modal/Modal'

function App() {
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const initalBooks = localStorage.getItem('books')
    if (initalBooks) {
      setBooks(JSON.parse(initalBooks))
    }
  }, [])

  return (
    <>
    <Modal visible={visible} setVisible ={setVisible} setBooks={setBooks}/>
      <Table
        books={books}
      />

      <div className='btnContainer'>
        <button className='btn' onClick={() =>{setVisible(true)}}>
          añadir
        </button>
      </div>

    </>
  )
}

export default App
