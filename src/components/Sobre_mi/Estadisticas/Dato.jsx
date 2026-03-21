import { motion } from "framer-motion";

function Dato({ valor, puntuacion, fondo }) {
    const total = 100;

    return (
        <div className="dato">
            <span className="valor">{valor}</span>
            <span className="puntuacion">{puntuacion}/{total}</span>
            <div className='progreso_contenedor'>
                <motion.div
                    style={{ width: `${puntuacion}%` }}
                    initial={{ x: "-50%", opacity: 0 }}
                    whileInView={{ x: "-0%", opacity: 1 }}
                    transition={{ duration: 2, delay:1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`progreso ${fondo}`}
                ></motion.div>
            </div>
        </div>
    )
}
export default Dato;