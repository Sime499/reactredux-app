
import {ImageData} from './ImageData'
import "../Style/Home.css"
import {connect} from 'react-redux'
import * as actionCreator from '../Store/actionCreator'
import { useEffect } from 'react'





 function Home(props) {



  useEffect(()=>{

        props.onBlogsLoaded()
  },[])


   const blogItems = props.blogs.map(blog => {
      return <li className ="BlogBox" key ={blog.id}><img href="imageUrl" className="imageUrl"src= {blog.imageUrl} alt="logo" /> <h3>{blog.title}</h3>

      </li>
   })

  return (

      <ul BlogContainer>

      {blogItems}

      </ul>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogsLoaded:() => dispatch(actionCreator.fetchBlogs())

  }
}

const mapStateToProps = (state) =>{
  return{
    blogs:state.blogs
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
