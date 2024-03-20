import { configureStore } from "@reduxjs/toolkit";
import { tableSlice } from "./table-slice";

export const store = configureStore({
  reducer:{
    table: tableSlice.reducer, 
  }
});
