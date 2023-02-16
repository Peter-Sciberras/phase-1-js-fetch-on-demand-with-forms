const init = () => {
    const inputForm = document.querySelector('form');
  const movieDetails = document.getElementById('movieDetails');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target.children[1].value;
    fetch(`/movies/${input}`)
      .then(response => response.json())
      .then(data => {
        movieDetails.children[0].textContent = data.title;
        movieDetails.children[1].textContent = data.summary;
      })
      .catch(error => {
        movieDetails.children[0].textContent = "Movie not found";
        movieDetails.children[1].textContent = "";
      });
  });
}
  document.addEventListener('DOMContentLoaded', init);