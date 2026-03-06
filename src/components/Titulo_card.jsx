function Titulo_card({ titulo, titulo_after, pixel_form_color}) {
    return (
        <div className='titulo_formulario'>
            <div className={`pixel_form ${pixel_form_color}`}></div>
            <span className={`${titulo_after}`}>{titulo}</span>
        </div>
    );
}
export default Titulo_card;