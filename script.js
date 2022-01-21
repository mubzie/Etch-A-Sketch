const container = document.querySelector('.grid-container');

function createDiv(grid){
    
   for(let i = 0; i < grid; i++) {
       let mainGrid = document.createElement('div');
       for (j = 0; j < grid; j++) {
        let childGrid = document.createElement('div');
        mainGrid.appendChild(childGrid).className = "child"
       }
       container.appendChild(mainGrid).className = "main-grid";
   }

}
createDiv(16);

