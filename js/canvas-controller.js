'strict use';
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var gCurrImageId;

function renderImage(imageId) {
    gCurrImageId = imageId;
    img = new Image();
    img.src = `images/${imageId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[0].txt, 150, 50);

    }
}

function onTextLine(txt) {
    drawText(txt, 180, 50);
}

function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '20px Impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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
    console.log('increasing font');
}

function onFontDown() {
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