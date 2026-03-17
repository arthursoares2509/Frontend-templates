class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  mult(n) {
    this.x *= n;
    this.y *= n;
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(2, 0);
    this.acc = new Vector(0, 0.1); // g/s
    this.r = r;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}