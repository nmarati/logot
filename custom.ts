
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace logoturtle {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    let _x = 2;
    let _y = 2;
    let _pen = 1;
    
    //% blockId=turtlehome
    //% block="goto start"
    export function home(): void {
        // Add code here
        led.plotBrightness(_x, _y, 255)

    }
    //% blockId=turtleright
    //% block="turn right"
    export function right():void{
        led.plotBrightness(_x,_y,100)
        _x = _x == 4?_x:_x+1;

    }
    //% blockId=turtleleft
    //% block="turn left"
    export function left():void{
        led.plotBrightness(_x,_y,100)
        _x = _x == 0?_x:_x-1;  
    }
    //% blockId=turtle up
    //% block="mvoe forward"
    export function up():void{
        led.plotBrightness(_x,_y,100)
        _y = _y == 0?_y:_y-1;  
    }
    //% blockId=turtle down
    //% block="move down"
    export function down():void{
        led.plotBrightness(_x,_y,100)
        _y = _y == 4?_y:_y+1;  
    }
}
