import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiBase from '../../apiBase';

const initialState = [];

const appId = '8ngzxdlDXPZ4rEKdIInn';
const apiURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await apiBase.get(`${apiURL}books`);
  if (response.data) {
    return Object.entries(response.data).map(([id, bookData]) => ({
      id,
      title: bookData[0].title,
      author: bookData[0].author,
      category: bookData[0].category,
    }));
  }
  return [];
});

export const createBook = createAsyncThunk('books/createBook', async (newBook) => {
  const itemId = Date.now().toString();
  await apiBase.post(`${apiURL}books`, {
    item_id: itemId,
    ...newBook,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return { ...newBook, id: itemId };
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  await apiBase.delete(`${apiURL}books/${bookId}`);
  return bookId;
});

const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(createBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;