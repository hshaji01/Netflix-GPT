import  { useEffect } from 'react'
import { TMDB_OPTIONS, TMDB_POPULAR_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/MovieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async()=> {
            try{ 
                const data = await fetch(TMDB_POPULAR_URL, TMDB_OPTIONS);
                if(!data.ok){
                    throw new Error("Fetching data failed")
                }
                const jsonData = await data.json();
                console.log("jsonData"+jsonData)
                dispatch(addPopularMovies(jsonData?.results));
                
            } catch(error) {
                throw error.message;
            }
        }
        fetchData();
    },[]);

}

export default usePopularMovies;