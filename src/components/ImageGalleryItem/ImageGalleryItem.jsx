// import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {


  render() {
    const { image } = this.props;
    return (
      <li onClick={_}>
        <img src={image} alt="" />
      </li>
    );
  }
}

// ImageGalleryItem.propTypes = {

// };