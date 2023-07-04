import { ImageItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

ImageGalleryItem.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
