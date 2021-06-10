'use stirct';

var gCurrImageId;

function onTextLine(txt) {
    drawText(txt, 180, 50);
}

function renderImage(imageId) {
    console.log(gCurrImageId);
    gCurrImageId = imageId;
    var img = new Image();
    img.src = `images/${imageId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(150, 50);
    }
}



function onType(txt) {
    updateMeme(txt);
    renderImage(gCurrImageId);
    // TODO: compelete all functionality
}

function onToggleRow() {
    console.log('toggle row');
}

function onAddRow() {
    console.log('adding row');
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