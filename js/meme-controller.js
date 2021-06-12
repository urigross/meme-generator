'use stirct';
// function onTextLine(txt) {
//     // drawText(txt, 180, 50);
//     drawText()
// }

function clearInputVal() {
    var elInput = document.querySelector('.text-line');
    elInput.value = '';
};

function drawRect() {
    if (gMeme.lines.length <= 1) return;
    gCtx.beginPath()
    var rectY = gMeme.lines[gMeme.selectedLineIdx].pos.y - gMeme.lines[gMeme.selectedLineIdx].size * 1.1;
    var rectX = gCanvas.clientWidth / 2 - gMeme.lines[gMeme.selectedLineIdx].size * gMeme.lines[gMeme.selectedLineIdx].txt.length * 0.3;
    var rectWidth = gCanvas.clientWidth - (rectX * 2);
    var rectHeight = 1.5 * gMeme.lines[gMeme.selectedLineIdx].size;
    gCtx.lineWidth = 5;
    gCtx.rect(rectX, rectY, rectWidth, rectHeight);
    gCtx.strokeStyle = 'green'
    gCtx.stroke();

}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.color;
        gCtx.fillStyle = 'white';
        gCtx.font = `${line.size}px Impact`;
        gCtx.textAlign = 'center';
        console.log('text: ', line.txt);
        gCtx.fillText(line.txt, gX, line.pos.y);
        gCtx.strokeText(line.txt, gX, line.pos.y);
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
        drawRect();
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

//TODO: remove toggling empty lines
function onToggleRow() {
    // var emptyLineIdx = getCurrEmptyLineIdx();

    // if there is any empty line - If found - focus on it.
    // if (emptyLineIdx === -1) {
    toggleLineIdx();
    // } else gMeme.selectedLineIdx = emptyLineIdx;
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

function onTxtColor(el) {
    console.log('Changing txt color');
    changeCurrLineColor(el);
    renderImage();
}

function onShare() {
    console.log('Sharing is caring..');
}