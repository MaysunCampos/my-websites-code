var getColorWhite = 'white';
var getColorBlack = 'black';
var setProjectTitle = 'Maysun Campos Website';

function setup() {
    document.title = setProjectTitle;
    document.body.style.color = getColorWhite;
    document.body.style.backgroundColor = getColorBlack;
    document.getElementById("title").innerHTML = "Maysun Campos Website";
    document.getElementById("copyright").innerHTML = "Copyright Maysun Campos All Rights Reserved 2022 - 2023";
}

function ng() {
    //onclick event
    var ng = "https://www.newgrounds.com";
    window.open(ng,"_blank");
}