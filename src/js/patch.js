// 2 метода: PUT и PATCH

const BASE_URL = 'http://localhost:3000';

function updateBookById(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${id}`, options)
    .then(res => res.json())
    .then(console.log);
}

// updateBookById({ title: 'New Big Book' }, 22);
