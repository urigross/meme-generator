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
    toggleSearchAreaClass();
    toggleImagesClass();
    toggleCanvasContainerClass();
    toggleCanvasControls();
    renderImageGallery();
}

function preDownloadCanvas() {
    renderImage(true);
    var elDownload1Btn = document.querySelector('.download1');
    elDownload1Btn.style.display = "none";
    var elDownload2Btn = document.querySelector('.download2 p');
    elDownload2Btn.style.display = "block";
    //elDownload1Btn.innerText = "downloading";
}


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