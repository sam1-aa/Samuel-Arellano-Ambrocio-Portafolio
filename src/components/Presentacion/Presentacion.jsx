
import { useState } from 'react';
import '/src/styles/Presentacion.css'
import { motion } from 'framer-motion';
function Presentacion({ onClick }) {
    const [comenzar, setComenzar] = useState(false)
    const [pointerEvent, setPointerEvent] = useState(false)
    setTimeout(() => {
        setComenzar(true);
        setPointerEvent(true);
    }, 3000);
    return (
        <motion.section
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            viewport={{ once: true }}
         className='seccion '>
            <div className="contenido presentacion" style={{pointerEvents:`${pointerEvent === true ? 'auto' : 'none'}`}} onClick={onClick}>
                <img className='logo' src="/images/logo.png" alt="Samuel_Arellano_Ambrocio.png" />
                <h1 className={`instruccion ${comenzar === true ? 'continuar mix' : 'espera'}`}>Presione para continuar</h1>
            </div>
        </motion.section>
    );
}

export default Presentacion;