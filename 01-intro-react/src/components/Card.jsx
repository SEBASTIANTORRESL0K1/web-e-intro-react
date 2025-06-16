

export const Card = ({nombre, profesion, descripcion,imagen}) => {
    return (
        <div className="card mx-auto" style={{ width: "18rem" }}>
            <img src={imagen} className="card-image-top"/>
            <h2 className="card-title text-center"> {nombre}</h2>
            <p className="card-text ps-3">{profesion}</p>
            <p className="card-text ps-3">{descripcion}</p>
        </div>
    )
}

