import  { useEffect } from 'react'
import { TMDB_OPTIONS, TMDB_TOP_RATED_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/MovieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async()=> {
            try{ 
                const data = await fetch(TMDB_TOP_RATED_URL, TMDB_OPTIONS);
                if(!data.ok){
                    throw new Error("Fetching data failed")
                }
                const jsonData = await data.json();
                dispatch(addTopRatedMovies(jsonData?.results));
                
            } catch(error) {
                throw error.message;
            }
        }
        fetchData();
    },[]);

}

export default useTopRatedMovies;