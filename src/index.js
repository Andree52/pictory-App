document.addEventListener('DOMContentLoaded', function () {
    const movieForm = document.getElementById('movie-form');
    const movieContainer = document.getElementById('movie-container');

    movieForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Retrieve movie information
        const title = document.getElementById('search-title').value;

        // Create a new movie element
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-card';
        movieElement.innerHTML = `
            <h3>${title}</h3>
            <button class="check-button">Check Availability</button>
        `;

        movieContainer.appendChild(movieElement);

        // Clear the search input
        document.getElementById('search-title').value = '';
    });

    movieContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('check-button')) {
            // Retrieve movie details for checking availability
            const movieCard = e.target.parentElement;
            const movieTitle = movieCard.querySelector('h3').textContent;

            // Perform a check in your movie database here
            // Replace this with your database logic

            // For example, you can check if the movie is available and then redirect to its details page
            const isAvailable = true; // Replace with your availability check logic
            if (isAvailable) {
                // Redirect to the movie details page (e.g., details.html)
                window.location.href = `details.html?title=${movieTitle}`;
            } else {
                alert('This movie is not available.');
            }
        }
    });
});














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
  