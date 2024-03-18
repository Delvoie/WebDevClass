const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */
const alttexts = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Looping through images */

for (let i = 0; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArry[i]);
    newImage.setAttribute('alt', alttext[i]);
    thumbBar.appendChild(newImage);
    // onclick event listner
    newImage.addeventlistner ('click', (e) => {
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