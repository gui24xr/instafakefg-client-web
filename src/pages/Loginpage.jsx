import React from "react";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";



export default function Loginpage() {


  const [loading, setLoading] = useState(false)
  const [requestData, setRequestData] = useState(null)



  useEffect(() => {
    console.log('Request data: ', requestData)
  }, [requestData])





  return (
    <div className="min-w-full">
      <LoginForm />
    </div>
  );
}
