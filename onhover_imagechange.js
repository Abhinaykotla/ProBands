// Get references to the image and text elements
const image = document.getElementById('image');

// Add hover event listeners to change the image
document.getElementById('hiphop').addEventListener('mouseenter', () => {
    image.src = 'images/hiphop.png';
});

document.getElementById('techno').addEventListener('mouseenter', () => {
    image.src = 'images/techno.png';
});

document.getElementById('rock').addEventListener('mouseenter', () => {
    image.src = 'images/rock.png';
});
document.getElementById('electronic').addEventListener('mouseenter', () => {
    image.src = 'images/electronic.png';
});
document.getElementById('dubstep').addEventListener('mouseenter', () => {
    image.src = 'images/dubstep.png';
});