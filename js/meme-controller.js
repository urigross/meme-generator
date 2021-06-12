'use stirct';

function clearInputVal() {
    var elInput = document.querySelector('.text-line');
    elInput.value = '';
};

function drawRect() {
    if (gMeme.lines.length <= 1) return;
    gCtx.beginPath()
    var rectY = gMeme.lines[gMeme.selectedLineIdx].pos.y - gMeme.lines[gMeme.selectedLineIdx].size * 1.1;
    // var rectX = gCanvas.clientWidth / 2 - gMeme.lines[gMeme.selectedLineIdx].size * gMeme.lines[gMeme.selectedLineIdx].txt.length * 0.3;
    var rectX = 10;
    var rectWidth = gCanvas.clientWidth - 20;
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
        gCtx.textAlign = line.align;
        console.log('line.align', line.align);
        gCtx.fillText(line.txt, gX, line.pos.y);
        gCtx.strokeText(line.txt, gX, line.pos.y);
    });
}


function renderImage() {
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

function onToggleRow() {
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
    updateTxtAlign('right');
    renderImage();
}

function updateTxtAlign(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction;
};

function onTxtRignt() {
    updateTxtAlign('left');
    renderImage();
}

function onTxtCenter() {
    updateTxtAlign('center');
    renderImage();
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