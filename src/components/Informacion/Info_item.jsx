function Info_item({ campo, valor, color }) {
    return (
        <div className="info_item">
            <span>&gt;&gt;</span>
            <div>
                <p>{campo}</p>
                <p className={color}>{valor}</p>
            </div>
        </div>
    );
}

export default Info_item;