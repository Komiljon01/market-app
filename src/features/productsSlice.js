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

        let allProductsCount = 0;
        let allProductsPrice = 0;

        state.products.forEach((item) => {
          allProductsCount += item.amount;
          allProductsPrice += item.amount * item.price;
        });

        state.allProducts = allProductsCount;
        state.price = allProductsPrice;
      }
    },
    removeProduct: () => {},
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
