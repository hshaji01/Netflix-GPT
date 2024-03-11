import { configureStore } from '@reduxjs/toolkit';
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice";
import GptReducer from "./searchGPTSlice";
import ConfigReducer from "./ConfigSlice"

const AppStore = configureStore({
    reducer: {
     user:UserReducer,
     movies: MovieReducer,
     gpt:GptReducer,
     config:ConfigReducer
    },
})

export default AppStore;