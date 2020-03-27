mein_canvas.addEventListener('mousedown', e => {
    document.getElementById("mousePos").innerHTML = "X: " + event.clientX + "Y: " + event.clientY;
});

function drawLineTrigger(){
    
}

function drawLineStart(){

    startX = event.clientX;
    startY = event.clientY;
    object.moveTo(startX, startY);
}

function drawLineEnd(){

    var endX = event.clientX;
    var endY = event.clientY;

    var myCanvas = document.getElementById("mein_canvas");
    var object = myCanvas.getContext("2d");
    object.lineTo(startX, startY);
    object.stroke();
}

function manualXY(){
    
    var beginManualX = document.getElementById("begin-manual-x");
    var beginManualY = document.getElementById("begin-manual-y");
    var endManualX = document.getElementById("end-manual-x");
    var endManualY = document.getElementById("end-manual-y");

    var myCanvas = document.getElementById("mein_canvas");
    var object = myCanvas.getContext("2d");
    object.moveTo(beginManualX, beginManualY);
    object.lineTo(endManualX, endManualY);
    object.stroke();

}