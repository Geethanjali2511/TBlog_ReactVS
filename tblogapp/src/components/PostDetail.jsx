import React, { useEffect, useState, axios } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {

    const [post, setPost] = useState({})


const {id} =useParams();

useEffect (() => {
    axios.get(`http://localhost:8080/post/${id}`)
    .then(response =>{
        setPost(response.data)
    })
    .catch(error =>{
        console.log(error);
    })


}, [])


  return (
    <><div>Post id is {id}</div><>
    <h1>{postMessage.post_name}</h1>
    <h1>{postMessage.post_id}</h1></></>
  )
}

export default PostDetail