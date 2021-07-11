import {useEffect, useState} from 'react';


const useFetch =()=>{

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
      fetch( "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected")
        .then((res) => res.json())
  
        .then((data) => 
        // console.log(data)
        setElementos(data)
        );
    }, []);
  
    return elementos
};

export default useFetch;