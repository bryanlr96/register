import React, { useState } from "react";
import { Card, InputWrapper, AddButton, Title, CloseButton, Overlay, StyledInput, Wrapper } from "./modalStyled.js";
import { FaPerson, FaBook, FaMoneyBill1Wave, FaRegSquareMinus } from "react-icons/fa6";

const Modal = ({ setBooks, setVisible, visible }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addBook = () => {
    // Leer los libros existentes desde localStorage
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    // Crear el nuevo libro con un ID basado en la longitud del array
    const newBook = {
      id: storedBooks.length +1,
      author,
      title,
      price,
    };

    const updatedBooks = [...storedBooks, newBook];

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    setBooks(updatedBooks);

    // Log en consola para verificar si el libro se agregó correctamente
    console.log("Libro añadido correctamente:");
    console.log(newBook);
    console.log("Lista actualizada de libros:");
    console.log(updatedBooks);

    setAuthor("");
    setTitle("");
    setPrice("");

    // Cerrar el modal
    setVisible(false);
  };

  const closeBook = () => {
    setVisible(false);
  };

  return (
    <>
      <Wrapper visible={visible}>
        <Overlay onClick={closeBook} />
        <Card onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeBook}>
            <FaRegSquareMinus />
          </CloseButton>
          <Title>Add your New Book</Title>

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

          <AddButton onClick={addBook}>Añadir</AddButton>
        </Card>
      </Wrapper>
    </>
  );
};

export default Modal;
