
const EjemplosCondicional = () => {
    const usuario = {
        nombre: 'Pepito',
        rol: 'Admin',
        // id: 875
    }

    return (
        <>
            <h3>Perfil de usuario</h3>
            {
                usuario.id ? (
                    <>
                        <p>Nombre: {usuario.nombre}</p>
                        <p>rol: {usuario.rol}</p>
                    </>
                ) : (
                    <p>Inicie sesión para ver su perfil</p>
                )
            }
        </>
    )
}

export default EjemplosCondicional