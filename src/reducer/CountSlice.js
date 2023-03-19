import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
    name:"count",
    initialState: {count:0},
    reducers:{
        incrument:(state)=>{
            state.count +=1
        },
        decroment:(state)=>{
            state.count -=1
            console.log(state);
        },
        reset:(state)=>{
            state.count = 0
        },
        valueres:(state, action)=>{
            state.count +=  action.payload
        },
    }
})
export const {incrument, decroment, reset , valueres } = countSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//       dispatch(value(amount))
      
//   }
export default countSlice.reducer