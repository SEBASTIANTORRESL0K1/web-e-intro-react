import { useState } from "react"
import { useEffect } from "react"

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsuarios(data))


    }, [])

    return (
        <>
            <div>Usuarios</div>
            <ul>
                {usuarios.map((item,index) => {
                return (
                     <li key={index}>{item.name}
                    </li>
                )
                })
            }   
            </ul>
        </>

    )
}

