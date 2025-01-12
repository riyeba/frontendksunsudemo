import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth:""
};

export const MoveItemSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    MoveItem: (state,action) => {
      state.auth=action.payload
    },
    
   
    
  },
});


export const {
    MoveItem
} = MoveItemSlice.actions;

export default MoveItemSlice.reducer;

