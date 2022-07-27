(function () {
  document.querySelector('.footer').textContent += new Date().getFullYear();
}());

let container = document.querySelector('.container');
let music = document.querySelector('#music');
let navMusic = document.querySelector('#nav-music');
let boxMusic = document.querySelector('.box-music');
let movies = document.querySelector('#movies');
let navMovies = document.querySelector('#nav-movies');
let boxMovies = document.querySelector('.box-movies')
let cartoons = document.querySelector('#cartoons');
let navCartoons = document.querySelector('#nav-cartoons');
let boxCartoons = document.querySelector('.box-cartoons');
let pictures = document.querySelector('#pictures');
let navPictures = document.querySelector('#nav-pictures');
let boxPictures = document.querySelector('.box-pictures');
let navComments = document.querySelector('#nav-comments');
let boxComments = document.querySelector('.box-comments');
let commentForm = document.querySelector('#commentForm');
let commentName = document.querySelector('#commentName');
let commentEmail = document.querySelector('#commentEmail');
let commentText = document.querySelector('#commentText');

music.addEventListener('click', () => {
  boxMusic.style.display = 'flex';
  container.style.display = 'none';
  boxMovies.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

navMusic.addEventListener('click', () => {
  boxMusic.style.display = 'flex';
  container.style.display = 'none';
  boxMovies.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

movies.addEventListener('click', () => {
  boxMovies.style.display = 'flex';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

navMovies.addEventListener('click', () => {
  boxMovies.style.display = 'flex';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

cartoons.addEventListener('click', () => {
  boxCartoons.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

navCartoons.addEventListener('click', () => {
  boxCartoons.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxPictures.style.display = 'none';
  boxComments.style.display = 'none';
});

pictures.addEventListener('click', () => {
  boxPictures.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxComments.style.display = 'none';
});

navPictures.addEventListener('click', () => {
  boxPictures.style.display = 'flex';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
  boxComments.style.display = 'none';
});

navComments.addEventListener('click', () => {
  boxComments.style.display = 'block';
  boxPictures.style.display = 'none';
  boxMovies.style.display = 'none';
  container.style.display = 'none';
  boxMusic.style.display = 'none';
  boxCartoons.style.display = 'none';
})

function addComment() {
  commentForm.addEventListener('submit', (e) => {
    if (commentName.value === "" || commentName.value.length < 3) {
      window.alert("Your name must be at least three characters long");
      commentName.focus();
      return false;
    }

    if (commentEmail.value === "" ||
      !((/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(commentEmail.value))) {
      window.alert("Enter valid email");
      commentEmail.focus();
      return false;
    }

    if (commentText.value === "" || commentText.value.length < 3) {
      window.alert("Your answer must be at least three characters long");
      commentText.focus();
      return false;
    }

    alert('Your answer has been added');
    e.preventDefault();
    e.target.reset();
  })

  return true;
};

addComment();


let chooseTrek = () => {
  let srcUrl = '';
  let audio = document.querySelector('audio');
  let song_1 = document.querySelector('#song_1');
  let song_2 = document.querySelector('#song_2');
  let song_3 = document.querySelector('#song_3');
  let song_4 = document.querySelector('#song_4');
  let song_5 = document.querySelector('#song_5');
  let song_6 = document.querySelector('#song_6');
  let song_7 = document.querySelector('#song_7');

  song_1.addEventListener('click', () => {
    srcUrl = './music/Filatov_Karas_-_CHilit.mp3';
    audio.src = srcUrl;
  });

  song_2.addEventListener('click', () => {
    srcUrl = './music/Galibri_Mavik_-_Federiko_Fellini.mp3';
    audio.src = srcUrl;
  });

  song_3.addEventListener('click', () => {
    srcUrl = './music/KHABIB_-_Yagoda_malinka.mp3';
    audio.src = srcUrl;
  });

  song_4.addEventListener('click', () => {
    srcUrl = './music/KVASHA_-_Zelenoglazoe_taksi.mp3';
    audio.src = srcUrl;
  });

  song_5.addEventListener('click', () => {
    srcUrl = './music/MBrother_-_Trebles.mp3';
    audio.src = srcUrl;
  });

  song_6.addEventListener('click', () => {
    srcUrl = './music/Scooter_-_4_AM.mp3';
    audio.src = srcUrl;
  });

  song_7.addEventListener('click', () => {
    srcUrl = './music/Sia_David_Guetta_-_Flames.mp3';
    // audio.setAttribute('autoplay', '');
    audio.src = srcUrl;
  });
};

chooseTrek();
