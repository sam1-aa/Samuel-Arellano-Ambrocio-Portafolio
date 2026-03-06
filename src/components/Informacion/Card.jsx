import Info_item from "./Info_item";

function Card() {
    return (
        <>
            <Info_item campo='E-mail' valor='samuelarellano1@outlook.es' color='color_cyan' />
            <Info_item campo='Ubicacion' valor='Puebla, Mexico' color='color_orange' />
            <Info_item campo='Github' valor='https://github.com/sam1-aa' color='color_cyan' />
            <Info_item campo='Linkedin' valor='linkedin.com/in/samuel-arellano-ambrocio' color='color_cyan' />
        </>
    );
}

export default Card;