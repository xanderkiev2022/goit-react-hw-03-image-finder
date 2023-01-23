import { Component } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import { imagesAPI } from 'components/Services/Services';
import { Gallery } from 'components/Gallery/Gallery';
// import { List, Item } from './ContactList.styled';

export class ImageGallery extends Component {
  state = {
    imagesList: null,
    status: 'idle',
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const currentSearchQuery = this.props.searchQuery;
    const prevSearchQuery = prevProps.searchQuery;
    const currentPage = this.props.page;
    const prevPage = prevProps.page;

    if (currentSearchQuery === '') {
      this.setState({ status: 'idle' });
    }
    if (prevSearchQuery !== currentSearchQuery || prevPage !== currentPage) {
      this.setState({ status: 'pending' });

      try {
        const data = await imagesAPI(currentSearchQuery, prevPage);
        if (data.hits.length === 0) {
          return this.setState({ status: 'no-results' });
        }
        this.setState({ imagesList: data, status: 'resolved' });
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  render() {
    const { imagesList, status } = this.state;
    if (status === 'idle') {
        return toast.default(`Please, enter something to start searching`);
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'no-results') {
      return toast.warn(`Sorry, there are no images matching your search query`);
    }
    if (status === 'rejected') {
      return toast.error('Please, try again later');
    }
    if (status === 'resolved') {
      return (<div>{imagesList && <Gallery>{this.props.children}</Gallery>}</div>);
    }
  }
}

// ImageGallery.propTypes = {

// };
