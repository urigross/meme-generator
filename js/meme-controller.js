'use stirct';

function clearInputVal() {
    var elInput = document.querySelector('.text-line');
    elInput.value = '';
};


// function getElFontFam() {
//     return document.querySelector('.change-font');
// }

// getElColor(){
//     return 
// }

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
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.fontFam}`;
        gCtx.textAlign = line.align;
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
    console.log('onMemeEditor');
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
    console.log('onType');
    updateCurrLineText(txt);
    renderImage();
}

function onLineUp() {
    console.log('onLineUp');
    lineYup();
    renderImage();
}


function onLineDown() {
    console.log('onlineDown');
    lineYDown();
    renderImage();
}

function onToggleRow() {
    console.log('onToggleRow');
    toggleLineIdx();
    renderImage();
}

function onAddLine() {
    console.log('onAddLine');
    clearInputVal();
    addLine();
    renderImage();
}


function onDelRow() {
    console.log('deleting row');
}

function onFontUp() {
    console.log('increasing font');
    updateFontSize(1);
    renderImage();
}

function onFontDown() {
    console.log('Decreasing font');
    updateFontSize(-1);
    renderImage();
}

function onTxtLeft() {
    console.log('ontextleft');
    updateTxtAlign('right');
    renderImage();
}

function updateTxtAlign(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction;
};

function onTxtRignt() {
    console.log('ontextright');
    updateTxtAlign('left');
    renderImage();
}

function onTxtCenter() {
    console.log('ontextCenter');
    updateTxtAlign('center');
    renderImage();
}

function onSetFontFam(value) {
    console.log('changing font family to', value);
    updateFontFam(value);
    renderImage();
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