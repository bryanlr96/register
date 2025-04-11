
import TableItem from '../tableItem/TableItem'

export default function Table({ books }) {

  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Precio</th>
          <th className='black'></th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <TableItem book={book} key={book.id} />
          ))
        }
      </tbody>
    </table>
  )
}

