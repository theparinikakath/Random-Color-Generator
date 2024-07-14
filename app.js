let btn=document.querySelector('button');

btn.addEventListener('click',function()
{
    let h3=document.querySelector('h3');
    let randcol=getRandomColor()
    h3.innerText=randcol;
    let div=document.querySelector('div');
    div.style.backgroundColor=randcol;
    console.log('color updated');
    
})
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}





