import {  Link } from "react-router-dom";
import '../Style/Nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Nav() {

    const navStyle={
      color:'Black'
    }

  return (
    <div className="header">

      <nav className="Nav">

       <ul className= "NavLink">
       <Link className="Link" to = "/" style={navStyle}> <li>Home</li></Link>
        <Link className="Link" to = "/blog" style={navStyle}> <li>Blog</li></Link>
        <Link className="Link" to="/contact" style={navStyle}><li>Contact</li></Link>
        <Link className="Link" to="/shop" style={navStyle}><li>Shop</li></Link>
        <Link className="Link" to="/about" style={navStyle}><li>About</li></Link>
       </ul>
      </nav>


      <div className="top-right" >

              <a href="https://www.youtube.com"  className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
              <a href="https://www.linkedin.com/in/sime-weldegebrile-70969b57?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_
              contact_details%3BfjpEUPyRQnCjpG%2B3%2FLIiLA%3D%3D"
              className="Linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              <a href="https://www.facebook.com"className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="https://www.twitter.com" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
              <a href="https://www.instagram.com"className="instagram "><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        </div>

    </div>
  );
}

export default Nav;
