// Throttle function: ensures the callback is only called at most once every 'limit' ms
function throttle(callback, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}

document.querySelector('#center').addEventListener("mousemove",throttle(function paro(details){

//function to be throttled
var img_div=document.createElement("div")

//note cause we are adding classList only so . lagane nahi hai.
img_div.classList.add('image_div');

//this make div come on place inside the bigger div with div left and top fixing to mouse position
img_div.style.left=details.clientX +'px';
img_div.style.top=details.clientY + 'px';

//creating image element
var img=document.createElement("img");
//adding src using setAttribute
img.setAttribute("src","images/img1.webp");


//adding image to div
img_div.appendChild(img);

//adding div to body
document.body.appendChild(img_div);

//using gsap we make image come up making y0
gsap.to(img,{
  y: "0",
  ease: Power1,
  duration: .6
 } 
)

//then gain taking image back to down 
gsap.to(img,{
  y: "100%",
  delay: .6, //letting uppar wala complete like pehle uppar aane toh do phir neeche le jao
  ease: Power2,
 } 
)

//removes the injected div after given time
setTimeout(()=>{
  img_div.remove();
},2000);

},400));