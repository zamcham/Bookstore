import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookArray: [],
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
})

console.log(bookSlice);