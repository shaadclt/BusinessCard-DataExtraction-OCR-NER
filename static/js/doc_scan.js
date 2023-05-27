// Document Scanning With JavaScrip
// Author : Srikanth
// https://www.udemy.com/user/freeai-space/

var circles = [];
var canvas;
var context;
var previousSelectedCircle;
var isDragging = false;

window.onload = function(){
  canvas = document.getElementById("canvas");

  context = canvas.getContext("2d");
  canvas.onmousedown = canvasClick;
  canvas.onmouseup = stopDragging;
  canvas.onmouseout = stopDragging;
  canvas.onmousemove = dragCircle;
  
  };


class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.isSelected = false;
    }
}


function processFunction(file){
  const files = file
  process(file)
}


function loadImage(file){
  return new Promise((resolve,reject)=>{
    const url = file;
    let img = new Image();
    img.onload = ()=>{
        resolve(img);
    };
    img.src = url;
});
}



function loadPoints(points){

  for (var i=0;i<points.length;i++) {
    var radius = 6;
    var x = points[i].x;
    var y = points[i].y;
    console.log(x,y)
    
    var color = "#FFFF00"
    var circle = new Circle(x,y,radius,color);
    circles.push(circle);
    processFunction('/static/media/resize_image.jpg')

}
};



function drawCircles(){
    
    context = $("canvas")[0].getContext('2d');
    canvas = $("canvas")[0];
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(img,0,0,img.width,img.height);

    for (var i=0;i<circles.length; i++){
        var circle = circles[i];
        context.globalAlpha = 0.85;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        context.fillStyle = circle.color;
        context.strokeStyle = "#76FF03";

        if (circle.isSelected) {
            context.lineWidth = 4;
        }
        else {
            context.lineWidth = 2;

        }
        context.fill();
        context.stroke();
        context.beginPath();
        context.moveTo(circle.x, circle.y);
        context.lineTo( circles[i-1>=0?i-1:3].x,  circles[i-1>=0?i-1:3].y);
        context.stroke();
    }
    
}


function canvasClick(e){
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    for(var i=circles.length-1; i>=0; i--) {
        var circle = circles[i];
        var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2)
            + Math.pow(circle.y - clickY, 2));
        if (distanceFromCenter <= circle.radius) {
          if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
          previousSelectedCircle = circle;
           
          circle.isSelected = true;
          isDragging = true;
         
          drawCircles();

          return;
        }
    }
}


 
function stopDragging() {
  isDragging = false;
}

function dragCircle(e) {
  if (isDragging == true) {
    if (previousSelectedCircle != null) {
      var x = e.pageX - canvas.offsetLeft;
      var y = e.pageY - canvas.offsetTop;

      previousSelectedCircle.x = x;
      previousSelectedCircle.y = y;

      drawCircles();
    }
  }
}



function clearCanvas() {
  circles = [];

  drawCircles();
}

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}


// AJAX
$(document).ready(function(){
  $("#sendData").click(function(){
      $("#loader").html('<img src="/static/images/scan.gif">');
      $.ajax({
        type : 'POST',
        url : "/transform",
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify({"data":[[circles[0].x,circles[0].y],
                                      [circles[1].x,circles[1].y],
                                      [circles[2].x,circles[2].y],
                                      [circles[3].x,circles[3].y]]
                             }),
       success: function(){
         window.location.href = 'prediction';
       }
      });
  });
});

// window process
window.process = async (file)=>{ 
  let ctx = $("canvas")[0].getContext('2d');
  const img = await loadImage(file);
  console.log("enter into process")
  $("canvas")[0].width = img.width;
  $("canvas")[0].height = img.height;
  window.img = img;
  ctx.drawImage(img,0,0,img.width,img.height);
  drawCircles();
}