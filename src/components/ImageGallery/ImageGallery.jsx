import { Component } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import { imagesAPI } from 'components/Services/Services';
import { Gallery } from './imageGallery.styled'; 
// import { List, Item } from './ContactList.styled';

export class ImageGallery extends Component {
  state = {
    imagesList: null,
    status: 'idle',
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const currentSearchQuery = this.props.searchQuery;
    const currentPage = this.props.page;
    const prevSearchQuery = prevProps.searchQuery;
    const prevPage = prevProps.page;

    // if (currentSearchQuery.trim() === '') {
    //   alert('Please, enter something to start searching');
  
    //   this.setState({ status: 'idle' });
    // }
    if (prevSearchQuery !== currentSearchQuery || prevPage !== currentPage) {
      // this.props.this.props.changeLoadingStatus('pending');
      // this.setState({ status: 'pending' });
      this.props.changeLoadingStatus(true);

      try {
        const data = await imagesAPI(currentSearchQuery, prevPage);
        if (data.hits.length === 0) {
          toast.info('test');
            alert(`Sorry, there are no images matching your search query`)
          // toast.warn(`Sorry, there are no images matching your search query`);
          // return this.setState({ status: 'no-results' });
        }
        this.setState({ imagesList: data, status: 'resolved' });
        // this.props.changeLoadingStatus(false);
        this.props.getImageList(data.hits);
        this.props.getTotalHits(data.totalHits);
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      } finally {
        this.props.changeLoadingStatus(false);
    }
  }
}

  render() {
    const { imagesList, status } = this.state;
    // if (status === 'idle') {
    //     return toast.warn(`Please, enter something to start searching`);
    // }
    // if (status === 'pending') {
    //   return <div>Loading...</div>;
    // }
    // if (status === 'no-results') {
    //   return toast.warn(`Sorry, there are no images matching your search query`);
    // }
    if (status === 'rejected') {
      return toast.error(`Something went wrong. ${status.error}. Please, try again later`);
    }
    if (status === 'resolved') {
      return (<div>{imagesList && <Gallery>{this.props.children}</Gallery>}</div>);
    }
  }
}

// ImageGallery.propTypes = {

// };


//       // if (totalHits === 0) {
//         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');} 
//       else if (numberOfPics >= totalHits && totalHits !=0) {
//         Notiflix.Notify.failure ("We're sorry, but you've reached the end of search results");
//       }  
//       // else {
//       //   Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//       // }
  
//       }