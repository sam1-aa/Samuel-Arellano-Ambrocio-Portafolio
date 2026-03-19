import { motion } from 'framer-motion';
import '/src/styles/Habilidades.css'
import Titulo_seccion from '../Titulo_seccion';
import Listado from './Listado/Listado';
import Items from './Listado/Items';
import { useState } from 'react';

function Habilidades() {
    const [active, setActive] = useState('Lenguajes');
    return (
        <motion.section className='seccion' id='habilidades' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.7 }} >
            <div className="contenido habilidades">
                <Titulo_seccion titulo='Skills & Habilidades' colorMarcador='color_red' />
                <div className='contenedor '>
                    <div className='subcontenedor border_primary' style={{ padding: '0', height:'max-content'}}>
                        <Listado active={active} setActive={setActive} />
                        <Items active={active}/>
                    </div>
                </div>
            </div>
        </motion.section >
    );
}

export default Habilidades;