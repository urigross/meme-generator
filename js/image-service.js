'use-strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 };
var gImgs = [
    { id: 1, url: 'img/trump.jpg', keywords: ['president', 'donald', 'trump', 'human', 'adult'] },
    { id: 2, url: 'img/puppies.jpg', keywords: ['dog', 'animal'] },
    { id: 3, url: 'img/baby_and_dog.jpg', keywords: ['baby', 'dog', 'sleep', 'animal'] },
    { id: 4, url: 'img/cat.jpg', keywords: ['cat', 'animal', 'sleep'] },
    { id: 5, url: 'img/baby1.jpg', keywords: ['baby', 'human'] },
    { id: 6, url: 'img/actor.jpg', keywords: ['actor', 'adult', 'human', 'show'] },
    { id: 7, url: 'img/baby2.jpg', keywords: ['baby', 'human'] },
    { id: 8, url: 'img/gene_wilder.jpg', keywords: ['gene', 'wilder', 'actor', 'human'] },
    { id: 9, url: 'img/laughing_baby.jpg', keywords: ['baby', 'laughing', 'human'] },
    { id: 10, url: 'img/barack_obama.jpg', keywords: ['laughing', 'president', 'human', 'barak', 'obama'] },
    { id: 11, url: 'img/boxing_kiss.jpg', keywords: ['kissing', 'human', 'boxing'] },
    { id: 12, url: 'img/haim_hecht.jpg', keywords: ['haim', 'hecht', 'human', 'fair', 'square', 'show'] },
    { id: 13, url: 'img/leonardo_dicaprio.jpg', keywords: ['leonardo', 'dicaprio', 'human', 'actor', 'the wolf', 'wall street', 'wallstreet', 'movie'] },
    { id: 14, url: 'img/Laurence_Fishburne.jpg', keywords: ['laurence fishburne', 'actor', 'matrix', 'movie'] },
    { id: 15, url: 'img/actor2.jpg', keywords: ['actor'] },
    { id: 16, url: 'img/Patrick_Stewart.jpg', keywords: ['star trek', 'Patrick', 'Stewart', 'actor', 'movie'] },
    { id: 17, url: 'img/Vladimir_Putin.jpg', keywords: ['Vladimir', 'Putin', 'president', 'russia'] },
    { id: 18, url: 'img/toy_story.jpg', keywords: ['toy story', 'movie'] }




];
var gMemes = [{
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }]
    },
    {
        selectedImgId: 4,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Thoughts for: after finishing sprint 2',
            size: 20,
            align: 'left',
            color: 'red'
        }]
    }
];

function getImages() {
    return gImgs;
}

// function getMemes() {
//     return gMemes;
// }


function getMemeById(imageId) {
    var meme = gMemes.find(function(meme) {
        return imageId === meme.selectedImgId
    })
    return meme
}