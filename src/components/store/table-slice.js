import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    tables: [
      { id: 1, description: "Bread", price: 90, count: 0 },
      { id: 2, description: "Butter", price: 50, count: 0 },
      { id: 3, description: "Mango", price: 250, count: 0 },
      { id: 4, description: "Coca-Cola", price: 100, count: 0 },
    ],
  },
  reducers: {
    handleInc: (state, action) => {
      const newid = action.payload;
      state.tables = state.tables.map((item) => {
        if (item.id == newid) {
          return {
            ...item,
            count: item.price + item.count,
          };
        }
        return item;
      });
    },
    handleDec: (state, action) => {
      const newId = action.payload;
      state.tables = state.tables.map((item) => {
        if (item.id == newId) {
          return {
            ...item,
            count: item.count - item.price,
          };
        }
        return item;
      });
    },
    handleDisabled: (state, action) => {
      const disId = action.payload;
      state.tables = state.tables.map((item) => {
        // const isDisabled = (count) => count === 0;
        if (item.id === disId && item.count === 0) {
          return {
            ...item,
            count: true,
          };
        }
        return item;
      });
    },
  },
});
export const { handleInc, handleDec, handleDisabled } = tableSlice.actions;
