import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    showModal: false,
    imageList: [],
    largeImage: null,
    totalhits: 0,
    isLoading: false,
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, imageList: [] });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
    console.log(this.state.page);
  };

  changeLoadingStatus = value => {
    this.setState({ isLoading: value });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  getTotalHits = totalhits => {
    this.setState({ totalhits });
  };

  getImageList = data => {
    if (!this.state.imageList) {
      this.setState({ imageList: data });
      return;
    }
    if (this.state.imageList) {
      this.setState(({ imageList }) => ({
        imageList: [...imageList, ...data],
      }));
      return;
    }
  };

  render() {
    const {
      searchQuery,
      page,
      showModal,
      imageList,
      largeImage,
      totalhits,
      isLoading,
    } = this.state;
    return (
      <Container>
        <Toaster position="top-right" reverseOrder={false} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          page={page}
          imageList={imageList}
          getImageList={this.getImageList}
          getTotalHits={this.getTotalHits}
          changeLoadingStatus={this.changeLoadingStatus}
        >
          {imageList?.map(image => (
            <ImageGalleryItem
              key={image.webformatURL}
              imageUrl={image.webformatURL}
              largeImgUrl={image.largeImageURL}
              tags={image.tags}
              toggleModal={this.toggleModal}
              getLargeImage={this.getLargeImage}
            ></ImageGalleryItem>
          ))}
        </ImageGallery>
        {isLoading && <Loader />}

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
