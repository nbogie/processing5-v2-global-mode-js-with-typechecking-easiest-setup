function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 50);
    fill("darkorange");
    circle(frameCount, height / 2, 100);
    fill("dodgerblue");
    circle(mouseX, mouseY, 30);
    circle(mouseY, mouseX, 10);
}
