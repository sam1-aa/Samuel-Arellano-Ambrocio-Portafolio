
import '/src/styles/Presentacion.css'
import Titulo_seccion from '../Titulo_seccion';
import Titulo_card from '../Titulo_card';
import Dialogo from './Dialogo/Dialogo';
import '/src/styles/Sobre.css'
import Estadisticas from './Estadisticas/Estadisticas';
import Generales from './Generales/Generales';
import { motion, useInView } from 'framer-motion';
import { useEffect } from 'react';

function Sobre_mi() {
    return (
        <motion.section className=' seccion ' id='sobre-mi' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 1 }}>
            <div className="contenido sobremi">
                <Titulo_seccion titulo='Sobre mi' colorMarcador='color_yellow' />

                <div className='contenedor '>
                    <div className='subcontenedor' onClick={()=>{ document.querySelector('.habilidades').scrollIntoView({behavior:'smooth'}) }} style={{cursor:'pointer'}}>
                        <Titulo_card titulo='Dialogo' titulo_after='// Npc: Samuel' pixel_form_color='fondo_primary' />
                        <Dialogo />
                    </div>
                    <div className='subcontenedor border_orange' style={{ width: '100%' }}>
                        <Titulo_card titulo='Estadisticas' titulo_after='// RPG' pixel_form_color='fondo_red' />
                        <Estadisticas />
                        <Generales />
                    </div>
                </div>
            </div>
        </motion.section >
    );
}

export default Sobre_mi;
