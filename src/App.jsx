import Particulas from "./components/Particulas/Particulas";
import Encabezado from "./components/Navbar/Encabezado";
import Perfil from "./components/Perfil/Perfil";
import Sobre_mi from "./components/Sobre_mi/Sobre_mi";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import '/src/App.css'
import '/src/styles/Animaciones.css'
import '/src/styles/Colores.css'
import '/src/styles/Leyenda.css'
import "/src/App.css";
import Pie from "./components/Pie/Pie";

function App() {
  return (
    <>
    <Particulas/>
      <Encabezado />
      <Perfil />
      <Sobre_mi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Pie/>
    </>
  );
}

export default App;
