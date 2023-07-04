import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import {
  SearchbarBox,
  SearchbarInput,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    newSearchQuery: '',
  };
}
