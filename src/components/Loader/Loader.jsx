// import axios from 'axios';


// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '32292890-abfc4b14e22aeb7e2001180a2';

// export default class PicApiService {

//   constructor(searchQuery, page, per_page) {
//     this.searchQuery = searchQuery,
//     this.page = page,
//     this.per_page = per_page
//   }

//   async fetchPictures() {

//     const searchParams = new URLSearchParams({
//       key: API_KEY,
//       q: this.searchQuery,
//       page: this.page,
//       per_page: this.per_page,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//     });
//     const url = `${BASE_URL}/?${searchParams}`;

//     try {
//       const responce = await axios.get(url);
//       return responce;
//     } catch {
//       error => console.error(error);
//     }
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }