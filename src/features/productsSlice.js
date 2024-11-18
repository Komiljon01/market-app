// Redux
import { createSlice } from "@reduxjs/toolkit";

// Toast
import { toast } from "sonner";

const initialState = {
  products: [],
  allProducts: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const product = state.products.find((item) => item.id === payload.id);

      if (product) {
        toast.warning("Product is already added!");
      } else {
        toast.success("Product added successfully");
        state.products = [...state.products, payload];
      }
    },
    removeProduct: () => {},
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
