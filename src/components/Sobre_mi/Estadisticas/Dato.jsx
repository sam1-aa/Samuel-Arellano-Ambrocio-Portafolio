function Dato({ valor, puntuacion, fondo }) {
    const total = 100;

    return (
        <div className="dato">
            <span className="valor">{valor}</span>
            <span className="puntuacion">{puntuacion}/{total}</span>
            <div className='progreso_contenedor'>
                <div className={`progreso ${fondo}`} style={{width:`${puntuacion}%`}} ></div>
            </div>
        </div>
    )
}
export default Dato;