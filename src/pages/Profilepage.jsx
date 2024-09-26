import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Profilepage() {

    const [postsData,setPostsData]=useState(null)


    routerPosts.get('/posts/:uid',async(req,res,next)=>{
      const {uid:userId} = req.params
      res.send('hola ppeito')
  })
  
    useEffect(()=>{
      axios.get('http://localhost:8080/posts/:uid')
      .then( data => console.log(data))
    },[])

  return (
    <div>
      <h1>PROFILEPAGE</h1>
    </div>
  )
}
