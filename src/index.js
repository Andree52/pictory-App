document.addEventListener('DOMContentLoaded', function () {
  const movieForm = document.getElementById('resource-form');
  const movieContainer = document.getElementById('movie-container');

 
  const movies = [];

  movieForm.addEventListener('submit', function (e) {
      e.preventDefault();

      
      const title = document.getElementById('title').value;
      const director = document.getElementById('director').value;
      const releaseYear = document.getElementById('release-year').value;
      const genre = document.getElementById('genre').value;

      
      const movie = {
          title,
          director,
          releaseYear,
          genre,
      };
      movies.push(movie);
      displayMovie(movie);
      movieForm.reset();
  });
  function displayMovie(movie) {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
          <h3>${movie.title}</h3>
          <p>Director: ${movie.director}</p>
          <p>Release Year: ${movie.releaseYear}</p>
          <p>Genre: ${movie.genre}</p>
      `;

      movieContainer.appendChild(movieCard);
  }
  const searchForm = document.getElementById('resource-form');
  searchForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const searchTitle = document.getElementById('search-title').value;
      movieContainer.innerHTML = '';

      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTitle.toLowerCase()));

      filteredMovies.forEach(movie => displayMovie(movie));
  });
});


      






// document.addEventListener('DOMContentLoaded', function () {
//     const resourceForm = document.getElementById('resource-form');
//     const resourceContainer = document.querySelector('.resource-container');
  
//     resourceForm.addEventListener('submit', function (e) {
//       e.preventDefault();
  
//       const title = document.getElementById('title').value;
//       const director = document.getElementById('director').value;
//       const releaseYear = document.getElementById('release-year').value;
//       const genre = document.getElementById('genre').value;
  
      
//       if (!title || !director || !releaseYear) {
//         alert('Please fill in the required fields.');
//         return;
//       }
//       const movieElement = document.createElement('div');
//       movieElement.classList.add('movie');
//       movieElement.innerHTML = `
//         <h3>${title}</h3>
//         <p>Director: ${director}</p>
//         <p>Release Year: ${releaseYear}</p>
//         <p>Genre: ${genre || 'N/A'}</p>
//         <button class="remove-button">Remove</button>
//       `;
  
//       resourceContainer.insertBefore(movieElement, resourceContainer.firstChild);
  
//       // Clear the form
//       resourceForm.reset();
//     });
  
//     resourceContainer.addEventListener('click', function (e) {
//       if (e.target.classList.contains('remove-button')) {
//         const movieElement = e.target.parentElement;
//         movieElement.remove();
//       }
//     });
  
//     document.getElementById('reset-button').addEventListener('click', function () {
//       resourceForm.reset();
//     });
//   });














// const movieContainer = document.querySelector('#movie-container');

// movieContainer.addEventListener('click', async (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     const id = e.target.dataset.id;

//     try {
//       const response = await fetch('?id=' + id, {
//         method: 'DELETE',
//       });
//       const data = await response.json();
//       const movie = document.querySelector('#movie-' + id);
//       movie.parentNode.removeChild(movie);
//       alert('Movie deleted successfully');
//     } catch (error) {
//       alert('Error deleting Movie: ' + error);
//     }
//   }
// });
// document.getElementById('movie-form').addEventListener('submit', function (e) {
    
    
//     e.preventDefault();
//     document.getElementById('movie-form').addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const title = document.getElementsByName('title')[0].value;
//         const director = document.getElementById('director').value;
//         const year = parseInt(document.querySelector('#year').value)
//         const newMovie = { id: Date.now(), title, director };
//         movies.push(newMovie);
//         function displayMovies() {
//             const moviesSection = document.querySelector('.movies');
//             moviesSection.innerHTML = '';
            
//             movies.forEach(function (movie) {
//                 const movieElement = document.createElement('div');
//                 movieElement.classList.add('movie');
                
//             });
//         };
//     })
// })
//     document.addEventListener('DOMContentLoaded', () => {
//         class Movie {
//             constructor(title, year, genre, isInStock) {
//                 this.title = title;
//                 this.year = year;
//                 this.genre = genre;
//                 this.isInStock = isInStock;
//             }
//         }
//         const movies = [
//             new Movie('The Matrix', 1999, 'Science Fiction', true),
//             new Movie('The Shawshank Redemption', 1994, 'Drama', true),
//             new Movie('Pulp Fiction', 1994, 'Crime', true),
//         ];
//         const formHTML = `
// //     <form id="movie-form">
// //     <label for="title">Title:</label>
// //     <input type="text" id="title" name="title" required>
    
// //     <label for="year">Year:</label>
// //     <input type="number" id="year" name="year" required>
    
// //     <label for="genre">Genre:</label>
// //     <input type="text" id="genre" name="genre" required>
    
// //     <label for="isInStock">In Stock:</label>
// //     <input type="checkbox" id="isInStock" name="isInStock">
    
// //     <button type="submit">Add Movie</button>
// //     </form>
// //     `;
    
//     const movieForm = document.querySelector('#movie-form');

// movieForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const form = new FormData(movieForm);

//   try {
//     const response = await fetch('', {
//       method: 'POST',
//       body: form,
//     });
//     const data = await movies.js();
//     movieForm.reset();
//     alert('Movie added successfully');
//   } catch (error) {
//     alert('Error adding Movie: ' + error);
//   }
// });

// })
// document.addEventListener('DOMContentLoaded', function () {
//     const resourceForm = darcart.getElementById('resource-form');
//     const removeButtons = darcart.getElementsByClassName('remove-resource');
//     const inStockCheckboxes = darcart.getElementsByClassName('in-stock-checkbox');
//     for (let i = 0; i < removeButtons.length; i++) {
//       removeButtons[i].addEventListener('click', function (event) {
//         const resourceElement = event.target.parentElement;
//         resourceElement.parentElement.removeChild(resourceElement);
//       });
//     }
//     for (let i = 0; i < inStockCheckboxes.length; i++) {
//       inStockCheckboxes[i].addEventListener('click', function (event) {
//         const inStockLabel = event.target.nextElementSibling;
//         if (event.target.checked) {
//           inStockLabel.textContent = 'In Stock';
//         } else {
//           inStockLabel.textContent = 'Out of Stock';
//         }
//       });
//     }
//     resourceForm.addEventListener('submit', function (event) {
//       event.preventDefault();
  
//     let resourceslist = []
//       let isValid = true;
//       const fields = event.target.getElementsByTagName('input');
//       for (let i = 0; i < fields.length; i++) {
//         if (fields[i].required && !fields[i].value) {
//           isValid = false;
//           break;
//         }
//       }
//       if (!isValid) {
//         alert('Please fill in the required fields.');
//         return;
//       }
//       for (let i = 0; i < fields.length; i++) {
//         fields[i].value = '';
//       }
//       const resourceElement = document.createElement('div');
//       resourceElement.classList.add('resource');
//     });
//   });
  