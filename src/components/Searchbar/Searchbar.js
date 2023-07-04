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

render() {
    const { newSearchQuery } = this.state;

    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GoSearch />
          </SearchButton>

          <SearchbarInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={newSearchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;