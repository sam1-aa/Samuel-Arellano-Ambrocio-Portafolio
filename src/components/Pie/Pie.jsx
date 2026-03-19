import { motion } from 'framer-motion';
import '/src/styles/Pie.css'
function Pie() {
    return (
        <>
            <motion.div className="seccion  Pie" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.7 }} >
                <div className='contenedor Pie_contenedor'>
                    <img className='Pie_img' src="/public/images/logo.png" alt="" />
                        <p>Hecho con &lt;3 retro, cada click cuenta</p>
                        <p>&copy; Samuel Arellano Ambrocio 2026</p>
                        <p className='coin cursorParpadeante'>insert coin to continue...</p>
                </div>
            </motion.div >
        </>
    )
}
export default Pie;
