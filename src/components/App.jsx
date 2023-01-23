import React, { Component } from 'react';

const LS_KEY = 'savedPictures';

export class App extends Component {
  state = {
    picture: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem(LS_KEY);
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
    else this.setState({ contacts: [] }); //перезатираємо localStorage
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  // handleSubmit = stateOfContactForm => {
  //   const { contacts } = this.state;

  //   stateOfContactForm.id = nanoid();
  //   this.setState(prevState => ({
  //     contacts: [stateOfContactForm, ...prevState.contacts],
  //   }));
  // };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem /> 
        <Loader /> 
        <Button />
        <Modal />
      </>
    );
  }
}
