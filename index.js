function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

// f0etch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json));

function renderBooks(json) {
  const main = document.querySelector('main')
  return json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
