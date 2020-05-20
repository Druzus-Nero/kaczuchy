

scene.setBackgroundColor(7)


let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 2 5 d 4 c . .
    . . . . b 5 5 1 2 2 d d 4 4 4 b
    . . . . b 5 5 d 2 b 4 4 4 4 b .
    . . . b d 5 5 5 5 4 4 4 4 b . .
    . . b d d 5 5 5 5 5 5 5 5 b . .
    . b d d d d 5 5 5 5 5 5 5 5 b .
    b d d d b b b 5 5 5 5 5 5 5 b .
    c d d b 5 5 d c 5 5 5 5 5 5 b .
    c b b d 5 d c d 5 5 5 5 5 5 b .
    . b 5 5 b c d d 5 5 5 5 5 d b .
    b b c c c d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, spriteKind.player)





mySprite.x = 20
mySprite.ay = 200 // vertical acceleration 

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})

game.onUpdateInterval (1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 2 2 . . . . . . . . . . .
        . . . . 2 5 5 3 3 3 3 7 . . . .
        . . . 2 2 5 5 3 3 3 3 7 . . . .
        . . . . 2 5 5 3 3 3 3 7 . . . .
        . . . 2 2 . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, -50, 50)
    projectile.y = Math.randomRange(50, 50)
})

sprites.onOverlap(spriteKind.Player, SpriteKind.Projectile,  
    function (sprite: Sprite, otherSprite: Sprite) { 
game over()
 })

 game.onUpdate(function () {
     //if (mySprite.top < 0 || mySprite.bottom >120 )
     //game.over()
     info.changeScoreBy(1)
 })


