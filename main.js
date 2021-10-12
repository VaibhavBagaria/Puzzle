score=0;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_x < 200 && mouse_x > 170 && mouse_y < 235 && mouse_y > 200) {
        console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
        circle(mouse_x, mouse_y);
    }

    else if (mouse_x < 310 && mouse_x > 280 && mouse_y < 200 && mouse_y > 160) {
        console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
        circle(mouse_x, mouse_y);
    }

    else if (mouse_x < 340 && mouse_x > 300 && mouse_y < 90 && mouse_y > 50) {
        console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
        circle(mouse_x, mouse_y);
    }

    else if (mouse_x < 125 && mouse_x > 100 && mouse_y < 180 && mouse_y > 80) {
        console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
        rect(mouse_x, mouse_y);
    }

    else if (mouse_x < 70 && mouse_x > 40 && mouse_y < 70 && mouse_y > 40) {
        console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
        circleS(mouse_x, mouse_y-15);
    }
    else{
        score=score-1;
        console.log(score)
    }
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function rect(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.rect(mouse_x - 50, mouse_y - 50, 80, 170)
    ctx.stroke();
}

function circleS(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y+20, 25, 0, 2 * Math.PI);
    ctx.stroke();
}