import axios from 'axios';

export const fetchImages = async (pageNum = 1, searchQuerry = '') => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '32855339-ad74b3f6db15cb4a86c5df500',
    q: searchQuerry,
    image_type: 'photo',
    page: pageNum,
    orientation: 'horizontal',
    per_page: 12,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
};
