
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';



const PostForm = (props) => {
    const [postName, setPostName] = useState('');
    const [postId, setPostId] = useState('');

    const addPost = (event) =>{
        event.preventDefault();
        let post = {
            "post_name" : postName,
            "post_id" : postId
        }
        console.log(post);
        props.submitForm(post);
    }

  return (
    <Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formPostName">
      <Form.Label>Post Name</Form.Label>
      <Form.Control type="text" placeholder="Enter post name" value={postName}
       onChange ={(event)=> setPostName(event.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formPostId">
      <Form.Label>Post Id</Form.Label>
      <Form.Control type="text" placeholder="Enter post id" value={postId}
      onChange ={(event)=>setPostId(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default PostForm