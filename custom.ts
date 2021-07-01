
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
    let _direction = 1; // 1-N 2-E 3-S 4-W
    
    //% blockId=turtlehome
    //% block="goto start"
    export function home(): void {
        // Add code here
        _prevpixel = led.point(_x,_y)?1:0;
        led.plotBrightness(_x, _y, 255);

    }
    //% blockId=turtleright
    //% block="turn right"
    export function turnright():void{
        _direction = _direction+1 > 4 ? 1 : _direction + 1;
    }
    //% blockId=turtleleft
    //% block="turn left"
    export function turnleft():void{
        _direction = _direction-1 < 1 ? 4 : _direction - 1;
    }
    
    //% blockId=turtle up
    //% block="move forward"
    export function forward():void{
        let _incr = 1;
        if (_direction == 1 || _direction ==4) _incr = -1 

        if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        
        if (_direction == 2 || _direction == 4){ 
            _x = _x + _incr 
            _x = _x > 4 ? 4 : _x < 0 ? 0 : _x
        }
        else{
            _y = _y + _incr
            _y = _y > 4 ? 4 : _y < 0 ? 0 : _y
        } 

        led.plotBrightness(_x, _y, 255);
    }

    //% blockId=Movebackward
    //% block="move backward"
    export function backward():void{
        let _incr = -1;
        if (_direction == 1 || _direction ==4) _incr = 1 

        if (_pen) {
            led.plotBrightness(_x,_y,100)
        } else {
            led.plotBrightness(_x, _y,_prevpixel*100 )
        }
        
        if (_direction == 2 || _direction == 4){ 
            _x = _x + _incr 
            _x = _x > 4 ? 4 : _x < 0 ? 0 : _x
        }
        else{
            _y = _y + _incr
            _y = _y > 4 ? 4 : _y < 0 ? 0 : _y
        } 

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
