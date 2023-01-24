import { Component } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styles';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    const normalizeValue = value.toLowerCase();
    this.setState({ [name]: normalizeValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (!searchQuery.trim()) {
      toast.error('Please start typing the searching query');
      return;
    }
    this.props.onSubmit(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            name="searchQuery"
            value={searchQuery}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
