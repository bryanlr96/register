import React from 'react'
import './tableItem.css'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
export default function TableItem({ books }) {
  return (
    <div className='item'>
      <span className='nombreLibro'>nombre</span>
      <span className='autor'>autor</span>
      <span className='precio'>precio</span>
      <div>
        <button><AiOutlineCheck /></button>
        <button><AiOutlineClose /></button>
      </div>
    </div>
  )
}
