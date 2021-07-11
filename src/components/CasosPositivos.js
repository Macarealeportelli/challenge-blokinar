import useFetch from "../hooks/useFetch";
import TablaInfectados from "../utils/TablaInfectados";


const CasosPositivos =()=>{

    // const infectados = useFetch();

    return (
        <>
        <h3>Listado de Casos Positivos</h3>
        <TablaInfectados/>


        
        </>
    )
};

export default CasosPositivos;