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
  let navSignIn = document.querySelector('#nav-signIn');
  let navAbout = document.querySelector('#nav-about');
  let boxSignIn = document.querySelector('.box-signIn');
  let boxSignUp = document.querySelector('.box-signUp');
  let boxAbout = document.querySelector('.box-about');


  music.addEventListener('click', () => {
    boxMusic.style.display = 'flex';
    container.style.display = 'none';
    boxMovies.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  navMusic.addEventListener('click', () => {
    boxMusic.style.display = 'flex';
    container.style.display = 'none';
    boxMovies.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  movies.addEventListener('click', () => {
    boxMovies.style.display = 'flex';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  navMovies.addEventListener('click', () => {
    boxMovies.style.display = 'flex';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  cartoons.addEventListener('click', () => {
    boxCartoons.style.display = 'flex';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  navCartoons.addEventListener('click', () => {
    boxCartoons.style.display = 'flex';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxPictures.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  pictures.addEventListener('click', () => {
    boxPictures.style.display = 'flex';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  navPictures.addEventListener('click', () => {
    boxPictures.style.display = 'flex';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxComments.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  });

  navComments.addEventListener('click', () => {
    boxComments.style.display = 'block';
    boxPictures.style.display = 'none';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxAbout.style.display = 'none';
  })

  navSignIn.addEventListener('click', () => {
    boxSignIn.style.display = 'flex';
    boxSignUp.style.display = 'flex';
    boxComments.style.display = 'none';
    boxPictures.style.display = 'none';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
    boxAbout.style.display = 'none';
  })

  navAbout.addEventListener('click', () => {
    boxAbout.style.display = 'flex';
    boxSignIn.style.display = 'none';
    boxSignUp.style.display = 'none';
    boxComments.style.display = 'none';
    boxPictures.style.display = 'none';
    boxMovies.style.display = 'none';
    container.style.display = 'none';
    boxMusic.style.display = 'none';
    boxCartoons.style.display = 'none';
  })
};

displayFlex();

function addComment() {
  let commentForm = document.querySelector('#commentForm');
  let commentName = document.querySelector('#commentName');
  let commentEmail = document.querySelector('#commentEmail');
  let commentText = document.querySelector('#commentText');

  commentForm.addEventListener('submit', (e) => {
    if (commentName.value === "" || commentName.value.length < 3) {
      window.alert("Your name must be at least three characters long");
      commentName.focus();
      e.preventDefault();
      return false;
    }

    if (commentEmail.value === "" ||
      !((/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(commentEmail.value))) {
      window.alert("Enter valid email");
      commentEmail.focus();
      e.preventDefault();
      return false;
    }

    if (commentText.value === "" || commentText.value.length < 3) {
      window.alert("Your answer must be at least three characters long");
      commentText.focus();
      e.preventDefault();
      return false;
    }
    
    alert('Your answer has been added!');
    e.preventDefault();
    e.target.reset();
  })

  return true;
};

addComment();


let chooseTrek = () => {
  let audio = document.querySelector('.box-music audio');
  let song_1 = document.querySelector('#song_1');
  let song_2 = document.querySelector('#song_2');
  let song_3 = document.querySelector('#song_3');
  let song_4 = document.querySelector('#song_4');
  let song_5 = document.querySelector('#song_5');
  let song_6 = document.querySelector('#song_6');
  let song_7 = document.querySelector('#song_7');

  song_1.addEventListener('click', () => {
    audio.src = './music/Filatov_Karas_-_CHilit.mp3';
  });

  song_2.addEventListener('click', () => {
    audio.src = './music/Galibri_Mavik_-_Federiko_Fellini.mp3';
  });

  song_3.addEventListener('click', () => {
    audio.src = './music/KHABIB_-_Yagoda_malinka.mp3';
  });

  song_4.addEventListener('click', () => {
    audio.src = './music/KVASHA_-_Zelenoglazoe_taksi.mp3';
  });

  song_5.addEventListener('click', () => {
    audio.src = './music/MBrother_-_Trebles.mp3';
  });

  song_6.addEventListener('click', () => {
    audio.src = './music/Scooter_-_4_AM.mp3';
  });

  song_7.addEventListener('click', () => {
    audio.src = './music/Sia_David_Guetta_-_Flames.mp3';
  });
};

chooseTrek();

let chooseTrailer = () => {
  let video = document.querySelector('.box-movies video');
  let film_1 = document.querySelector('#film_1');
  let film_2 = document.querySelector('#film_2');
  let film_3 = document.querySelector('#film_3');
  let film_4 = document.querySelector('#film_4');
  let film_5 = document.querySelector('#film_5');
  let film_6 = document.querySelector('#film_6');
  let film_7 = document.querySelector('#film_7');

  film_1.addEventListener('click', () => {
    video.src = './movies/Predator_5.mp4';
  });

  film_2.addEventListener('click', () => {
    video.src = './movies/Samaritan.mp4';
  });

  film_3.addEventListener('click', () => {
    video.src = './movies/Orbital.mp4';
  });

  film_4.addEventListener('click', () => {
    video.src = './movies/Dungeons_and_dragons.mp4';
  });

  film_5.addEventListener('click', () => {
    video.src = './movies/Harry_Potter_and_the_cursed_child.mp4';
  });

  film_6.addEventListener('click', () => {
    video.src = './movies/Oppenheimer.mp4';
  });

  film_7.addEventListener('click', () => {
    video.src = './movies/Ben_10.mp4';
  });
};

chooseTrailer();

let chooseMult = () => {
  let video = document.querySelector('.box-cartoons video');
  let mult_1 = document.querySelector('#mult_1');
  let mult_2 = document.querySelector('#mult_2');
  let mult_3 = document.querySelector('#mult_3');
  let mult_4 = document.querySelector('#mult_4');
  let mult_5 = document.querySelector('#mult_5');
  let mult_6 = document.querySelector('#mult_6');
  let mult_7 = document.querySelector('#mult_7');

  mult_1.addEventListener('click', () => {
    video.src = './cartoons/Hunt.mp4';
  });

  mult_2.addEventListener('click', () => {
    video.src = './cartoons/Cat_in_boots.mp4';
  });

  mult_3.addEventListener('click', () => {
    video.src = './cartoons/Crazy_carrot.mp4';
  });

  mult_4.addEventListener('click', () => {
    video.src = './cartoons/Log_Jam.mp4';
  });

  mult_5.addEventListener('click', () => {
    video.src = './cartoons/Luck.mp4';
  });

  mult_6.addEventListener('click', () => {
    video.src = './cartoons/Redemption.mp4';
  });

  mult_7.addEventListener('click', () => {
    video.src = './cartoons/Refrigerator.mp4';
  });
};

chooseMult();

let choosePhoto = () => {
  let img = document.querySelector('#window img');
  let photo_1 = document.querySelector('#photo_1');
  let photo_2 = document.querySelector('#photo_2');
  let photo_3 = document.querySelector('#photo_3');
  let photo_4 = document.querySelector('#photo_4');
  let photo_5 = document.querySelector('#photo_5');
  let photo_6 = document.querySelector('#photo_6');
  let photo_7 = document.querySelector('#photo_7');

  photo_1.addEventListener('click', () => {
    img.src = './pictures/Cats.jpg';
  });

  photo_2.addEventListener('click', () => {
    img.src = './pictures/Dogs.jpg';
  });

  photo_3.addEventListener('click', () => {
    img.src = './pictures/Lynx.jpg';
  });

  photo_4.addEventListener('click', () => {
    img.src = './pictures/Cat_in_boots_eyes.jpg';
  });

  photo_5.addEventListener('click', () => {
    img.src = './pictures/Lemur.jpg';
  });

  photo_6.addEventListener('click', () => {
    img.src = './pictures/Chameleon.jpg';
  });

  photo_7.addEventListener('click', () => {
    img.src = './pictures/Monkeys.jpg';
  });
};

choosePhoto();

