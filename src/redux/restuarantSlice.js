import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




//api call using Thunk

export const fetchRestuarant = createAsyncThunk('restuarantList/fetchRestuarant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data)
    console.log(result);
    return result;

})
const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState: {
        loading: false,// pending
        allRestuarants: [], // resolve
        searchRestuarants: [],  
        error: '' // reject
    },

    // Builders holds the value or response from the Thunk
    extraReducers: (builders)=>{
        builders.addCase(fetchRestuarant.pending,(state)=>{
            state.loading = true;
        })
        builders.addCase(fetchRestuarant.fulfilled,(state,action)=>{
            state.loading = false;
            state.allRestuarants = action.payload;
            state.searchRestuarants = action.payload;
            state.error = '';
        })
        builders.addCase(fetchRestuarant.rejected,(state,action)=>{
            state.loading = false;
            state.allRestuarants = [];
            state.error = action.error.message;
        })
    },
    reducers:{
        search:(state,action)=>{
          state.allRestuarants =state.searchRestuarants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export const {search} = restuarantSlice.actions;
export default restuarantSlice.reducer;


/* accept an action type string and a function that returns a promise and generate a thounk that dispatches pending/fullfilled/rejected  action type based on that promise */
/* thounk is not part of createSlice. its a seperate method in toolkit */
