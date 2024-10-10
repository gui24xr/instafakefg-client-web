
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Profilepage() {

  const [postsData, setPostsData] = useState(null)
  //aca empezar  a armar que datos se mostraramn en el componente y empezar a setear y poner valor e instanciar los campos debidos para un profile deesde el el front para luego hacer ;a pedida al bakc y empezar a armar oa data de  pedida de usuarios a sequilize 
  //los campos que se mostararan y son dinamicos se instanciaran en un userState para poder conectar ese valor de acuerdo al back y cambiar aqui en el front 






  /*  routerPosts.get('/posts/:uid',async(req,res,next)=>{
     const {uid:userId} = req.params
     res.send('hola ppeito')
 })
 
   useEffect(()=>{
     axios.get('http://localhost:8080/posts/:uid')
     .then( data => console.log(data))
   },[])
*/
  return (
    <div>
      <h1>PROFILEPAGE</h1>
    </div>
  )
}
