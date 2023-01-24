import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

// const LS_KEY = 'savedPictures';


export class App extends Component {
    state = {
      searchQuery: '',
      page: 1,      
      showModal: false,
      imageList: null,
      largeImage: null,
      totalhits: 0,
      isLoading: false,
      };

      handleSubmit = searchQuery => {
        this.setState({ searchQuery, page: 1, imagesList: null });
      };

      loadMore = () => {
        this.setState(({page}) => ({ page: page + 1 }));
      };

      changeLoadingStatus = value => {
        this.setState({ isLoading: value });
      };

      toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
      };

      getLargeImage = largeImage => {
        this.setState({ largeImage });};
    
      getTotalHits = totalhits => {
        this.setState({ totalhits });};

      getImageList = data => {
        if (!this.state.imageList) {
          this.setState({ imageList: data });
          return;
        }
        if (this.state.imageList) {
          this.setState(({imageList})=> ({
            imageList: [...imageList, ...data],
          }));
          return;
        }
      };

  render() {
    const { searchQuery, page, showModal, imageList, largeImage, totalhits, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery searchQuery={searchQuery} page={page} getImageList={this.getImageList} getTotalHits={this.getTotalHits} changeLoadingStatus={this.changeLoadingStatus}>
        {imageList?.map(image => (
            <ImageGalleryItem
              key={image.id}
              imageUrl={image.webformatURL}
              largeImgUrl={image.largeImageURL}
              toggleModal={this.toggleModal}
              getLargeImage={this.getLargeImage}              
            ></ImageGalleryItem>
          ))}
          </ImageGallery>
          {isLoading && <Loader />}
        {/* <ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" /> */}
        {showModal && (
          <Modal largeImage={largeImage} toggleModal={this.toggleModal} />
        )}
         {imageList && totalhits > 12 && (
          <ButtonLoadMore loadMore={this.loadMore} />
        )}
        
      </Container>
    );
  }
}



