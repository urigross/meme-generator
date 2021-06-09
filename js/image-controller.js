'use strict';

function init() {
    renderImagesWithMemes();

}

function renderImagesWithMemes() {
    var images = getImages();
    console.log(images);
    var strHtmls = images.map(function(image) {
        return `<div class="image-container">
        <img src="images/${image.id}.jpg">
        </div>
        `
    });
    document.querySelector('.images').innerHTML = strHtmls.join('');
};


// function renderMeme() {
//     var memes = getMemes();
//     console.log(memes);

// }