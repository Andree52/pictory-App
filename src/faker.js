const faker = require('faker');

const fakeName = faker.name.findName();
const fakeDirector = faker.name.Director();
const fakeTime = faker.time.showTimes();
const fakemovieposter = faker.image.moviePoster();

console.log('Fake Name:', fakeName);
console.log('Fake Director:', fakeDirector);
console.log('Fake showTime:', fakeTime); 
console.log('fake movie poster:',fakemovieposter);

let movieArray = [
  {
      title: faker.name.title(),
      year: faker.date.past().getFullYear(),
      genre: faker.lorem.word(),
      showtimes: faker.date.soon(3)
  },
];