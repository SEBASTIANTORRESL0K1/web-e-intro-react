import { useEffect } from "react"


const LimpiezaEfecto = () => {

    useEffect(() => {

        console.log("Suscribiendo evento");
      
        return () => {
      
          console.log("Limpiando evento");
      
        };
      
      }, []);
  return (
    <div>LimpiezaEfecto</div>
  )
}

export default LimpiezaEfecto