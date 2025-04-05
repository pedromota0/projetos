
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


const image = new Image();
image.src = '../imagensfullstack/spfc.png'; 

let mouseX = 0;
let mouseY = 0;

function updateImagePosition(event) {
    
    mouseX = event.clientX - canvas.offsetLeft;
    mouseY = event.clientY - canvas.offsetTop;

    
    draw();
}

// Função p
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    const width = 30;
    const height = 30;

    ctx.drawImage(image, mouseX - width / 2, mouseY - height / 2, width, height); 
}


canvas.addEventListener('mousemove', updateImagePosition);

image.onload = function() {
    console.log('Imagem carregada com sucesso!');
    draw(); 
};

image.onerror = function() {
    console.error('Erro ao carregar a imagem. Verifique a URL ou o caminho da imagem.');
};



