import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImagesByName } from 'services/imagesApi';
import { ImageGalleryBox } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ButtonLoadMore from 'components/ButtonLoadMore';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';
