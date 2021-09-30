import { useEffect } from 'react'
import  Post from './Post'
import {connect} from 'react-redux'
import * as actionCreator from '../Store/actionCreator'


function App(props) {

  //const [blogs,setBlogs]=useState([])

  useEffect(()=>{

        props.onBlogsLoaded()
  },[])


   const blogItems = props.blogs.map(blog => {
      return <li key ={blog.id}>{blog.title} {blog.body}
      <img src={blog.imageUrl} alt="logo" />
      </li>
   })

  return (

      <ul>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
