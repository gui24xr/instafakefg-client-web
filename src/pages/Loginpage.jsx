import React from "react";
import { useEffect,useState } from "react";
import LoginForm from "../components/LoginForm";

export default function Loginpage() {

  const [userInputText,setUserInputText] = useState({username:"",password:""})
  const [loading,setLoading]=useState(false)
  const [requestData,setRequestData] = useState(null)



  useEffect(()=>{
    console.log('Request data: ', requestData)
  },[requestData])


  const onHandlerSubmit= (event) =>{
    event.preventDefault()
    console.log('submit')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setRequestData(json))
  }
  

  return (
    <div className="min-w-full">
      <LoginForm/>
    </div>
  );
}
