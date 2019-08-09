import { init, GameLoop, Sprite } from './engine/kontra.mjs';
import { initKeys, keyPressed } from './engine/kontra.mjs';
import { initPointer, track, untrack } from './engine/kontra.mjs';
import { pointerOver } from './engine/kontra.mjs';
import { pointerPressed } from './engine/kontra.mjs';

console.log('import success')

let { canvas } = init();
initKeys();
initPointer();

let startButton = Sprite({
    x: 350,        // starting x,y position of the sprite
    y: 400,
    color: 'green',  // fill color of the sprite rectangle
    width: 100,     // width and height of the sprite rectangle
    height: 20,
    dx: 0,          // move the sprite 2px to the right every frame
    onOver: function() {
        startButton.color = 'blue';
    }, 
    onDown: function() {
        if (pointerPressed('left')) {
            startButton.color = 'brown';
            startScreen.stop();
            firstLevel.start();
            untrack(startButton);
        }
    }, 
    onUp: function() {
        if (startButton.color == 'brown')
            startButton.color = 'blue';
    }
});

let firstSprite = Sprite({
    x: 100,
    y: 100,
    color: 'red',
    width: 50,
    height: 50
});

track(startButton);

let startScreen = GameLoop({  // create the main game loop
    update: function () { // update the game state
        if (!pointerOver(startButton))
            startButton.color = 'green';

        startButton.update();        
    },
    render: function () { // render the game state
        startButton.render();
    }
});

let firstLevel = GameLoop({
    update: function() {
        if (keyPressed('w'))
            firstSprite.dy = -2;
        if (keyPressed('s'))
            firstSprite.dy = 2;
        if (!keyPressed('w') && !keyPressed('s'))
            firstSprite.dy = 0;
        if (keyPressed('a'))
            firstSprite.dx = -2;
        if (keyPressed('d'))
            firstSprite.dx = 2;
        if (!keyPressed('a') && !keyPressed('d'))
            firstSprite.dx = 0;

        if (firstSprite.x > canvas.width) {
            firstSprite.x = -firstSprite.width;
        }
        if (firstSprite.x < -firstSprite.width) {
            firstSprite.x = canvas.width;
        }

        if (firstSprite.y > canvas.height) {
            firstSprite.y = -firstSprite.height;
        }
        if (firstSprite.y < -firstSprite.height) {
            firstSprite.y = canvas.height;
        }

        firstSprite.update();
    },
    render: function() {
        firstSprite.render();
    }
})

startScreen.start();    // start the game