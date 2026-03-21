import Info_item from "./Info_item";

function Card() {
    return (
        <div className="items">
            <Info_item campo='E-mail' href='mailto:samuelarellano1@outlook.es' valor='samuelarellano1@outlook.es' color='color_cyan' activar='true' />
            <Info_item campo='Ubicacion' href='#contacto' valor='Puebla, Mexico' color='color_orange' activar='false' />
            <Info_item campo='Github' href='https://github.com/sam1-aa' valor='sam1-aa' color='color_cyan' activar='true' />
            <Info_item campo='Linkedin' href='https://linkedin.com/in/samuel-arellano-ambrocio' valor='samuel-arellano-ambrocio' color='color_cyan' activar='true' />
        </div>
    );
}

export default Card;