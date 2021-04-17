const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Тест',
  author: 'Игорь Крещенко',
  genres: ['Тест'],
  rating: 5,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook(newBook);
