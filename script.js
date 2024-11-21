document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerText = 'Change Background Image';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        const newImageUrl = 'another-image.jpg'; // replace with your new image URL
        document.querySelector('.content').style.backgroundImage = `url(${newImageUrl})`;
    });
});
