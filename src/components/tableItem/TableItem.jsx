import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Actions, IconButton, Td, Tr } from "./tableItemStyled";

export default function TableItem({book}) {
  return (
    <Tr>
      <Td>{book.title}</Td>
      <Td>{book.author}</Td>
      <Td>{book.price}€</Td>
      <Td>
        <Actions>
          <IconButton title="Editar">
            <FiEdit2 />
          </IconButton>
          <IconButton title="Borrar">
            <FiTrash2 />
          </IconButton>
        </Actions>
      </Td>
    </Tr>
  )
}

