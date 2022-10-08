"use strict";

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


drawInvader();

function drawInvader() {

    context.beginPath();
    context.fillStyle = '#d2956e';
    context.rect(50,200,75,200);
    context.rect(125,115,75,150);
    context.rect(200,40,75,150);
    context.rect(275,115,75,150);
    context.rect(350,200,75,200);
    context.rect(50,335,375,65);
    context.rect(200,265,75,75);
    context.fill();


}
