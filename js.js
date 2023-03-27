var canvas=document.getElementById("MyCanvas")
var ctx= canvas.getContext("2d")
var color="orange"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
function circulo(){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();  
}

canvas.addEventListener("mousedown", dibujar);
function dibujar(e){
    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;
    circulo(mouse_x , mouse_y);
}
