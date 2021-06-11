'use stirct';

var gCurrImageId;

function onTextLine(txt) {
    drawText(txt, 180, 50);
}

function renderImage(imageId) {
    gCurrImageId = imageId;
    var img = new Image();
    img.src = `images/${imageId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText();
    }
}

function onMemeEditor(imageId) {
    toggleSearchAreaClass();
    toggleImagesClass();
    toggleCanvasContainerClass();
    toggleCanvasControls();
    updateMeme('');
    renderImage(imageId);
}


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




function onType(txt) {
    updateMeme(txt);
    renderImage(gCurrImageId);
    // TODO: compelete all functionality
}

function onToggleRow() {
    console.log('toggle row');
    toggleY();
    renderImage(gCurrImageId);
}

function onAddLine() {
    console.log('adding line');
    addLine();
}

function onDelRow() {
    console.log('deleting row');
}

function onFontUp() {
    updateFontSize(1);
    renderImage(gCurrImageId);
    console.log('increasing font');
}

function onFontDown() {
    updateFontSize(-1);
    renderImage(gCurrImageId);
    console.log('Decreasing font');
}

function onTxtLeft() {
    console.log('Aligning text left');
}

function onTxtRignt() {
    console.log('Aligning text right');
}

function onTxtCenter() {
    console.log('Centring txt');
}

function setFontFam(value) {
    console.log('changing font family to', value);
}

function onTextEffect() {
    console.log('Text Effect');
}

function onTxtColor() {
    console.log('Changing txt color');
}

function onShare() {
    console.log('Sharing is caring..');
}