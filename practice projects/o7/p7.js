
// var elem = document.querySelector('.elm')
// var elemImg =document.querySelector('.elm img');

// elem.addEventListener("mousemove",(details)=>{
//   elemImg.style.left = details.x+ "px";
//   elemImg.style.top = details.y+ "px";
// });

// elem.addEventListener("mouseenter",(details)=>{
//   elemImg.style.opacity = 1;
// });

// elem.addEventListener("mouseleave",(details)=>{
//   elemImg.style.opacity = 0;
// });

//the above code does the work for only first div as query selector picks only first one so we will use querySelectorAll--but but it picks elemnts in form on node list

var elem = document.querySelectorAll('.elm')

// console.log(elem); -->NodeList(5) [div.elm, div.elm, div.elm, div.elm, div.elm]

elem.forEach((val)=>{
// console.log(val);-->this gives us all five divs

val.addEventListener("mousemove",(details)=>{
  // console.log(val.childNodes)-->NodeList(5) [text, h1, text, img, text] we want to target image of val so
  //var valImg = val[3];

   
  val.childNodes[3].style.left = details.x+"px";
  //val.childNodes[3].style.top = details.y+"px";
  

});

val.addEventListener("mouseenter",()=>{
  // console.log(val.childNodes)-->NodeList(5) [text, h1, text, img, text] we want to target image of val so
  //var valImg = val[3];

  val.childNodes[3].style.opacity = 1;
  val.childNodes[1].style.color = "red";

});

val.addEventListener("mouseleave",()=>{
  val.childNodes[3].style.opacity = 0;
  val.childNodes[1].style.color = "";
});

});