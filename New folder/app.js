// chamge images

// set Iteam
const leftPera = document.getElementById('leftPera');
const rightPera = document.getElementById('rightPera');

function changeImage(event, img1, img2) {
    const smallImages = document.querySelector('.small-image-container').children;
    document.getElementById('bigImage').src = event.src;

    for (let i = 0; i < smallImages.length; i++) {
        smallImages[i].classList.remove('active');
    }

    event.classList.add('active');

    const leftPeraText = document.getElementById(img1).innerText;
    const rightPeraText = document.getElementById(img2).innerText;
    leftPera.innerText = leftPeraText;
    rightPera.innerText = rightPeraText;
}