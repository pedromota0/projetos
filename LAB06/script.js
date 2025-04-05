const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = './imagensfullstack/supermario.png';
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const imgSize = 40;

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

const clampedX = Math.min(Math.max(mouseX, imgSize / 2), canvas.width - imgSize / 2);
const clampedY = Math.min(Math.max(mouseY, imgSize / 2), canvas.height - imgSize / 2);

ctx.drawImage(img, clampedX - imgSize / 2, clampedY - imgSize / 2, imgSize, imgSize);

requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function (e) {
const rect = canvas.getBoundingClientRect();
mouseX = e.clientX - rect.left;
mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', function () {
});

img.onload = () => {
draw();
};
