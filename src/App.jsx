import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Table from './components/table/Table'
import Modal from './components/modal/Modal'
import { GlobalStyle, AddButton } from './components/table/tableStyled'

function App() {
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    const initalBooks = localStorage.getItem('books')
    if (initalBooks) {
      setBooks(JSON.parse(initalBooks))
    }
  }, []);

  const handleEdit = (book) =>{
    setEditingBook(book)
    setVisible(true);
  };

  const handleAdd = () =>{
    setEditingBook(null)
    setVisible(true); 
  }

  return (
    <>
    <GlobalStyle />
    <Modal
    visible={visible} 
    setVisible ={setVisible} 
    setBooks={setBooks}
    editingBook={editingBook}
    setEditingBook={setEditingBook}
    />
      <Table
        books={books}
        onEdit={handleEdit}
        setBooks={setBooks}
        
      />
        <AddButton className='btn' onClick={handleAdd}>
          Añadir
        </AddButton>


    </>
  )
}

export default App;