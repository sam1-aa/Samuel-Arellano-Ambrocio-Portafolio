function Listado({ active, setActive }) {
    const habilidades = ['Lenguajes', 'Frameworks', 'Base-de-datos', 'Herraminetas']
    return (
        <nav>
            <ul className="ul_listado">
                {habilidades.map((habilidad) => (
                    <li key={habilidad} className={`li_listado ${active === habilidad ? ' icono_activo_habilidades texto_activo_habilidades' : 'inactivo_habilidades'}`} onClick={() => { setActive(habilidad) }}>
                        <a >
                            {
                                habilidad.replaceAll('-', ' ')
                            }
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default Listado;