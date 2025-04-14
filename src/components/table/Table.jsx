import TableItem from '../tableItem/TableItem'
import { StyledTable, TableWrapper, Th, Thead, TableScrollArea, HeaderTitle, PageWrapper } from './tableStyled'

export default function Table({ books, onEdit }) {

  return (
    <PageWrapper>
      <HeaderTitle>Registro de Libros</HeaderTitle>
      <TableWrapper>
        <TableScrollArea >
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
                <TableItem key={book.id} book={book} onEdit={onEdit} />
              ))}
            </tbody>
          </StyledTable>
        </TableScrollArea>
      </TableWrapper>
    </PageWrapper>
  )
};