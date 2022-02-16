let v1 = new Vector2D(1,2)
let v2 = new Vector2D(4,3)
console.log(`${v1.length}`)
v1.mtimes(5)
console.log(`${v1.length}`)

let v3 = v2.plus(v1.times(2))

function setup() {
    createCanvas(600, 600)
    background(50)
}

function draw() {
    // v1
    stroke(26, 113, 226)
    line(300, 300, v1.x*10+300, -v1.y*10+300)

    // v2
    stroke(226,26,26)
    line(300, 300, v2.x*10+300, -v2.y*10+300)

    // v3
    stroke(113, 226, 113)
    line(300, 300, v3.x*10+300, -v3.y*10+300)
}