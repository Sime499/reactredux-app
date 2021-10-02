



import '../Style/Home.css';
import Carousel from 'react-bootstrap/Carousel'
import Post from './Post'
import Blog from './Blog'
import {ImageData} from './ImageData'
import "../Style/Home.css"
import "../Style/Blog.css"








function Home(props) {
 return (
     <div ClassName="Blog-container">
     {ImageData.map((Image,index) => {
       return <img className="Slide"    src ={ImageData.image} alt="travel image"/>;
     })}
     <h1 ClassName= "Home" >Traveling Is the Ultimate drug.The More You Travels,the more addictive it becomes</h1>

     </div>



 );
}

export default Home;
