// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={css.ImageGallery}>{children}</ul>;
};

// ContactList.propTypes = {
//   filtered: PropTypes.array,
//   handleChange: PropTypes.func,
// };

export default ImageGallery;
