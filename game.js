const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const playerImageRight1 = new Image();
playerImageRight1.src = './croptoad.png';

const playerImageRight2 = new Image();
playerImageRight2.src = './toad2.jpg';

let playerX = 100;
const playerSpeed = 10;

let dKeyPressed = false;
let qKeyPressed = false;

let currentImageSet = [playerImageRight1, playerImageRight2];
let currentImageIndex = 0;

playerImageRight1.onload = () => {
  updateGame();
};

function drawSprite(x, y) {
  ctx.drawImage(currentImageSet[currentImageIndex], x, y);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    dKeyPressed = true;
  }
  if (event.key === 'q' || event.key === 'Q') {
    qKeyPressed = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    dKeyPressed = false;
  }
  if (event.key === 'q' || event.key === 'Q') {
    qKeyPressed = false;
  }
});

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (dKeyPressed) {
      playerX += playerSpeed;
    }
  
    if (qKeyPressed) {
      playerX -= playerSpeed;
    }
    
    if (dKeyPressed || qKeyPressed) {
      currentImageIndex = (currentImageIndex + 1) % currentImageSet.length;
    }
  
    drawSprite(playerX, 100);
    
    requestAnimationFrame(updateGame);
  }
  
