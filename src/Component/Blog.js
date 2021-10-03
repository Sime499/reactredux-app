

import { useEffect } from 'react'
import  Post from './Post'
import {connect} from 'react-redux'
import * as actionCreator from '../Store/actionCreator'
import '../Style/Blog.css';


function Blog(props) {


  useEffect(()=>{

        props.onBlogsLoaded()
  },[])


   const blogItems = props.blogs.map(blog => {
      return <li className ="BlogBox" key ={blog.id}><img href="imageUrl" className="imageUrl"src= {blog.imageUrl} alt="logo" /> <h3 className="City">{blog.title}</h3>
      <p>{blog.body}</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
