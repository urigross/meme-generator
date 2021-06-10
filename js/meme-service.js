'use strict';
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var fontSize = 20;

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

function drawText(x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gMeme.lines[0].size}px Impact`;
    gCtx.textAlign = 'center'
    gCtx.fillText(gMeme.lines[0].txt, x, y)
    gCtx.strokeText(gMeme.lines[0].txt, x, y)
}



function updateFontSize(diff) {
    console.log(gMeme.lines[0].size);
    // if (gMeme.lines[0].size > 50 || gMeme.lines[0].size <= 10) return // font-size validation
    gMeme.lines[0].size += diff * 10;
};

function updateMeme(txt) {
    gMeme.lines[0].txt = txt; // static for now..
    // gMeme.lines[selectedLineIdx].txt = txt; later...

    //TODO: compelete
};