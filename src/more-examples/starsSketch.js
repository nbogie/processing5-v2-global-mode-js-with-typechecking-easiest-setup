/** An object representing a star in our sketch.
 * Such an object will store its own position and velocity as well as its size and colour.
 * @typedef {Object} Star
 * @property {p5.Vector} pos
 * @property {p5.Vector} vel
 * @property {number} size
 * @property {p5.Color} colour
 */

/**
 * @type {Star[]}
 */
let stars;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stars = createStars();
    background(20);
}

function draw() {
    background(20);
    drawStars();
    updateStars();
}

function drawStars() {
    for (let star of stars) {
        drawStar(star);
    }
}

/**
 * @param {Star} star
 */
function drawStar(star) {
    noStroke();
    fill(star.colour);
    circle(star.pos.x, star.pos.y, star.size);
}

/**
 * Creates and returns an array of Star objects, with randomised properties (positions, velocities, etc)
 * @returns {Star[]}
 */
function createStars() {
    const array = [];

    for (let i = 0; i < 100; i++) {
        //Here is a usage of a  jsdoc type comment that is optional but recommended.
        //Why?  Try this: 1. change pos: randomScreenPos() to pos: "cabbage", 2: read the error. 3: try removing the following comment, 4: the error moves - *away* from the bug!
        /** @type {Star} */
        const star = {
            pos: randomScreenPos(),
            size: random([1, 1, 1, 2, 3, 8]),
            colour: random(["white", "skyblue", "pink"]),
            vel: p5.Vector.random2D().mult(random(1, 5)),
        };
        array.push(star);
    }
    return array;
}

function updateStars() {
    stars.forEach(updateStar);
}

//Exercise for the reader: try to write some nonsense about the star variable this function code:
//   specifically, try treating it like a string, with star.toUpperCase()
//                 and try to access properties that don't exist, by misspelling the property star.pos
//  Then observe the error messages.
//  Remove the JSDoc comment - what changes with regard to the error messages?
/**
 * Update the given star, changing its position data according to its velocity
 * and possibly repositioning it, if necessary.
 * @param {Star} star - the star to update
 */
function updateStar(star) {
    star.pos.add(star.vel);
    if (star.pos.dist(getCentrePos()) > width / 2) {
        star.pos = randomScreenPos();
    }
}

/** Create and return a p5.Vector object representing the current centre of the canvas.
 * @returns {p5.Vector}
 */
function getCentrePos() {
    return createVector(width / 2, height / 2);
}

/**
 * Create and return a p5.Vector object representing a random on-canvas position (within some distance of the centre).
 * @returns {p5.Vector}
 */
function randomScreenPos() {
    const offset = p5.Vector.random2D().mult(random(0, width / 2));
    return offset.add(getCentrePos());
}

function mousePressed() {
    createAndAddStarAtMouse();
}

function createAndAddStarAtMouse() {
    //exercise for the reader, try making a new createStar function that creates and returns a Star object - use it here and in createStars()
    const star = {
        pos: randomScreenPos(),
        size: random([1, 1, 1, 2, 3, 8]),
        colour: random(["white", "skyblue", "pink"]),
        vel: p5.Vector.random2D().mult(random(1, 5)),
    };
    stars.push(star);
}
