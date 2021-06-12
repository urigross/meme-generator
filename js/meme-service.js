'use strict';
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var fontSize = 20;
var gX = 200;
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 40,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        pos: {
            y: 80
        },
        fontFam: 'courier'
    }]
};


function updateFontFam(fontFam) {
    gMeme.lines[gMeme.selectedLineIdx].fontFam = fontFam;
}


function changeCurrLineColor(el) {
    gStrokeTxtState ? gMeme.lines[gMeme.selectedLineIdx].strokeColor = el : gMeme.lines[gMeme.selectedLineIdx].color = el;
}

function _createNewLine(txt = '', size = gMeme.lines[gMeme.selectedLineIdx].size, align = gMeme.lines[gMeme.selectedLineIdx].align,
    color = gMeme.lines[gMeme.selectedLineIdx].color, strokeColor = gMeme.lines[gMeme.selectedLineIdx].strokeColor, fontFam = gMeme.lines[gMeme.selectedLineIdx].fontFam) {
    var meme = {
        txt,
        size,
        align,
        color,
        strokeColor,
        pos: {
            y: 0
        },
        fontFam
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

function isCurrlineEmpty() {
    return gMeme.lines[gMeme.selectedLineIdx].txt === '';
};

function addLine() {
    if (isCurrlineEmpty()) return;
    _createNewLine();
    // place the new line below the current line
    gMeme.lines[gMeme.lines.length - 1].pos.y = getNewYpos();
    // setting the new selected lineIdx on the new current line
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    console.log(gMeme);

}
// 80-380
function getNewYpos() {
    return gMeme.lines[gMeme.selectedLineIdx].pos.y >= 380 ? 80 : gMeme.lines[gMeme.selectedLineIdx].pos.y + 80;

};

function delLine() {
    console.log('delting')
    var lastIdx = gMeme.selectedLineIdx;
    gMeme.lines.splice(gMeme.selectedLineIdx, gMeme.selectedLineIdx);
    gMeme.selectedLineIdx = lastIdx - 1;
}



function toggleLineIdx() {
    var nextLineIdx = gMeme.selectedLineIdx + 1;
    nextLineIdx === gMeme.lines.length || gMeme.lines[nextLineIdx].txt === '' ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++;
}




function updateFontSize(diff) {
    // Font size Validation
    if (gMeme.lines[gMeme.selectedLineIdx].size > 80 && diff === 1) return;
    if (gMeme.lines[gMeme.selectedLineIdx].size <= 10 && diff === -1) return;
    gMeme.lines[gMeme.selectedLineIdx].size += diff * 10;
};

function updateCurrLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    //TODO: 
};