import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Boton from "./Componentes/Boton";
import Input from "./Componentes/Input";

function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Desafío de estados y componentes</h1>
      <Input
        nombre={nombre}
        setNombre={setNombre}
        password={password}
        setPassword={setPassword}
      >
        
      </Input>
      {password === "252525" &&
        (<Boton></Boton>)
      }

    </div>
  );
}

export default App;
