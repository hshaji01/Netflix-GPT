import  { useEffect } from 'react'
import { TMDB_NOWPLAYING_URL, TMDB_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/MovieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async()=> {
            try{ 
                const data = await fetch(TMDB_NOWPLAYING_URL, TMDB_OPTIONS);
                if(!data.ok){
                    throw new Error("Fetching data failed")
                }
                const jsonData = await data.json();
                dispatch(addNowPlayingMovies(jsonData?.results));
                
            } catch(error) {
                throw error.message;
            }
        }
        fetchData();
    },[]);

}

export default useNowPlayingMovies;