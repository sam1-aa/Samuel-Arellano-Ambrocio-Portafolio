import { motion } from "framer-motion";

function Estadisticas({ campo, puntuacion, multiplicador, color, fondo }) {
    const tamano_barra = (puntuacion * 100) / (1000*multiplicador);
    return (
        <div className='estadisticas_personaje'>
            <span className={color}>{campo}</span>
            <div className='barra'>
                <motion.div initial={{ x:"-100%"}} animate={{x: 0}} transition={{duration:1, delay:0.5}} viewport={{amount:1, once:true}}  className={fondo} style={{ width: `${tamano_barra}%` }}>?</motion.div>
            </div>
            <p className={color}>{puntuacion-1}/{(1000*multiplicador)-1}</p>
        </div>
    )
}
export default Estadisticas;