function Campo({ type = "text", placeholder, id, textarea = false }) {
    return (
        <>
            <label htmlFor={id}>{id}:</label>

            {textarea ?
                (
                    <textarea name={id} id={id} rows="5" placeholder={placeholder} required></textarea>
                ) : (
                    <input name={id} id={id} type={type} placeholder={placeholder} required />
                )}
        </>
    );
}

export default Campo;