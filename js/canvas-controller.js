'strict use';
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');

function drawImage() {
    var img = new Image();
    img.src = 'images/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}