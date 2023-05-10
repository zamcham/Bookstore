import { configureStore } from "@reduxjs/toolkit";
import './books/booksSlice';

export const store = configureStore({
    reducer: {},
})