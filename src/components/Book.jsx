import PropTypes from 'prop-types';
import IndicatorProgress from './IndicatorProgress';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const percentage = 33;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="individual-book">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button">Comments</button>
      <button type="button" onClick={handleDelete}>Remove</button>
      <button type="button">Edit</button>
      <div className="progress">
        <div className="circle" />
        <IndicatorProgress percentage={percentage} />
        <span>{`${percentage}% Completed`}</span>
      </div>
      <div className="current-chapter">
        <h4>Current Chapter</h4>
        <p>Chapter 3 of 5</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
