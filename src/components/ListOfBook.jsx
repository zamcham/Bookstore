import PropTypes from 'prop-types';
import Book from './Book';

function ListOfBook({ books, onDelete }) {
  return (
    <>
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
    <span className='Line'></span>
    </>
    
  );
}

ListOfBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListOfBook;