const imageContainer = document.querySelector('.image-container')
const images = imageContainer.childNodes;
const nextButt = document.getElementById('next');
const prevButt = document.getElementById('prev')
console.log(images);
window.counter =  1;

console.log(images.length)
function nextFunc(){
    if(window.counter + 2 >= images.length){
        console.log('i ran')
        return
    }
    images[window.counter].style.left = "-100%";
    images[window.counter+2].style.left = "0%";
    console.log(window.counter)
    window.counter =window.counter + 2;
}

function prevFunc(){
    if(window.counter - 2 < 0){
        return
    }
    images[window.counter].style.left = "100%";
    images[window.counter-2].style.left = "0";
    console.log(window.counter)
    window.counter = window.counter-2;
}
