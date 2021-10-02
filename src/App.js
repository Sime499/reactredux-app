
import Nav from './Component/Nav'
import About from './Component/About'
import Shop from './Component/Shop'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Post from './Component/Post'
import Blog from './Component/Blog'
import Footer from './Component/Footer'







import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div>

<Router>
      <Nav/>
      <Route path ="/" exact component ={Home}/>
      <Route path ="/about" exact component ={About}/>
      <Route path ="/shop" exact component ={Shop}/>
      <Route path ="/contact" exact component ={Contact}/>
      <Route path ="/blog/Post" exact component ={Post}/>
      <Route path ="/blog" exact component ={Blog}/>

</Router>
<Footer />
</div>


  );
}

export default App;
