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
    <div className="individual-book">
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="submit" onClick={handleDelete}>
          Remove Book
        </button>
        <button type="button">Edit</button>
      </div>

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
        <button type="submit" onClick={handleDelete}>Remove Book</button>
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
