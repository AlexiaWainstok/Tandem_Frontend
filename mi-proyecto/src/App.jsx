import { useState, useEffect } from 'react'

import Button from "./Componentes/UI/Button";
import Input from "./Componentes/UI/Input"; 
//import Divider from "./Componentes/UI/Divider"; 
import Card from "./Componentes/UI/Card";  
//import Logo from "./Componentes/UI/Logo"; 
//import SocialButton from "./Componentes/UI/SocialButton"; 

import './App.css'

function App() {
  
  




  return (
      <>

  <Card>

      <Input type="text" placeholder="Nombre de usuario"/>
      <Input type="password"placeholder="Contraseña"/>


      <Button onClick = {"hola"}>
        Iniciar sesión
      </Button>

      <Button>
        Registrarse
      </Button>

   </Card>
    </>
  )
}



export default App
