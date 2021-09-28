
let colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "coral", "orange"];  
let btn = document.getElementById('btn');       
let color = document.querySelector('.color'); 

btn.addEventListener('click', function() {    
    const randomColors = getRandomColors();  
    document.body.style.backgroundColor = colors[randomColors];   
    color.textContent = colors[randomColors];                  
});

function getRandomColors() {                      
    return Math.floor(Math.random() * colors.length);
}



