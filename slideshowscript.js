// mountaineering code slideshow
let mindex = 0;
displayImages0();
function displayImages0() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  mindex++;
  if (mindex > images.length) {
    mindex = 1;
  }
  images[mindex - 1].style.display = "block";
  setTimeout(displayImages0, 5000);
}

// ski code slideshow
let sindex = 0;
displayImages1();

function displayImages1() {
  let i;
  const images = document.getElementsByClassName("imageS");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  sindex++;
  if (sindex > images.length) {
    sindex = 1;
  }
  images[sindex - 1].style.display = "block";
  setTimeout(displayImages1, 5000);
}

// expedition code slideshow

let eindex = 0;
displayImages2();

function displayImages2() {
  let i;
  const images = document.getElementsByClassName("imageE");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  eindex++;
  if (eindex > images.length) {
    eindex = 1;
  }
  images[eindex - 1].style.display = "block";
  setTimeout(displayImages2, 5000);
}
