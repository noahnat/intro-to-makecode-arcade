controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.fire, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
game.splash("catch me if you can")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
