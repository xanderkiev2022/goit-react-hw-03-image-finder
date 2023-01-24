import PropTypes from 'prop-types';
import { Component } from 'react';
import { GalleryItem, Img } from './ImageGallryItem.styled';

export class ImageGalleryItem extends Component {
  hadleClick = () => {
    this.props.getLargeImage(this.props.largeImgUrl);
    this.props.toggleModal();
    console.log(this.props.largeImgUrl);
  };

  render() {
    const { imageUrl, tags } = this.props;
    return (
      <GalleryItem onClick={this.hadleClick}>
        <Img src={imageUrl} alt={tags} />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  getLargeImage: PropTypes.func.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
};
