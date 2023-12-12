import restuarantSlice from "./restuarantSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        restuarantSlice
    }
})

export default store;