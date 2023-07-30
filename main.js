canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ;
color="black" ;
width=3 ;
newwidth=screen.width-70 ;
newheight=screen.height-300;
if(screen.width>992)
{
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden"
}
// ctx.beginPath() ;
// ctx.moveTo(0,0) ;
// ctx.lineTo(800,600)
// ctx.stroke() ;
// ctx.beginPath() ;
// ctx.moveTo(800,0) ;
// ctx.lineTo(0,600) ;
// ctx.stroke() ;
// ctx.beginPath() ;
// ctx.moveTo(400,0) ;
// ctx.lineTo(400,600)
// ctx.stroke()
// ctx.beginPath() ;
// ctx.moveTo(0,300) ;
// ctx.lineTo(800,300)
// ctx.stroke()
var pmousex ;
var pmousey ;
mouseEvent="" ;
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e)
{
    color=document.getElementById("color").value ;
    width=document.getElementById("width").value ;
ctx.strokeStyle=color ;
ctx.lineWidth=width ;
}
canvas.addEventListener("touchmove",mytouchmove) ;
function mytouchmove(e) 
{
    touchx=e.touches[0].clientX-canvas.offsetLeft ;
    touchy=e.touches[0].clientY-canvas.offsetTop
   
        ctx.beginPath() ;
        ctx.arc(touchx,touchy,30,0,2*Math.PI)
        ctx.stroke() ; 



}
canvas.addEventListener("mousemove",mymousemove) ;
function mymousemove(e) 
{
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    if (mouseEvent=="mousedown")
    {
        ctx.beginPath() ;
        ctx.arc(pmousex,pmousey,30,0,2*Math.PI) ;
        ctx.stroke() ; 
    }

    
 

}
canvas.addEventListener("mousedown",mymousedown) ;
function mymousedown(e)
{
mouseEvent="mousedown" ;
color=document.getElementById("color").value ;
width=document.getElementById("width").value ;
ctx.strokeStyle=color ;
ctx.lineWidth=width ;
}
canvas.addEventListener("mouseup",mymouseup) ;
function mymouseup(e)
{
mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave",mymouseleave) ;
function mymouseleave(e)
{
mouseEvent="mouseleave"
}
function clearArea()
{
ctx.clearRect (0,0,newwidth,newheight)
}
