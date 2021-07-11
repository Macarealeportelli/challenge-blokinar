import useFetch from "../hooks/useFetch";
import TablaInfectados2 from "../utils/TablaInfectados2";


const CasosPositivos =()=>{

    // const infectados = useFetch();

    return (
        <>
        <h3>Listado de Casos Positivos</h3>
        <TablaInfectados2/>
        <button>Descargar Tabla</button>

        
        </>
    )
};

export default CasosPositivos;