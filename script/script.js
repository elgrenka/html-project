(function () {
  document.querySelector('.footer').textContent += new Date().getFullYear();
}());

let container = document.querySelector('.container');
let music = document.querySelector('.music');
let navMusic = document.querySelector('.nav-music');
let boxMusic = document.querySelector('.box-music');
let movies = document.querySelector('.movies');
let navMovies = document.querySelector('.nav-movies');
let boxMovies = document.querySelector('.box-movies')
let cartoons = document.querySelector('.cartoons');
let navCartoons = document.querySelector('.nav-cartoons');
let boxCartoons = document.querySelector('.box-cartoons');
let pictures = document.querySelector('.pictures');
let navPictures = document.querySelector('.nav-pictures');
let boxPictures = document.querySelector('.box-pictures');

music.addEventListener('click', () => {
  boxMusic.style.display = 'flex';
  container.style.display = 'none';
  boxMovies.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
});

navMusic.addEventListener('click', () => {
  boxMusic.style.display = 'flex';
  container.style.display = 'none';
  boxMovies.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
});

movies.addEventListener('click', () => {
  boxMovies.style.display = 'flex';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
});

navMovies.addEventListener('click', () => {
  boxMovies.style.display = 'flex';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
});

cartoons.addEventListener('click', () => {
  boxCartoons.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxPictures.style.display = 'none';
});

navCartoons.addEventListener('click', () => {
  boxCartoons.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxPictures.style.display = 'none';
});

pictures.addEventListener('click', () => {
  boxPictures.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
});

navPictures.addEventListener('click', () => {
  boxPictures.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
});


