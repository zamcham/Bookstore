import AddBookForm from '../components/AddBookForm';
import ListOfBook from '../components/ListOfBook';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/booksSlice';
import { useEffect } from 'react';

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.entries(state.books).map(([id, bookData]) => ({
    id,
    ...bookData,
  })));
  const removeBookFeature = (id) => {
    dispatch(deleteBook(id));
  };
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <ListOfBook key={books.item_id} books={books} onDelete={removeBookFeature} />
      <AddBookForm />
    </>
  );
}

export default Home;