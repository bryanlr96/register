import React, { useState, useEffect } from 'react';
import {
  Card,
  InputWrapper,
  AddButton,
  Title,
  CloseButton,
  Overlay,
  StyledInput,
  Wrapper,
} from './modalStyled.js';
import {
  FaPerson,
  FaBook,
  FaMoneyBill1Wave,
  FaRegSquareMinus,
} from 'react-icons/fa6';

const Modal = ({
  setBooks,
  setVisible,
  visible,
  editingBook,
  setEditingBook,
}) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingBook) {
      setAuthor(editingBook?.author ?? '');
      setTitle(editingBook?.title ?? '');
      setPrice(editingBook?.price ?? '');
    } else {
      setAuthor('');
      setTitle('');
      setPrice('');
    }
  }, [editingBook]);

  const handleSave = () => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];

    let updatedBooks;
    if (editingBook) {
      // funcionalidad de editar
      updatedBooks = storedBooks.map((b) =>
        b.id === editingBook.id
          ? { ...editingBook, author, title, price }
          : b
      );
    } else {
      // funcionalidad de añadir un nuevo
      const newBook = {
        id: storedBooks.length + 1,
        author,
        title,
        price,
      };
      updatedBooks = [...storedBooks, newBook];
    }

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
    closeModal();
  };

  const closeModal = () => {
    setVisible(false);
    setEditingBook(null);
  };

  return (
    <Wrapper visible={visible}>
      <Overlay onClick={closeModal} />
      <Card onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>
          <FaRegSquareMinus />
        </CloseButton>
        <Title>{editingBook ? 'Editar Libro' : 'Añadir Nuevo Libro'}</Title>

        <InputWrapper>
          <FaPerson />
          <StyledInput
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
          />
        </InputWrapper>

        <InputWrapper>
          <FaBook />
          <StyledInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Libro"
          />
        </InputWrapper>

        <InputWrapper>
          <FaMoneyBill1Wave />
          <StyledInput
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Precio"
          />
        </InputWrapper>

        <AddButton onClick={handleSave}>
          {editingBook ? 'Guardar Cambios' : 'Añadir'}
        </AddButton>
      </Card>
    </Wrapper>
  );
};

export default Modal;