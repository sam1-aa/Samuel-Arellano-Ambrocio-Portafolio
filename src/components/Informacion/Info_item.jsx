
function Info_item({ campo, href, valor, color }) {
    return (
        <a href={href} target="_blank" className="info_item">
            <span>&gt;&gt;</span>
            <div>
                <p>{campo}</p>
                <p className={color}>{valor}</p>
            </div>
        </a>
    );
}

export default Info_item;