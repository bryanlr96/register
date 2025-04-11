import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Table from './components/table/Table'
import Modal from './components/modal/Modal'
import { AddButton } from './components/table/tableStyled'

function App() {
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(false);

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
        <AddButton className='btn' onClick={() =>{setVisible(true)}}>
          Añadir
        </AddButton>
      </div>

    </>
  )
}

export default App;