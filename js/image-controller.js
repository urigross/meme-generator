'use strict';

function init() {
    renderImagesWithMemes();

}

function renderImagesWithMemes(images) {
    if (!images) var images = getImages();
    var strHtmls = images.map(function(image) {
        return `<div class="image-container">
        <img src="images/${image.id}.jpg">
        </div>
        `
    });
    document.querySelector('.images').innerHTML = strHtmls.join('');
};

function onFilter(val) {
    console.log(val);
    if (val) var filteredImages = getFilteredImages(val);
    renderImagesWithMemes(filteredImages);
}