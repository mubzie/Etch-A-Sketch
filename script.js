const container = document.querySelector('.grid-container');
// const divs = document.createElement('div');
// divs.classList.toggle('main-grid');
// container.appendChild(divs);

function createDiv(rows, cols){
    // let divs = document.createElement('div');
    // // divs.classList.toggle('main-grid');
    // container.appendChild(divs);

   for(let i = 0; i < (rows * cols); i++) {
       let grid = document.createElement('div');
       let grid2 = document.createElement('div');
       grid.appendChild(grid2).className = "child"
       container.appendChild(grid).className = "main-grid";
   }

// for (let i = 0; i <= rows; i++) {
//     for(let j = 0; j <= cols; j++) {
//         let grid = document.createElement('div');
//          container.appendChild(grid).className = "main-grid";
//     }
// }

// for (let i = 0; i <= rows; i++) {
//         let grid = document.createElement('div');
//          container.appendChild(grid).className = "main-grid";

// }
}
createDiv(16, 16)

