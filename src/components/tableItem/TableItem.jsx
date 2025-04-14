import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Actions, IconButton, Td, Tr } from "./tableItemStyled";

export default function TableItem({book, onEdit}) {


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
          <IconButton title="Borrar">
            <FiTrash2 />
          </IconButton>
        </Actions>
      </Td>
    </Tr>
  )
};
