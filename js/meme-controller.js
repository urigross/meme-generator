'use stirct';
// function onTextLine(txt) {
//     // drawText(txt, 180, 50);
//     drawText()
// }

function clearInputVal() {
    var elInput = document.querySelector('.text-line');
    elInput.value = '';
};

function drawText() {
    var idx = 0
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 1;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = 'white';
        gCtx.font = `${gMeme.lines[0].size}px Impact`;
        gCtx.textAlign = 'center';
        console.log('text: ', line.txt);
        gCtx.fillText(line.txt, gX, gMeme.lines[idx].pos.y);
        gCtx.strokeText(line.txt, gX, gMeme.lines[idx].pos.y);
        idx++;
        console.log('gMeme.lines[gMeme.selectedLineIdx].pos.y', gMeme.lines[gMeme.selectedLineIdx].pos.y)
    });
}

// function getLineYAxis(idx) {
//     var baseY = 80;
//     return idx * 100 + baseY;
// }

function renderImage() {
    // gCurrImageId = imageId;
    var img = new Image();
    img.src = `images/${gMeme.selectedImgId}.jpg`;
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
    updateCurrLineText('');
    gMeme.selectedImgId = imageId;
    renderImage();
    // addLine();
}


function toggleCanvasControls() {
    var elCanvasCtrs = document.querySelector('.canvas-controls');
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
    updateCurrLineText(txt);
    renderImage();
}

function onLineUp() {
    lineYup();
    renderImage();
    console.log('lineup');
}


function onLineDown() {
    lineYDown();
    renderImage();
    console.log('lineDown');
}

// TODO: fix
function onToggleRow() {
    console.log('toggle row');
    toggleLineIdx();
    renderImage();
}

function onAddLine() {
    clearInputVal();
    console.log('adding line');
    addLine();
    renderImage();
}

function onDelRow() {
    console.log('deleting row');
}

function onFontUp() {
    updateFontSize(1);
    renderImage();
    console.log('increasing font');
}

function onFontDown() {
    updateFontSize(-1);
    renderImage();
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