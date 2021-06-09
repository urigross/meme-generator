'strict use';
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');

function drawImage(imageId) {
    var img = new Image();
    img.src = `images/${imageId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function onTextLine(txt) {
    drawText(txt, 180, 50);
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '20px Arial'
    gCtx.textAlign = 'left'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}