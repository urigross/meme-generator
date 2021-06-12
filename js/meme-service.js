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
        size: 40,
        align: 'left',
        color: '#563d7c',
        pos: {
            y: 80
        }
    }]
};


function getCurrEmptyLineIdx() {
    return gMeme.lines.findIndex(line => (line.txt === ''));
};


function changeCurrLineColor(el) {
    gMeme.lines[gMeme.selectedLineIdx].color = el;
}

function _createNewLine(txt = '', size = 20, align = 'left', color = '#563d7c') {
    var meme = {
        txt,
        size,
        align,
        color,
        pos: {
            y: 0
        }
    };
    gMeme.lines.push(meme);
};


function lineYup() {
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y >= 80)
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10;

}

function lineYDown() {
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y <= 380)
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 10;
}


function addLine() {
    _createNewLine();
    // place the new line below the current line
    gMeme.lines[gMeme.lines.length - 1].pos.y = getNewYpos();
    // setting the new selected lineIdx on the new current line
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    console.log(gMeme);
    // gMeme.lines.push(_returnNewLine());

}
// 80-380
function getNewYpos() {
    return gMeme.lines[gMeme.selectedLineIdx].pos.y >= 380 ? 80 : gMeme.lines[gMeme.selectedLineIdx].pos.y + 80;

}


// function addLine() {
//     // the Current line will be the next emtpy line.
//     gMeme.selectedLineIdx = gMeme.lines.findIndex(line => (line.txt === ''));
//     // gMeme.lines.push(_returnNewLine());
//     console.log(gMeme);
// }

function toggleLineIdx() {
    var nextLineIdx = gMeme.selectedLineIdx + 1;
    nextLineIdx === gMeme.lines.length || gMeme.lines[nextLineIdx].txt === '' ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++;
}


// function toggleLineIdx() {
//     //Erase current line & copy text to new line
//     var txt = gMeme.lines[gMeme.selectedLineIdx].txt;
//     gMeme.lines[gMeme.selectedLineIdx].txt = '';
//     gMeme.selectedLineIdx === 3 ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++;
//     gMeme.lines[gMeme.selectedLineIdx].txt = txt;
// }


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