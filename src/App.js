
import Nav from './Component/Nav'
import About from './Component/About'
import Shop from './Component/Shop'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Post from './Component/Post'
import Blog from './Component/Blog'



import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
<Router>
      <Nav/>
      <Route path ="/" exact component ={Home}/>
      <Route path ="/about" exact component ={About}/>
      <Route path ="/shop" component ={Shop}/>
      <Route path ="/contact" component ={Contact}/>
      <Route path ="/blog/Input" component ={Post}/>
      <Route path ="/blog" component ={Blog}/>




</Router>

  );
}

export default App;
