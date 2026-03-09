import Encabezado from "./components/Navbar/Encabezado";
import Presentacion from "./components/Presentacion/Presentacion";
import Perfil from "./components/Perfil/Perfil";
import Sobre_mi from "./components/Sobre_mi/Sobre_mi";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import './App.css'
import './styles/Animaciones.css'
import './styles/Colores.css'
import './styles/Leyenda.css'
import './styles/Descripcion.css'
import { useState } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {!start && (
        <>
          <Presentacion onClick={() => { setStart(true) }} />
        </>
      )}

      {start && (
        <div className="fadeIn">

          <Encabezado />
          <Perfil />
          <Sobre_mi />
          <Habilidades />
          <Proyectos />
          <Contacto />

        </div>
      )}

    </>
  );
}

export default App;
