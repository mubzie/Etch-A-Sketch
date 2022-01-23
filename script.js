const container = document.querySelector('.grid-container');
const blackBtn = document.querySelector('#black-mode');
const rainbowBtn = document.querySelector('#rainbow-mode');
const eraseBtn = document.querySelector('#erase-mode');
const clearBtn = document.querySelector('#clear-mode');

blackBtn.addEventListener('click', () => {
        currentMode = 'black';
});


rainbowBtn.addEventListener('click', () => {
        currentMode = 'randomColor'; 
})

eraseBtn.addEventListener('click', () => {
        currentMode = 'eraser';
})

clearBtn.addEventListener('click', () => {
    location.reload();
})

function createDiv(grid){
     
   for(let i = 0; i < grid; i++) {
       let mainGrid = document.createElement('div');
       for (j = 0; j < grid; j++) {
        let childGrid = document.createElement('div');
        mainGrid.appendChild(childGrid).classList = "child pixel";
        
       }
       container.appendChild(mainGrid).classList = "main-grid";
   }

   let pixels = document.querySelectorAll('.pixel');

   pixels.forEach( pxl => {
           pxl.addEventListener('mouseover', (e) => {
                   switch(currentMode) {
                           case 'black':
                           e.target.style.backgroundColor = 'black'
                           break;
                           case 'randomColor':
                           randomColor = '#' +Math.floor(Math.random()*16777215).toString(16).toUpperCase();
                           e.target.style.backgroundColor = randomColor;
                           break;
                           case 'eraser':
                           e.target.style.backgroundColor = 'white'
                           break;
                   }
           })
   })
}
createDiv(16);