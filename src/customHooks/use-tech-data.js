import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
                setData(response)
            } catch (error){
                console.log(error)
            }
            setLoading(false);
        };
        
        fetchData();
    },[]);

    return{
        data,
        loading,
    };
}    

export default useFetchData;