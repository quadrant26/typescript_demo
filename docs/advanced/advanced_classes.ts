// 类与接口

interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}

// 接口继承类
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };