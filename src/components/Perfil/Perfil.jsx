import '/src/styles/Perfil.css'
import { motion } from 'framer-motion';
import Imagen from './Imagen/Imagen';
import Estadisticas from './Estadisticas/Estadisticas';

function Perfil() {
  return (
    <motion.section className='seccion' id='perfil' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true, amount: 0.7 }}>
      <div className="perfil">
        <Imagen />
        <Estadisticas campo='Hp' puntuacion='1000' multiplicador='1' color='color_red' fondo='fondo_red' />
        <Estadisticas campo='Agi' puntuacion='850' multiplicador='1' color='color_cyan' fondo='fondo_cyan' />
        <Estadisticas campo='Exp' puntuacion='9600' multiplicador='10' color='color_yellow' fondo='fondo_yellow' />

        <h2 className='nombre'>Samuel Arellano</h2>
        <p>lvl 25 // class: Desarrollador backend</p>
        <h3 className='titulacion'>Ingeniero en sistemas computacionales<span className='cursorActivo cursorParpadeante'></span></h3>
        <div className='perfil_acciones'>
          <a className='sombra_solida' onClick={() => { document.querySelector('.proyectos').scrollIntoView({ behavior: 'smooth' }) }}>Ver proyectos</a>
          <a className='sombra_solida' onClick={() => { document.querySelector('.contacto').scrollIntoView({ behavior: 'smooth' }) }}>Contacto</a>
        </div>
        <div className='perfil_scroll' onClick={() => { document.querySelector('.sobreMi').scrollIntoView({ behavior: 'smooth' }) }}>
          <span>Continuar deslizando</span>
          <span className='cursorParpadeante '>V</span>
        </div>
      </div>
    </motion.section>
  );
}
export default Perfil;