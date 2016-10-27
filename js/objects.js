/*
 * Copyright (c) 2016. This software is licensed to Utah Olympic Legacy Foundation to use without expiration.  The use of this software is limited to the single kiosk used for "Cross-Country" athlete display and may not be duplicated without express permission of the software owner and developer Brandon Buchanan.  Brandon Buchanan maintains the intellectual property rights of this software and may use all or part of the code to duplicate for other personal or commercial use.
 */
function showSlides(item)
{
    var img = '<li><img class="slide-img" src="'+ item +'" /></li>'

    $("#slider-ul").append(img);

    console.log(img);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var slides = [
    "img/main_slide/cc-slide-1.png",
    "img/main_slide/cc-slide-2.png",
    "img/main_slide/cc-slide-3.png",
    "img/main_slide/cc-slide-4.png",
    "img/main_slide/cc-slide-5.png",
    "img/main_slide/cc-slide-6.png",
    "img/main_slide/cc-slide-7.png",
    "img/main_slide/cc-slide-8.png",
    "img/main_slide/cc-slide-9.png",
    "img/main_slide/cc-slide-10.png",
    "img/main_slide/cc-slide-11.png",
    "img/main_slide/cc-slide-12.png",
];

var rndSlides = shuffle(slides);

rndSlides.forEach(showSlides);