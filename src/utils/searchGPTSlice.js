import { createSlice } from "@reduxjs/toolkit";

const searchGPTSlice = createSlice({
    name: "gpt",
    initialState:{
        searchToggle:false
    },
    reducers:{
        searchToggler(state){
            state.searchToggle = ! state.searchToggle;
        }
    }
})

export const {searchToggler} = searchGPTSlice.actions;
export default searchGPTSlice.reducer;