import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../reducer/CountSlice";



export default configureStore({reducer: countSlice})