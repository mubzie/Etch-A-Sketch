const container: HTMLElement | null = document.querySelector(".grid-container");

const blackBtn: HTMLElement | null = document.querySelector("#black-mode");
const randomBtn: HTMLElement | null = document.querySelector("#rainbow-mode");
const eraseBtn: HTMLElement | null = document.querySelector("#erase-mode");

const clearBtn: HTMLElement | null = document.querySelector("#clear-mode");

let currentMode: string;

blackBtn!.addEventListener("click", () => {
  currentMode = "black";
});

randomBtn!.addEventListener("click", () => {
  currentMode = "randomColor";
});

eraseBtn!.addEventListener("click", () => {
  currentMode = "eraser";
});

clearBtn!.addEventListener("click", () => {
  currentMode = "";
  location.reload();
});

function createDiv(grid: number) {
  for (let i = 0; i < grid; i++) {
    let mainGrid = document.createElement("div");
    for (let j = 0; j < grid; j++) {
      let childGrid = document.createElement("div");
      mainGrid.appendChild(childGrid).setAttribute("class", "child pixel");
    }
    container!.appendChild(mainGrid).setAttribute("class", "main-grid");
  }

  let pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pxl) => {
    pxl.addEventListener("mouseover", (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        switch (currentMode) {
          case "black":
            e.currentTarget!.style.backgroundColor = "black";
            break;
          case "randomColor":
            let randomColor =
              "#" + Math.floor(Math.random() * 16777215).toString(16);
            e.currentTarget!.style.backgroundColor = randomColor;
            break;
          case "eraser":
            e.currentTarget!.style.backgroundColor = "white";
            break;
        }
      }
    });
  });
}

createDiv(16);
