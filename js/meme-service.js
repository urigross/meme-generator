'use strict';
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var fontSize = 20;
var gX = 200;
var gY = 50;


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    }]
};


// This function includes Meme
// x: 200 is the middle
// y: 50 is the top
function drawText() {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gMeme.lines[0].size}px Impact`;
    gCtx.textAlign = 'center'
    gCtx.fillText(gMeme.lines[0].txt, gX, gY)
    gCtx.strokeText(gMeme.lines[0].txt, gX, gY)
}

function toggleY() {
    if (gY >= 380) gY = 50;
    gY += gMeme.lines[0].size + 10;
    console.log('gY', gY);

}


function updateFontSize(diff) {
    // Validation
    if (gMeme.lines[0].size > 50 && diff === 1) return;
    if (gMeme.lines[0].size <= 10 && diff === -1) return;
    gMeme.lines[0].size += diff * 10;
};

function updateMeme(txt) {
    gMeme.lines[0].txt = txt; // static for now..
    // gMeme.lines[selectedLineIdx].txt = txt; later...

    //TODO: compelete
};