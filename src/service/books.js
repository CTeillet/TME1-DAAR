const getBooks = async () =>
  fetch("http://localhost:8000/books")
    .then(response => response.json())
    .then(books => books);

const getBooksPerLanguage = async language =>
  fetch(`http://localhost:8000/books/search-language/${language}`)
    .then(res => res.json())

const getLanguages = async () =>
  fetch('http://localhost:8000/books/languages')
  .then(res => res.json())

const searchBooks = async word_req =>
  fetch(`http://localhost:8000/books/search/${word_req}`)
    .then(res => res.json())

const advancedSearch = async expression =>
  fetch(`http://localhost:8000/books/advanced-search/${expression}`)
    .then(res => res.json())

const searchWithTitle = async title =>
  fetch(`http://localhost:8000/books/search-title/${title}`)
    .then(res => res.json())

const searchWithId = async id =>
  fetch(`http://localhost:8000/books/${id}`)
    .then(res => res.json())

export { getBooks, getBooksPerLanguage, getLanguages, searchBooks, advancedSearch, searchWithTitle, searchWithId };
