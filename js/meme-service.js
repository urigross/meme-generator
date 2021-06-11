'use strict';
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var fontSize = 20;
var gX = 200;
// var gY = 80;
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
};

// function _returnNewLine(txt = '', size = 20, align = 'left', color = 'red') {
//     var line = {
//         txt,
//         size,
//         align,
//         color
//     }
//     return line;
// }

function addLine() {
    // the Current line will be the next emtpy line.
    gMeme.selectedLineIdx = gMeme.lines.findIndex(line => (line.txt === ''));
    // gMeme.lines.push(_returnNewLine());
    console.log(gMeme);
}

function getNxtAvlLineIdx() {

}




// function drawText() {
//     gCtx.lineWidth = 1;
//     gCtx.strokeStyle = 'black';
//     gCtx.fillStyle = 'white';
//     gCtx.font = `${gMeme.lines[0].size}px Impact`;
//     gCtx.textAlign = 'center';
//     gCtx.fillText(gMeme.lines[0].txt, gX, getLineYAxis());
//     gCtx.strokeText(gMeme.lines[0].txt, gX, getLineYAxis());
// }




function toggleLineIdx() {
    //Erase current line & copy text to new line
    var txt = gMeme.lines[gMeme.selectedLineIdx].txt;
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
    gMeme.selectedLineIdx === 3 ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++;
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}


function updateFontSize(diff) {
    // Font size Validation
    if (gMeme.lines[0].size > 80 && diff === 1) return;
    if (gMeme.lines[0].size <= 10 && diff === -1) return;
    gMeme.lines[0].size += diff * 10;
    console.log('fontSize', gMeme.lines[0].size);
};

function updateCurrLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''; // static for now..

    gMeme.lines[gMeme.selectedLineIdx].txt = txt; // static for now..
    // gMeme.lines[selectedLineIdx].txt = txt; later...

    //TODO: compelete
};