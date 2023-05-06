import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './Pages/Categories';
import Home from './Pages/Home';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = useCallback((newBook) => {
    const bookWithId = { ...newBook, id: Date.now() };
    setBooks((prevBooks) => [...prevBooks, bookWithId]);
  }, []);

  const deleteBook = useCallback((bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home books={books} onDelete={deleteBook} onSubmit={addBook} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;