import { useMemo, useEffect} from "react";

const TotalAcumulado = ({tareas}) => {
    const calcularTiempoTotal = useMemo(() => {
        console.log("Calculando tiempo total...");
        return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
    }, [tareas]); // Solo se recalcula cuando cambian las tareas

    useEffect(() => {
        document.title = `Total: ${calcularTiempoTotal} minutos`;
    }, [calcularTiempoTotal]); 

    return (
        <>
            <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
        </>
    );
}

export default TotalAcumulado;