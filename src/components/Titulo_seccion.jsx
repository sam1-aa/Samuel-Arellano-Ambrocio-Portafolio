function Titulo_seccion({ titulo, colorMarcador }) {
    return (

        <div className='area_titulo_tarjeta '>
            <span className={`${colorMarcador}`}>&gt;&gt;&gt;</span>
            <h3>{titulo}</h3>
            <hr />
        </div>
    );
}
export default Titulo_seccion;