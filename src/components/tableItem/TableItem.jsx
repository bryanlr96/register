import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Actions, IconButton, Td, Tr } from "./tableItemStyled";
import { onUpdated } from "vue";

export default function TableItem({ book, onEdit, books, setBooks }) {
  const handlerDelete = () => {
    const updatedBooks = books.filter(libro => libro.id !== book.id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }

  return (
    <Tr>
      <Td>{book.title}</Td>
      <Td>{book.author}</Td>
      <Td>{book.price}€</Td>
      <Td>
        <Actions>
          <IconButton title="Editar" onClick={() => onEdit(book)}>
            <FiEdit2 />
          </IconButton>
          <IconButton title="Borrar" onClick={handlerDelete}>
            <FiTrash2 />
          </IconButton>
        </Actions>
      </Td>
    </Tr>
  )
};
