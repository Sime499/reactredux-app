import {  Link } from "react-router-dom";
import '../Style/Nav.css'




function Nav() {

    const navStyle={
      color:'Black'
    }

  return (
    <div className="Header">


      <div className="top-right">
      <i className="fab fa-twitter-square"></i>
       <i className="fab fa-facebook-square"></i>
       <i className="fab fa-instagram-square"></i>
       <i className="fab fa-linkedin-in"></i>
     </div>

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
