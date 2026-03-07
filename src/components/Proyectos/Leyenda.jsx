function Leyenda({ texto, comentario }) {
    return (
        <div className="leyenda">
            <hr />
            <span>{texto}</span>
            <span className="color_yellow"> {comentario}</span>
        </div>
    );
}
export default Leyenda;