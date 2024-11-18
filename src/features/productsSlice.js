// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allProducts: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: () => {},
    removeProduct: () => {},
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
