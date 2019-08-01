import { init, GameLoop, Sprite } from './engine/kontra.mjs';
import { initKeys, keyPressed } from './engine/kontra.mjs';

console.log('import success')

let { canvas } = init();
initKeys();

let sprite = Sprite({
    x: 100,        // starting x,y position of the sprite
    y: 80,
    color: 'red',  // fill color of the sprite rectangle
    width: 20,     // width and height of the sprite rectangle
    height: 40,
    dx: 2          // move the sprite 2px to the right every frame
});

let loop = GameLoop({  // create the main game loop
    update: function () { // update the game state
        if (keyPressed('w') && sprite.dx <= 10) {
            sprite.dx += 1;
        }
        else if (keyPressed('s') && sprite.dx >= 0) {
            sprite.dx -= 0.5;
        }
        else {
            if (sprite.dx > 2)
                sprite.dx -= 1;
            if (sprite.dx < 2)
                sprite.dx += 1;
        }
        sprite.update();

        // wrap the sprites position when it reaches
        // the edge of the screen
        if (sprite.x > canvas.width) {
            sprite.x = -sprite.width;
        }
        if (sprite.x < -sprite.width) {
            sprite.x = canvas.width + sprite.width;
        }
    },
    render: function () { // render the game state
        sprite.render();
    }
});

loop.start();    // start the game