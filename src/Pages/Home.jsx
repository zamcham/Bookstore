import PropTypes from 'prop-types';
import AddBookForm from '../components/AddBookForm';
import ListOfBook from '../components/ListOfBook';

function Home({ books: bookToAdd, onDelete, onSubmit }) {
  return (
    <div>
      <ListOfBook books={bookToAdd} onDelete={onDelete} />
      <AddBookForm onSubmit={onSubmit} />
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Home;