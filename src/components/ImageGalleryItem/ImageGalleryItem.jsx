// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return this.props.photos.map(el => (
      <li className={css.ImageGalleryItem} key={el.id}>
        <img
          className={css.ImageGalleryItemImg}
          onClick={() => this.props.onClick(el.largeImageURL)}
          src={el.webformatURL}
          alt={el.tags}
        />
      </li>
    ));
  }
}

// ContactList.propTypes = {
//   filtered: PropTypes.array,
//   handleChange: PropTypes.func,
// };

export default ImageGalleryItem;
