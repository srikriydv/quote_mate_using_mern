// import { configureStore } from "@reduxjs/toolkit";
// import { baseApiSlice } from "../features/api/baseApiSlice";
// import authReducer from "../features/auth/authSlice";

// export const store = configureStore({
// 	reducer: {
// 		[baseApiSlice.reducerPath]: baseApiSlice.reducer,
// 		auth: authReducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(baseApiSlice.middleware),
// 	// TODO: change this to false in production
// 	devTools: false,
// });

// store.js
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define an initial state for a simple counter
const initialState = { count: 0 };

// Create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions generated from the slice
export const { increment, decrement, reset } = counterSlice.actions;

// Create the store with the counter reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export the store
export default store;
