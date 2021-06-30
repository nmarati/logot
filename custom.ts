
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Kodely Turtle
 */
//% weight=100 color=#0fbc11 icon=""
namespace logoturtle {
 
    //% block
    let _x = 2;
    let _y = 2;
    let _prevx = 2;
    let _prevy = 2;
    let _prevpixel = 0;
    let _pen = 1;
    
    //% blockId=turtlehome
    //% block="goto start"
    export function home(): void {
        // Add code here
        _prevpixel = led.point(_x,_y)?1:0;
        led.plotBrightness(_x, _y, 255);

    }
    //% blockId=turtleright
    //% block="turn right"
    export function right():void{

        if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        _x = _x == 4?_x:_x+1;
        _prevpixel = led.point(_x, _y)?1:0;
        _prevx = _x;
        led.plotBrightness(_x, _y, 255);

    }
    //% blockId=turtleleft
    //% block="turn left"
    export function left():void{
        
        if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        _x = _x == 0?_x:_x-1;  
        _prevpixel = led.point(_x, _y)?1:0;
        _prevx = _x;
        led.plotBrightness(_x, _y, 255);
    }
    //% blockId=turtle up
    //% block="mvoe forward"
    export function forward():void{
        if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        _y = _y == 0?_y:_y-1;  
        _prevpixel = led.point(_x, _y)?1:0;
        _prevy = _y;
        led.plotBrightness(_x, _y, 255);
    }
    //% blockId=turtle down
    //% block="move down"
    export function backward():void{
         if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        _y = _y == 4?_y:_y+1;  
        _prevpixel = led.point(_x, _y)?1:0;
        _prevy = _y;
        led.plotBrightness(_x, _y, 255);
    }
    //% blockId=turtle pen up
    //% block="penUp"
    export function penUp():void {
        _pen = 0;
    }
    //% blockId=turtle pen down
    //% block="penDown"
    export function penDown():void {
        _pen = 1;
    }

}
