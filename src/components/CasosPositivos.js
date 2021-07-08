import useFetch from "../hooks/useFetch";


const CasosPositivos =()=>{

    const infectados = useFetch();

    return (
        <>
        <h1>Hola soy el listado de casos</h1>
        {infectados.map((persona)=><h6>{persona.first_name}</h6>)}


        
        </>
    )
};

export default CasosPositivos;