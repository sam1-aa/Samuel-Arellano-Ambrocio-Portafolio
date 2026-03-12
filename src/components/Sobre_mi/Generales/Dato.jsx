function Dato({dato, valor, color}) {
    return (
        <>
        <span className="G_dato">{dato}</span>
        <span className={`${color}`}>{valor}</span>
        </>
    )
}
export default Dato;