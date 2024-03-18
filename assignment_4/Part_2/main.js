const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArry = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alttexts = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for (let i = 0; i < imageArry.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'Assets/' + imageArry[i]);
    newImage.setAttribute('alt', alttexts[i]);
    thumbBar.appendChild(newImage);
    // onclick event listener
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});