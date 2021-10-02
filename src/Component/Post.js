import {useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../Store/actionCreator'
import "../Style/Post.css"






function Post(props) {


    const [blog,setBlog]= useState({})

    const handleBlogChange = (e) =>{

      setBlog({
        ...blog,
        [e.target.name]:e.target.value
      })

    }

    const handleBlogPost = () => {

      console.log (JSON.stringify(blog))
       fetch('http://localhost:3080/blog/post',{
       method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
    }).then(response => response.json()).then(result=>{
       //fetch a blog
             props.onBlogsLoaded()


    })

   }

    return (
        <div  Id= "InputContainer" >
          <form className="Post" >
        <h1>Share only The Fact </h1>
         <div class="postimage">
          <input
            type="url"
            name="imageUrl"
            required
            placeholder="Share your Picture "
            onChange={handleBlogChange}
          />
        </div>

        <div className="title">
          <input
            type="text"
            name="title"
            required
            placeholder="Enter the title of your Article"
            onChange={handleBlogChange}
          />
        </div>
        <div className="BlogBody">
          <input class
            type="text"
            name="body"
            required
            placeholder="Enter detail description of Your Article "
            onChange={handleBlogChange}
          />



        </div>

            <button onClick = {handleBlogPost}>Post</button>
      </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogsLoaded:() => dispatch(actionCreator.fetchBlogs())

  }
}

export default connect (null,mapDispatchToProps) (Post)
