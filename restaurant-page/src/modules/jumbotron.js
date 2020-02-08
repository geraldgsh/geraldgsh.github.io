/* eslint-disable linebreak-style */
const jumbotron = () => {
  const jumbo = document.createElement('div');
  jumbo.id = 'home';
  jumbo.classList.add('jumbotron', 'jumbotron-fluid');
  jumbo.innerHTML = `
  <video autoplay muted loop poster="media/flaming-wok.png">    
    <source src="media/wok-fire.mp4" type="video/mp4">
  </video>`;
  const container = document.createElement('div');
  container.classList.add('container', 'text-white');
  container.innerHTML = `
  <h1 class="display-4">Hungry?</h1>
  <p class="lead"><strong>Wok this way!</strong></p>
  <hr class="my-4">
  <p>Authentic Stir Fried Chinese Cuisine.</p>`;
  jumbo.appendChild(container);

  return jumbo;
};
export default jumbotron;
