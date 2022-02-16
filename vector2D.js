class Vector2D {
    constructor (x, y) {
        this.x = x;
        this.y = y;

        this.length = Math.sqrt(this.x**2 + this.y**2)
    }

    // METHODS THAT CHANGE 'this'

    // v is of type Vector2D
    // adds a vector to this vector
    mplus(v) {
        this.x += v.x
        this.y += v.y

        this.#refreshProperties()
        return this;
    }

    // l is a number
    // multiplies this vector by scalar
    mtimes(l) {
        this.x *= l
        this.y *= l

        this.#refreshProperties()
        return this;
    }

    // METHODS THAT DON'T CHANGE 'this'
    
    // v is of type Vector2D
    // returns new vector that is the addition of both vectors
    plus(v) {
        return new Vector2D(this.x + v.x, this.y + v.y)
    }

    // l is a number
    // returns new vector that is a scalar multiple of original
    times(l) {
        return new Vector2D(l * this.x, l * this.y)
    }

    // v is of type Vector2D
    // returns dot product of both vectors
    dot(v) {
        return this.x * v.x + this.y * v.y
    }

    // PRIVATE METHODS

    // updates properties of object when x and y are changed
    #refreshProperties() {
        this.length = Math.sqrt(this.x**2 + this.y**2)
    }
}