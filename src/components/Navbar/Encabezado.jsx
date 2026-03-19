
import '/src/styles/Encabezados.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
function Encabezado() {
    const [active, setActive] = useState('perfil');
    const handleClick = (section) => {
        setActive(section);
    }
    const link = ['perfil', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            transition={{duration: 1, delay:1.5}}
            viewport={{once: true}}
            className="Encabezado ">
            <h1>&lt;SAA/&gt;</h1>
            <nav className='nav_principal'>
                <ul>
                    {link.map((link) => (
                        <li key={link}>
                            <a className={active === link ? 'icono_activo texto_activo' : 'inactivo'} href={`#${link}`} onClick={() => { handleClick(link) }}>
                                {link.replace('-', ' ')}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
}

export default Encabezado;