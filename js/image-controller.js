'use strict';

function init() {
    renderImagesWithMemes();

}

function renderImagesWithMemes(images) {
    if (!images) var images = getImages();
    var strHtmls = images.map(function(image) {
        return `<div class="image-container">
        <img onclick="onMemeEditor('${image.id}')" src="images/${image.id}.jpg">
        </div>
        `
    });
    document.querySelector('.images').innerHTML = strHtmls.join('');
};

function onMemeEditor(imageId) {
    hideSearch()
    hideImages();
    showCanvas();
    showCanvasControls();
    renderImage(imageId);
    imageIdToTextLine(imageId);
}
// passing image id to Meme control text-field by a dataSet
function imageIdToTextLine(imageId) {
    var elTxtLine = document.querySelector('.text-line');
    elTxtLine.dataset.imageId = imageId;
}

function showCanvasControls() {
    var elCanvasCtrs = document.querySelector('.canvas-controls');
    elCanvasCtrs.style.opacity = "1";
}

function showCanvas() {
    var elCanvas = document.querySelector('.canvas-container');
    elCanvas.hidden = false;
    showMyCanvas();
};

function showMyCanvas() {
    var elMyCanvas = document.querySelector('#my-canvas');
    elMyCanvas.hidden = false;
}

function hideSearch() {
    var eleSearch = document.querySelector('.search-area');
    eleSearch.style.display = 'none';
}

function hideImages() {
    var eleImages = document.querySelector('.images');
    eleImages.style.display = 'none';
}

function onFilter(txt) {
    console.log(txt);
    if (txt) var filteredImages = getFilteredImages(txt);
    renderImagesWithMemes(filteredImages);
}