import  { useEffect } from 'react'
import { TMDB_OPTIONS, TMDB_UPCOMING_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/MovieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async()=> {
            try{ 
                const data = await fetch(TMDB_UPCOMING_URL, TMDB_OPTIONS);
                if(!data.ok){
                    throw new Error("Fetching data failed")
                }
                const jsonData = await data.json();
                dispatch(addUpcomingMovies(jsonData?.results));
                
            } catch(error) {
                throw error.message;
            }
        }
        fetchData();
    },[]);

}

export default useUpcomingMovies;