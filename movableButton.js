var catImage=document.getElementById("catimage");
var yesBtn=document.getElementById("yesbtn");
yesBtn.addEventListener('click',function(){
    catImage.src="yay_cat.gif"

})
var b=document.getElementById("nobtn");

b.addEventListener("mouseover",moveHover);
function moveHover(){
    console.log("You hover")
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;
    b.style.left=i+"px";
    b.style.top=j+"px";
}





