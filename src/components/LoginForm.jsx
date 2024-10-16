import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";


export default function LoginForm() {

  const dispatch = useDispatch()//dispatch reduux 


  const navigate = useNavigate()
  const [userInputText, setUserInputText] = useState({ username: "", password: "" })

  /*
  Effect(()=>{
      console.log('Valor userInputText: ',userInputText )
  
    },[userInputText])
*/

  const onHandlerSubmit = (event) => {
    event.preventDefault()
    console.log('submit')

    const formData = new FormData(event.target)
    const { userName, password } = Object.fromEntries(formData.entries())
    //console.log('peeptpeepte: TE AMO LUISMIGUEL', userName, password)


    axios.post('http://localhost:8080/api/sessions/login', {
      userName: userName,
      password: password
    }, { withCredentials: true })
      .then(function (response) {
        console.log("Esta de aqui es datata data ", response.data.data)
        dispatch(setCurrentUser({ ...response.data.data }))
        //aca almacenamos en el dispatch 

        //ACA ALMACENAMOS LOS DATOS DEL USER LOGUEADO PERO DE LADO CLIENTE...
        navigate('/profile')
      })
      .catch(function (error) {
        console.log(error);

        if (error.status == 401) alert('Usuario o contraseña incorrectos...')
        else navigate('/errorpage')
      });

  }

  return (
    <form onSubmit={onHandlerSubmit} class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Username
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="input-username"
            name="userName"
            type="text"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="input-password"
            type="password"
            name="password"
            placeholder="******************"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}
