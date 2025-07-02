var rectangle =document.querySelector('#center');

rectangle.addEventListener("mousemove",function(details){

  //this tells the position of element w.r.t to whole page

  // rectangle is a DOM element, but .left and .width are properties of the object returned by getBoundingClientRect(), not the element itself.
  var rect = rectangle.getBoundingClientRect(); //mousepointer location in screen

  // clientX--position x axis
  // clientY--position y axis
  
  //.left gives leftest point
  var inside = details.clientX-rect.left;

//if mouse position<center=(width/2)->left
//if mouse position>center->right

if(inside<rect.width/2){
  //GSAP utility
 var redcolor = gsap.utils.mapRange(0,rect.width/2,255,0,inside);
gsap.to(rectangle,{
  backgroundColor:`rgb(${redcolor}, 0, 0)`,
  ease: Power4,
})
}
else{
   var bluecolor = gsap.utils.mapRange(rect.width/2,rect.width,0,255,inside);
gsap.to(rectangle,{
  backgroundColor:`rgb(0, 0, ${bluecolor})`,
  ease: Power4,
})
}
})

//when mouse leaves the rectangle it becomes blue
rectangle.addEventListener("mouseleave",()=>{
  //this won't work cause gsap is overwriting it.
  // rectangle.style.backgroundColor=rgb(255, 255, 255);
  gsap.to(rectangle,{
  backgroundColor:`rgb(255, 255, 255)`,
  ease: Power4,
})
});
