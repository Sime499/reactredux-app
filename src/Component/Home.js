
import {  Link } from "react-router-dom";

 import '../Style/Home.css';
 import Post from './Post'
 import Blog from './Blog'
 import {ImageData} from './ImageData'
 import "../Style/Home.css"
 import "../Style/Blog.css"
 import Footer from './Footer'
 import "../Style/Nav.css"




function Home(props) {
  return (
      <div ClassName="Blog-container">
      {ImageData.map((image,index) => {
        return <a><img className="Slide" src ={image.image} alt="travel image"/></a>;
      })}
      </div>



  );
}

export default Home;
