import React from 'react'
import { Button, Card } from 'react-bootstrap'
import pic from '../assets/wit.jpg'

const Post = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic} />
    <Card.Body>
      <Card.Title>{props.post.post_name}</Card.Title>
      
      <Card.Text>This is team {props.post.post_id}.
      </Card.Text>
      <Button variant="primary">Here</Button>
    </Card.Body>
  </Card>
  )
}

export default Post