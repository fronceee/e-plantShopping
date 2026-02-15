import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name,
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== itemNameToRemove,
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((product) => name === product.name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
