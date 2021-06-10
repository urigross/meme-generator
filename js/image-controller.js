'use strict';

function init() {
    renderImageGallery();
}

function renderImageGallery(images) {
    if (!images) var images = getImages();
    var strHtmls = images.map(function(image) {
        return `<div class="image-container">
        <img onclick="onMemeEditor('${image.id}')" src="images/${image.id}.jpg">
        </div>
        `
    });
    document.querySelector('.images').innerHTML = strHtmls.join('');
};

function onGallery() {
    console.log('im in image gallery')
    toggleSearchAreaClass();
    toggleImagesClass();
    toggleCanvasContainerClass();
    toggleCanvasControls();
    renderImageGallery();
}

function onMemeEditor(imageId) {
    toggleSearchAreaClass();
    toggleImagesClass();
    toggleCanvasContainerClass();
    toggleCanvasControls();
    renderImage(imageId);
}


// function showCanvasControls() {
function toggleCanvasControls() {
    var elCanvasCtrs = document.querySelector('.canvas-controls');
    console.log(elCanvasCtrs.style);
    !elCanvasCtrs.style.opacity ? elCanvasCtrs.style.opacity = "1" : elCanvasCtrs.style.opacity = "0";
}

function toggleCanvasContainerClass() {
    var elCanvas = document.querySelector('.canvas-container');
    elCanvas.hidden ? elCanvas.hidden = false : elCanvas.hidden = true;
    toggleMyCanvasClass(elCanvas.hidden);
};

function toggleMyCanvasClass(hiddenState) {
    var elMyCanvas = document.querySelector('#my-canvas');
    elMyCanvas.hidden = hiddenState;
}

// function hideSearch() {
function toggleSearchAreaClass() {
    var eleSearch = document.querySelector('.search-area');
    eleSearch.style.display === 'none' ? eleSearch.style.display = 'block' : eleSearch.style.display = 'none';
}

function toggleImagesClass() {
    var eleImages = document.querySelector('.images');
    eleImages.style.display === 'none' ? eleImages.style.display = 'grid' : eleImages.style.display = 'none';
}

function onFilter(txt) {
    console.log(txt);
    if (txt) var filteredImages = getFilteredImages(txt.toLowerCase());
    renderImageGallery(filteredImages);
}