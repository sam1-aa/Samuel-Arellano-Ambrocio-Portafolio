import { useState } from 'react';
import Titulo_seccion from '../Titulo_seccion';
import Titulo_card from '../Titulo_card';
import Listado from './Listado';
import Leyenda from './Leyenda';
import Descripcion from './Descripcion';
import '/src/styles/Proyectos/Proyectos.css'
import '/src/styles/Proyectos/Descripcion.css'
import { motion } from "framer-motion";

function Proyectos() {
    const [proyectoActivo, setProyectoActivo] = useState("Portafolio pixel");
    return (
        <motion.section className='seccion' id='proyectos' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.7 }} >
            <div className="contenido proyectos">
                <Titulo_seccion titulo='Proyectos' colorMarcador='color_cyan' />

                <div className='contenedor '>
                    <div className='subcontenedor'>
                        <Titulo_card titulo='Misiones' titulo_after='' pixel_form_color='fondo_yellow' />
                        <Listado setProyectoActivo={setProyectoActivo} />
                        <Leyenda leyenda='4/4' color='color_muted' />
                    </div>

                    <div className='subcontenedor border_orange'>
                        <Descripcion proyectoActivo={proyectoActivo} />

                    </div>
                </div>
            </div>
        </motion.section >
    );
}

export default Proyectos;
