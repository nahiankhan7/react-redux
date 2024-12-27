import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
import usersReducer from "./posts/postsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export default store;
