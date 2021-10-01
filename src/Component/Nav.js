import react from 'react'
import {  Link } from "react-router-dom";




function Nav() {

    const navStyle={
      color:'white'
    }

  return (
    <div className="App">

      <nav className="Nav">

       <ul className= "NavLink">
       <Link to = "/" style={navStyle}> <li>Home</li></Link>
        <Link to = "/blog" style={navStyle}> <li>Blog</li></Link>
        <Link to="/contact" style={navStyle}><li>Contact</li></Link>
        <Link to="/shop" style={navStyle}><li>Shop</li></Link>
        <Link to="/about" style={navStyle}><li>About</li></Link>


       </ul>


      </nav>

    </div>
  );
}

export default Nav;
