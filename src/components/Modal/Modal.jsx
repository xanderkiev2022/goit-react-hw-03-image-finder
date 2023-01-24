import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Modalwindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape')
      this.props.toggleModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  render() {
    const { largeImage } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <Modalwindow>
          <img src={largeImage} alt="" />
        </Modalwindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
