import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'

const s = function( p ) {
  let x = 100;
  let y = 100;

  p.setup = function() {

    p.createCanvas(900, 900);
  };

  p.draw = function() {
    p.background(0)
    p.fill(255)
    p.rect(x,y,50,50)
  }
}

const sketch = new p5(s)

