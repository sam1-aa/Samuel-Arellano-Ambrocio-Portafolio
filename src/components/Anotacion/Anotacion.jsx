import { motion } from 'framer-motion';
import '/src/styles/Anotacion.css'
import { useState } from 'react';
function Anotacion() {
    const [anotar, setAnotar] = useState(false)

    return (
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={anotar ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }} transition={anotar ? { duration: 1 } : { delay: 4, duration: 1 }} viewport={anotar ? '' : { amount: 0.9, once: true }} className="anotar border_orange color_orange">
            <p>Los valores mostrados no corresponden a datos reales se incluyen unicamente como elementos visuales en el diseño.</p>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => { setAnotar(true) }} className='boton_anotar'>&times;</motion.button>
        </motion.div>
    )
}
export default Anotacion;