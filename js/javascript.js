window.onload = function () {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.fillstyle = "#ff0000";
    context.fillRect(50, 25, 100, 50);
    context.beginPath();
    context.moveTo(200, canvas.height / 2);
    context.lineTo(400, canvas.height / 3);
    context.lineWidth = 20;
    context.lineCap = "round";
    context.stroke();
    var can_01 = document.getElementById("can_01");
    var con_01 = can_01.getContext("2d");
    con_01.lineWidth = 35;
    con_01.beginPath();
    con_01.moveTo(125, 160);
    con_01.lineTo(200, 40);
    con_01.lineTo(275, 160);
    con_01.lineJoin = "miter";
    con_01.stroke();

    con_01.beginPath();
    con_01.moveTo(325, 160);
    con_01.lineTo(400, 40);
    con_01.lineTo(475, 160);
    con_01.lineJoin = "round";
    con_01.stroke();

    con_01.beginPath();
    con_01.moveTo(525, 160);
    con_01.lineTo(600, 40);
    con_01.lineTo(675, 160);
    con_01.lineJoin = "bevel";
    con_01.stroke();

    var can_02 = document.getElementById("can_02");
    var con_02 = can_02.getContext("2d");
    con_02.beginPath();
    con_02.arc(100, 100, 90, 0, 2 * Math.PI, true);
    con_02.stroke();
    con_02.fillStyle = "red";
    con_02.globalAlpha = 0.3;
    con_02.fill();

    var can_03 = document.getElementById("can_03");
    var ctx = can_03.getContext("2d");
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, 150, 37.5);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 37.5, 150, 37.5);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 75, 150, 37.5);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 112.5, 150, 37.5);
    for (var index = 0; index < 10; index++) {
        ctx.fillStyle = 'rgba(255,255,255,' + (index + 1) / 10 + ')';
        for (var j = 0; j < 4; j++) {
            ctx.fillRect(5 + index * 14, 5 + j * 37.5, 14, 27.5)
        }
    }
}