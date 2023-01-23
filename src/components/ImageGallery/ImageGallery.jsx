// import PropTypes from 'prop-types';
// import { List, Item } from './ContactList.styled';


// export default function createPicsMarkup(hits) {
//     return hits.reduce(
//       (acc, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
//         acc +
//         `
//         <div class="photo-card">
//         <div class="wrapper">
//     <img src="${webformatURL}" alt="${tags}" loading="lazy" /></div>
//     <div class="info">
//       <p class="info-item">
//         <b>Likes: </b> ${likes}
//       </p>
//       <p class="info-item">
//         <b>Views: </b> ${views}
//       </p>
//       <p class="info-item">
//         <b>Comments: </b> ${comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads: </b> ${downloads}
//       </p>
//     </div>
//   </div>`,
//       ''
//     );
//   }



// ContactList.propeTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//     ),
//     deleteContact: PropTypes.func.isRequired,
//   };
  