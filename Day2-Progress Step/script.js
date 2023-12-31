const progress=document.querySelector("#progress");
const circles=document.querySelectorAll(".circle");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");

let currenActive=1;

next.addEventListener("click",()=>{
    currenActive++;
    if(currenActive > circles.length)
    {
           currenActive=circles.length;
    }
    update();
});

prev.addEventListener("click",()=>{
    currenActive--;
    if(currenActive < 1)
    {
           currenActive=1;
    }
   update();    
});

 function update()
{
    circles.forEach((circle,idx ) => {
        if(idx < currenActive){
            circle.classList.add("active");
        } 
        else{
            circle.classList.remove("active");
        }
    })
    const actives=document.querySelectorAll(".active");
    progress.style.width=(actives.length-1)/(circles.length-1)*100 +'%';
    if(currenActive===1)
    {
        prev.disabled=true;
    }
    else if(currenActive===circles.length){
            next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}
