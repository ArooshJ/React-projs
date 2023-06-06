import React, { useEffect, useInsertionEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import './Styless/Library.css'
import { useSearchParams } from 'react-router-dom'

export default function Library() {
const [books,setBooks] = useState([])

const fetchapi = async(api)=>{
    let data = await fetch(api)
    let parsedData = await data.json();
    console.log(parsedData)
    setBooks(parsedData)
}

useEffect(()=>{
  fetchapi('https://openlibrary.org/api/books');

},[])
 
// const bookcards = books.map(book =>{

// })
  

  return (
    <div>
    
    <div className="leftmenu">
      Leftmenu
      <ul className="leftmenui">
        <li className="lmi">
          Categories
        </li>
        <li className="lmi">
          BestSellers
        </li>
        <li className="lmi">
          Trending
        </li>
        <li className="lmi">
          Free
        </li>
      </ul>
    </div>

      Library
      <div className="CardContainer">
     
     </div>

      <br /><br />
    </div>
  )
}
