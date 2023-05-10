import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesArray: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
})
