import { Provider } from "react-redux"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//importamos store que engloba los estados 
import { store } from "./redux/store.js"

//primero creamos el provider que englobara app 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>


)
