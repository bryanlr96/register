import './index.css'
export default function TableItem({book}) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>botones</td>
    </tr>
  )
}

