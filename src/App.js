
import Nav from './Component/Nav'
import About from './Component/About'
import Shop from './Component/Shop'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Post from './Component/Post'
import Blog from './Component/Blog'
import Footer from './Component/Footer'
import {BrowserRouter as Router,Switch,  Route,  Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './App.css'



function App() {
  return (

    <div class="container">

                <div className="Main">

                    <Router>
                       <Nav/>

                      <Route path ="/" exact component ={Home}/>
                      <Route path ="/about" exact component ={About}/>
                      <Route path ="/shop" exact component ={Shop}/>
                      <Route path ="/contact" exact component ={Contact}/>
                      <Route path ="/blog/Post" exact component ={Post}/>
                      <Route path ="/blog" exact component ={Blog}/>
                      </Router> </div>


        <div className="content"> </div>
         <div className="footer"><Footer/></div>
  </div>












  );
}

export default App;
