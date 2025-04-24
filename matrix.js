/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//to make it responsive.
$(window).resize(function () {
    width = $(c).parent().width();
    height = $(c).parent().height();
    c.width = width;
    ctx.fillRect(0, 0, width, height);
});

$(document).ready(function () {
    width = $(c).parent().width();
    height = $(c).parent().height();
    c.width = width;
    ctx.fillRect(0, 0, width, height);
});
//character set to print
//var ch = "Java C++ C Ruby JavaScript Python Perl";
//var ch = "break for while if else switch do int double float String case default return function static";
var ch = "001 123 045 167 089 1AB 0CD 1EF";

//converting the string into an array of single characters
ch = ch.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px Orbitron";
    //looping over drops

    for (var i = 0; i < drops.length; i++)
    {

        //a random chinese character to print

        var text = ch[Math.floor(Math.random() * ch.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;

    }
}

setInterval(draw, 40);





