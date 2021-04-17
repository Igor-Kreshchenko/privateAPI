const BASE_URL = 'http://localhost:3000';

function deleteBook(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}
