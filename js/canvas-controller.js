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