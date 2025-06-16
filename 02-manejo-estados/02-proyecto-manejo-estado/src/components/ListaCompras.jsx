import { useState } from 'react';
function ListaCompras() {
    // Definir el estado para la lista de compras
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    // Función para agregar un nuevo producto a la lista
    const agregarProducto = () => {
        if (nuevoProducto.trim() !== "") {
            setProductos([...productos, nuevoProducto]);
            setNuevoProducto("");
        }
    };

    // Función para eliminar un producto de la lista
    const eliminarProducto = (index) => {
        // Completar la lógica para eliminar un producto
        const nuevosProductos = productos.filter((producto, i) => i !== index);
        setProductos(nuevosProductos);
    };

    return (
        <div>
            <h2 className='h2 text-center mt-4'>Lista de Compras</h2>
            <form>
                <input
                    type="text"
                    value={nuevoProducto}
                    onChange={(e) => setNuevoProducto(e.target.value)}
                    className='form-control mx-auto' style={{ width: '300px' }}
                />
                <div className='text-center justify-center mt-3'>
                    <button type="button" onClick={agregarProducto} className='btn btn-primary text-center justify-center'>Agregar</button>

                </div>
            </form>
            <div className='text-center '>
                <ul className='list-group mt-3' 
                style={{ 
                    width: "300px",
                    margin: "0 auto"
                    }}>
                    {productos.map((producto, index) => (
                        <li key={index} className='list-group-item container-fluid' style={{ width: "300px" }}>
                            <span>{producto}</span>
                            <button className="btn btn-danger" onClick={() => eliminarProducto(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default ListaCompras;