import { useState, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
    <>
      <nav className="navBar">
        <span>BookStore</span>
        <ul className="menuItems">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home books={books} onDelete={deleteBook} onSubmit={addBook} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
    </>
  );
}

export default App;