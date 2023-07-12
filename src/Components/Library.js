import React, { useEffect, useInsertionEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import './Styless/Library.css'
import { useSearchParams } from 'react-router-dom'

export default function Library() {
// const [books,setBooks] = useState([])

// const fetchapi = async(api)=>{
//     let data = await fetch(api)
//     let parsedData = await data.json();
//     console.log(parsedData)
//     setBooks(parsedData)
// }

// useEffect(()=>{
//   fetchapi('https://openlibrary.org/api/books');

// },[])

const [books,setBooks] =useState( [
  {
    ID: 1,
    Name: "Book1",
    Image: "",
    Author:"Author",
    Publication: "Publication",
    Published_on: "DDMMYYYY",
    Price:`${13}`,
  },
  {
    ID:2,
    Name: "Book1",
    Image: "",
    Author:"Author",
    Publication: "Publication",
    Published_on: "DDMMYYYY",
    Price:`${13}`,
  },
  {
    ID: 3,
    Name: "Book1",
    Image: "",
    Author:"Author",
    Publication: "Publication",
    Published_on: "DDMMYYYY",
    Price:`${13}`,
  },
  {
    ID:4,
    Name: "Book1",
    Image: "",
    Author:"Author",
    Publication: "Publication12",
    Published_on: "DDMMYYYY",
    Price:`${13}`,
  },
  { ID:5,
    Name: "Book1",
    Image: "",
    Author:"Author",
    Publication: "Publication2",
    Published_on: "DDMMYYYY",
    Price:`${13}`,
  },
]
)

const [leftmenustyle,setLeftmenustyle] = useState({
  display:'none',
})
const [cardcontainerstyle,setCardcontainerstyle] = useState({
  width:'100%',
  left:'0%',
})

const openmenu = ()=>{
 setLeftmenustyle({
  display:'flex',
 })
 setCardcontainerstyle({
  width:'85%',
  left:'15%'
 })
}
const closemenu = ()=>{
 setLeftmenustyle({
  display:'none',
 })
 setCardcontainerstyle({
  width:'100%',
  left:'0%'
 })
}

 
const bookcards = books.map(book => <div className='bookcard'>
  <div className="image"><img src={book.img} alt="Sorry" /></div>
  <div className="nonimg">
    <div className="name">{book.Name}</div>

<div className="info">
 <div className="Author"> Author: {book.Author}</div>
  <div className="publication">Publication: {book.Publication}</div>
 <div className="publishedon">Published on: {book.Published_on}</div> 
 <div className="price"> Price: {book.Price}</div>
 </div> 

<div className="buy">
  <div className='addtocart'><button className='addtocartbtn'>Add to Cart</button></div>
  <div className='buynow'><button>Buy Now</button></div>
</div>
  </div>

</div>
  
  )
  

  return (
    <div className='library'>
    <div className="libtitle">
      <div className="menuopen" onClick={()=>{openmenu()}}>menu</div>
      <div className="Welcome">Welcome to MyLibrary </div>
    </div>
    <div className="leftmenu" style={leftmenustyle}>
     <div className="lmtitle">
      LeftMenu 
     <div className="closemenu" onClick={()=>{closemenu()}}>x</div>
     </div>
      <div className="leftmenuul">
      <ul className="leftmenui">
      <li className="home">
        Home
      </li>
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
    </div>

      <div className="CardContainer" style={cardcontainerstyle}>
       {bookcards}
     </div>

      <br /><br />
    </div>
  )
}
