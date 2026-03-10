function Leyenda({ leyenda, color}) {
    return (
        <div className="leyenda">
            <hr />
            <span>Recompensa: </span>
            <span className={color}> {leyenda}</span>
        </div>
    );
}
export default Leyenda;