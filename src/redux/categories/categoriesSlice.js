import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesArray: [],
    status: 'Coming Soon',
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,

    reducers: {
        checkStatus: (state) => {
          state.status = 'Coming Soon';
        },
      },
})

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;