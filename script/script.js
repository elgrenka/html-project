(function () {
  document.querySelector('.footer').textContent += new Date().getFullYear();
}());

function displayFlex() {
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
  // let commentForm = document.querySelector('#commentForm');
  // let commentName = document.querySelector('#commentName');
  // let commentEmail = document.querySelector('#commentEmail');
  // let commentText = document.querySelector('#commentText');

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
};

displayFlex();

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
  let audio = document.querySelector('.box-music audio');
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
    audio.src = srcUrl;
  });
};

chooseTrek();

let chooseTrailer = () => {
  let srcUrl = '';
  let video = document.querySelector('.box-movies video');
  let film_1 = document.querySelector('#film_1');
  let film_2 = document.querySelector('#film_2');
  let film_3 = document.querySelector('#film_3');
  let film_4 = document.querySelector('#film_4');
  let film_5 = document.querySelector('#film_5');
  let film_6 = document.querySelector('#film_6');
  let film_7 = document.querySelector('#film_7');

  film_1.addEventListener('click', () => {
    srcUrl = './movies/Predator_5.mp4';
    video.src = srcUrl;
  });

  film_2.addEventListener('click', () => {
    srcUrl = './movies/Samaritan.mp4';
    video.src = srcUrl;
  });

  film_3.addEventListener('click', () => {
    srcUrl = './movies/Orbital.mp4';
    video.src = srcUrl;
  });

  film_4.addEventListener('click', () => {
    srcUrl = './movies/Dungeons_and_dragons.mp4';
    video.src = srcUrl;
  });

  film_5.addEventListener('click', () => {
    srcUrl = './movies/Harry_Potter_and_the_cursed_child.mp4';
    video.src = srcUrl;
  });

  film_6.addEventListener('click', () => {
    srcUrl = './movies/Oppenheimer.mp4';
    video.src = srcUrl;
  });

  film_7.addEventListener('click', () => {
    srcUrl = './movies/Ben_10.mp4';
    video.src = srcUrl;
  });
};

chooseTrailer();

let chooseMult = () => {
  let srcUrl = '';
  let video = document.querySelector('.box-cartoons video');
  let mult_1 = document.querySelector('#mult_1');
  let mult_2 = document.querySelector('#mult_2');
  let mult_3 = document.querySelector('#mult_3');
  let mult_4 = document.querySelector('#mult_4');
  let mult_5 = document.querySelector('#mult_5');
  let mult_6 = document.querySelector('#mult_6');
  let mult_7 = document.querySelector('#mult_7');

  mult_1.addEventListener('click', () => {
    srcUrl = './cartoons/Hunt.mp4';
    video.src = srcUrl;
  });

  mult_2.addEventListener('click', () => {
    srcUrl = './cartoons/Cat_in_boots.mp4';
    video.src = srcUrl;
  });

  mult_3.addEventListener('click', () => {
    srcUrl = './cartoons/Crazy_carrot.mp4';
    video.src = srcUrl;
  });

  mult_4.addEventListener('click', () => {
    srcUrl = './cartoons/Log_Jam.mp4';
    video.src = srcUrl;
  });

  mult_5.addEventListener('click', () => {
    srcUrl = './cartoons/Luck.mp4';
    video.src = srcUrl;
  });

  mult_6.addEventListener('click', () => {
    srcUrl = './cartoons/Redemption.mp4';
    video.src = srcUrl;
  });

  mult_7.addEventListener('click', () => {
    srcUrl = './cartoons/Refrigerator.mp4';
    video.src = srcUrl;
  });
};

chooseMult();

let choosePhoto = () => {
  let srcUrl = '';
  let img = document.querySelector('#window-background img');
  let photo_1 = document.querySelector('#photo_1');
  let photo_2 = document.querySelector('#photo_2');
  let photo_3 = document.querySelector('#photo_3');
  let photo_4 = document.querySelector('#photo_4');
  let photo_5 = document.querySelector('#photo_5');
  let photo_6 = document.querySelector('#photo_6');
  let photo_7 = document.querySelector('#photo_7');

  photo_1.addEventListener('click', () => {
    srcUrl = './pictures/Cats.jpg';
    img.src = srcUrl;
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
    audio.src = srcUrl;
  });
};


