import React from 'react'
import Post from './Post'
import {Row, Col} from 'react-bootstrap';
import PostForm from './PostForm'
const AllPosts = () => {

  const post= [{ "post_id": 1, "post_date": "22-06-2022", "post_title": "Computer1", "post_content": "Hello Computer", post_url: "something.com", post_video: "something.com/video", user_id: 1, post_image: "../assets/components/pic" },
  { "post_id": 2, "post_date": "23-06-2022", "post_title": "Computer2", "post_content": "Hello Computer2", post_url: "something.com", post_video: "something.com/video", user_id: 2, post_image: "../assets/components/pic" },
  { "post_id": 3, "post_date": "24-06-2022", "post_title": "Computer3", "post_content": "Hello Computer3", post_url: "something.com", post_video: "something.com/video", user_id: 3, post_image: "../assets/components/pic" },
  { "post_id": 4, "post_date": "25-06-2022", "post_title": "Computer4", "post_content": "Hello Computer4", post_url: "something.com", post_video: "something.com/video", user_id: 4, post_image: "../assets/components/pic" },
  { "post_id": 5, "post_date": "26-06-2022", "post_title": "Computer5", "post_content": "Hello Computer5", post_url: "something.com", post_video: "something.com/video", user_id: 5, post_image: "../assets/components/pic" },
  { "post_id": 6, "post_date": "27-06-2022", "post_title": "Computer6", "post_content": "Hello Computer6", post_url: "something.com", post_video: "something.com/video", user_id: 6, post_image: "../assets/components/pic" },
  { "post_id": 7, "post_date": "28-06-2022", "post_title": "Computer7", "post_content": "Hello Computer7", post_url: "something.com", post_video: "something.com/video", user_id: 7, post_image: "../assets/components/pic" },
  { "post_id": 8, "post_date": "29-06-2022", "post_title": "Computer8", "post_content": "Hello Computer8", post_url: "something.com", post_video: "something.com/video", user_id: 8, post_image: "../assets/components/pic" },
  { "post_id": 9, "post_date": "30-06-2022", "post_title": "Computer9", "post_content": "Hello Computer9", post_url: "something.com", post_video: "something.com/video", user_id: 9, post_image: "../assets/components/pic" }]

  //let postList = " ";

  
    let postList = post.map(post =>
      <div key={post.post_id}>
        <Post post={post} />
      </div>)

    const addNewPost = (post) => {
       post.push(post);
       console.log(post);

  }

  return (
      <><h1>AllPosts: </h1><Row>
      <Col>{postList}</Col>
      <Col><PostForm submitForm={addNewPost} /></Col>
    </Row></>
    
  )
}

export default AllPosts