import TableItem from '../tableItem/TableItem'
import { StyledTable, TableWrapper, Th, Thead,  } from './tableStyled'

export default function Table({ books }) {

  return (
<TableWrapper>
      <StyledTable>
        <Thead>
          <tr>
            <Th>Título</Th>
            <Th>Autor</Th>
            <Th>Precio</Th>
            <Th></Th>
          </tr>
        </Thead>
        <tbody>
        {books.map(book => (
            <TableItem book={book} key={book.id} />
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
};

