import AddBookForm from '../components/AddBookForm';
import ListOfBook from '../components/ListOfBook';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

function Home() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const removeBookFeature = (bookId) => {
    dispatch(removeBook(bookId));
  };
  const addBookFeature = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div>
      <ListOfBook key={books.item_id} books={books} onDelete={removeBookFeature} />
      <AddBookForm onSubmit={addBookFeature} />
    </div>
  );
}

export default Home;