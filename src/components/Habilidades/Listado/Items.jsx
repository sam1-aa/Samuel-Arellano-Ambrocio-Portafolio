import { motion } from "framer-motion";

function Items({ active }) {
    const datos = {
        'Lenguajes': ['Java', 'JavaScript'],
        'Frameworks': ['React', 'Node.js', 'Spring boot'],
        'Base-de-datos': ['MySQL', 'MongoDB', 'Google Realtime database', 'Json'],
        'Herraminetas': ['Git', 'Android Studio', 'Vite', 'Postman']
    };

    let total_items = datos[active].length;
    let total_datos = 0;

    for (let key in datos) {
        total_datos += datos[key].length;
    }

    const lista = datos[active] || [];

    return (
        <>
            <div className="c_items">
                <nav>
                    <ul className="ul_item">
                        {lista.map((lista, index) => (
                            <li key={lista} className="li_item">
                                <a>
                                    <span className="enumeracion_item">{index + 1}.</span> {lista.replaceAll('-', ' ')}
                                    <div className="linea_item">
                                        <motion.div className="linea" initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ amount: 1, once: true }}></motion.div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <br />
                <div className="leyenda_habillidades">
                    <span className="total_datos">Items en inventario: {total_datos}</span>
                    <span className="total_items">equipado: {total_items} items</span>
                </div>
            </div>
        </>
    )
}
export default Items;