import React, { Component } from 'react';
import axios from 'axios';

const LS_KEY = 'savedPictures';


export class App extends Component {
    state = {
      page: 1,
      searchQuery: '',
      items: [],
      showModal: false,
      largeImage: null,
      totalhits: 0,
      };
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

  handleSubmit = e => {
    e.preventDefault();
    e.targer.reset();

    // this.setState(prevState => ({
    //   contacts: [stateOfContactForm, ...prevState.contacts],
    // }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery searchQuery={this.state.searchQuery} page={this.stae.page}  />
        <ImageGalleryItem /> 
        <Loader /> 
        <Button />
        <Modal />
      </>
    );
  }
}






let loading = false;
let numberOfPics = 0;

searchForm.addEventListener('submit', onSearch);
window.addEventListener('scroll', infinitiScroll);

function onSearch(e) {
  e.preventDefault();
  picApiService.query = e.target.elements.searchQuery.value;



  // picApiService.resetPage();
  clearPicsContainer();
  fetchPics();
}

// async function fetchPics() {
//   // console.log (fetchPics)
//   loading = true;
//   try {
//     const pictures = await picApiService.fetchPictures();
//     const {data: { hits, totalHits }} = pictures;
//       // console.log(!document.documentElement.getBoundingClientRect().bottom <= document.documentElement.clientHeight)
//       numberOfPics += hits.length;
      
//       appendPicsMarkup(hits);
//       if (!totalHits) {
//       // if (totalHits === 0) {
//         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');} 
//       else if (numberOfPics >= totalHits && totalHits !=0) {
//         Notiflix.Notify.failure ("We're sorry, but you've reached the end of search results");
//      // else if (error.response.status === 400) {
//       // 
//       // !totalHits && !document.documentElement.getBoundingClientRect().bottom <= document.documentElement.clientHeight
//       // document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight
//       // 
//           // if (picApiService.page >= Math.ceil(totalHits / picApiService.per_page)
//           // hits.length < picApiService.per_page
//           //  {  
//             window.removeEventListener('scroll', infinitiScroll);
//         // window.addEventListener("scroll", infinitiScrollEnd)
//       }  
//       // else {
//       //   Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//       // }
  
//       }
//   catch (error) {console.log(error.message);}
//   finally  {
//     searchForm.reset();
//     loading = false;
//   }
// }

// // function infinitiScrollEnd(e) {
// // console.log (e.target)
// // Notiflix.Notify.failure ("We're sorry, but you've reached the end of search results");
// // }

// function appendPicsMarkup(hits) {
//   gallery.insertAdjacentHTML('beforeend', createPicsMarkup(hits));
// }

// function clearPicsContainer() {
//   gallery.innerHTML = '';
// }

// function infinitiScroll() {
//   if (!loading) {
//     const documentRect = document.documentElement.getBoundingClientRect();
//     if (documentRect.bottom < document.documentElement.clientHeight + 250) {
//       picApiService.incrementPage();
//     }
//     fetchPics();
// }
// }