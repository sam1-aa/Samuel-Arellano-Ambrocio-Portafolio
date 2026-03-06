function Campo({ label, type = "text", placeholder, id, textarea = false }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>

            {textarea ?
                (
                    <textarea id={id} rows="5" placeholder={placeholder} required></textarea>
                ) : (
                    <input id={id} type={type} placeholder={placeholder} required />
                )}
        </>
    );
}

export default Campo;