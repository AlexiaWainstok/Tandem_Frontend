import { useState } from "react";

import Button from "./Componentes/UI/Button";
import Input from "./Componentes/UI/Input";
import Card from "./Componentes/UI/Card";
import Divider from "./Componentes/UI/Divider";
import Logo from "./Componentes/UI/Logo";
import SocialButton from "./Componentes/UI/SocialButton";

import "./App.css";

function App() {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const iniciarSesion = () => {
    alert("Iniciando sesión");
  };

  return (
    <div className="app">

      <Card>

        <Logo />

        <Input
          type="text"
          placeholder="Nombre de usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <Divider />

        <div className="social-buttons">

          <SocialButton>
            G
          </SocialButton>

          <SocialButton>
            f
          </SocialButton>

          <SocialButton>
            
          </SocialButton>

        </div>

        <Button onClick={iniciarSesion}>
          Iniciar sesión
        </Button>

        <Button>
          Registrarse
        </Button>

      </Card>

    </div>
  );
}

export default App;