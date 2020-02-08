/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const gallery = () => {
  const foodItem = [
    {
      img: 'media/steak-choi-big.png',
      thumb: 'media/steak-choi-thumb.png',
      title: 'STEAK STIR FRY',
      meta: 'Tender, rich ribeye or sirloin steak bites are cooked in a soy garlic sauce—with some American touches!—and served over a bed of crisp bok choy.',
    },
    {
      img: 'media/pork-leek-big.png',
      thumb: 'media/pork-leek-thumb.png',
      title: 'STIR FRY PORK LEEKS',
      meta: 'Stir-fry of thinly sliced cured pork belly and leeks.',
    },
    {
      img: 'media/beef-tofu-big.png',
      thumb: 'media/beef-tofu-thumb.png',
      title: 'STIR FRY BEEF TOFU',
      meta: 'Tender beef, soft tofu, some scallions, and just the right amount of sauce over a bed of white or brown rice.',
    },
    {
      img: 'media/cashew-shrimp-big.png',
      thumb: 'media/cashew-shrimp-thumb.png',
      title: 'CASHEW SHRIMP STIR-FRY<',
      meta: 'This Cashew Shrimp Stir-fry is a Cantonese dish, its flavor is mild and delicate––the shrimp are plump and crisp, and the cashews are crunchy and nutty.',
    },
    {
      img: 'media/sweet-sour-fish-big.png',
      thumb: 'media/sweet-sour-fish-thumb.png',
      title: 'SWEET SOUR FISH FILLET',
      meta: 'Sweet and Sour Fish is a very popular dish in China, and it’s almost always served as a whole fish.',
    },
    {
      img: 'media/chives-pork-big.png',
      thumb: 'media/chives-pork-thumb.png',
      title: 'CHIVE STIR FRY PORK',
      meta: 'Garlic Chive Stir Fry with Pork or Cang Ying Tou (苍蝇头) literally translates to “Flies’ Heads” in Chinese.',
    },
  ];
  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('container', 'gallery-container');
  galleryContainer.id = 'gallery';

  const foodGallery = document.createElement('h1');
  foodGallery.innerHTML = 'Food Gallery';
  galleryContainer.appendChild(foodGallery);

  const tzGallery = document.createElement('div');
  tzGallery.classList.add('tz-gallery');
  galleryContainer.appendChild(tzGallery);

  const row = document.createElement('div');
  row.classList.add('row');
  tzGallery.appendChild(row);

  foodItem.forEach((food) => {
    const col = document.createElement('div');
    col.classList.add('col-sm-6', 'col-md-4');
    row.appendChild(col);

    const thumb = document.createElement('div');
    thumb.classList.add('thumbnail');
    col.appendChild(thumb);

    const lightbox = document.createElement('a');
    lightbox.classList.add('lightbox');
    lightbox.setAttribute('href', food.img);
    thumb.appendChild(lightbox);

    const image = document.createElement('img');
    image.setAttribute('src', food.thumb);
    image.setAttribute('alt', food.title);
    lightbox.appendChild(image);

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.innerHTML = `<h3>${food.title}</h3>
                         <p>${food.meta}</p>`;
    thumb.appendChild(caption);
  });

  const displayLink = document.createElement('script');
  displayLink.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js');
  galleryContainer.appendChild(displayLink);

  const baguette = document.createElement('script');
  baguette.innerHTML = `baguetteBox.run('.tz-gallery');`;
  galleryContainer.appendChild(baguette);

  return galleryContainer;
};

export default gallery;
