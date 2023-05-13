import PropTypes from 'prop-types';
import IndicatorProgress from './IndicatorProgress';

function Book({ book, onDelete }) {
  const percentage = 33;
  const {
    id, title, author, category,
  } = book;
  
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="Book-Panel">
      <div className="individual-book left">
        <div className="book-info">
          <p className='School-of'>{category}</p>
          <h3 className='Title'>{title}</h3>
          <p className='author'>{author}</p>
          <div className='book-buttons'>
            <button type="button">Comments</button>
            <span className='Line-2'></span>
            <button type="submit" onClick={handleDelete}>
              Remove
            </button>
            <span className='Line-2'></span>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress">
          <IndicatorProgress percentage={percentage} />
          <div className='completed-text'>
          <span className='percent'>{`${percentage}%`}</span>
          <span className='completed'>Completed</span>
          </div>
        </div>
        <span className='Line-3'></span>
      </div>
      <div className="current-chapter">
        <h4 className='Current-Chapter'>Current Chapter</h4>
        <p className='Current-Lesson'>Chapter 3 of 5</p>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
