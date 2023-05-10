import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksArray: [],
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
})

console.log(bookSlice);