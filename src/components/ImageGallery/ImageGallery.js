import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImagesByName } from 'services/imagesApi';
import { ImageGalleryBox } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ButtonLoadMore from 'components/ButtonLoadMore';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

ImageGallery.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
