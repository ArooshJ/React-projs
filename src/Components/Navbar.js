import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(props) {
  const navLiStyle ={
    margin: '2px 2px',
    textDecoration:'none',
    color:'Red',
  }

  // const handleLinkClick = (e) => {
  //   e.preventDefault();
  //   const link = e.target.getAttribute('href');
  //   // Additional logic to update login state or perform other action
  //   {props.onclk}

  //   // Proceed with navigation after handling login state
  //   window.location.href = link;
  // };
  const nav = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'textEditor', label: 'TextEditor', href: '/TextEditor' },
    { id: 'page3', label: 'Page3', href: '/Page3' },
  ];

  const navclick = ()=>{
    
  }
  
  const items = nav.map(pg =>
     <li key ={pg.id}> <Link to={pg.href} style={navLiStyle} onClick={navclick} > {pg.label}</Link></li>
     );
  const [navStyle,setNavStyle] = useState({
    // position: 'absolute',
    top: '0px',
    border: '1px solid red',
    backgroundColor: 'cyan',
    color:'red',
    padding:'0',
    margin:'0',
    width:'99%',
    height:'30px',
    borderRadius:'0px'
    // overflow:'auto'
    
    

  });

 
  
  const navItemsStyle ={
    
    listStyleType: 'none',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    flexGrow:1,
    overflow:'hidden',
    margin: 0
    
  }
  
    
  return (
    <div>
       <nav className='Navbar' style={navStyle}>
        <ul style={navItemsStyle}>
            {items}
        </ul>
       </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
