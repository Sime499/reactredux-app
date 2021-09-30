
import Nav from './Component/Nav'
import About from './Component/About'
import Shop from './Component/Shop'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Post from './Component/Post'


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

</Router>

  );
}

export default App;
