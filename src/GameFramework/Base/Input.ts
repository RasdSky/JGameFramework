export default class Input {
    private static keys: Set<number> = new Set<number>();
    public static init():void{
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
        //添加键盘抬起事件
        Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
    }
    static onKeyUp(event:Laya.Event) {
        this.keys.delete(event.keyCode);
    }
    static onKeyDown(event:Laya.Event) {
        this.keys.add(event.keyCode);
    }
    public static getKeyDown(keyCode: number): boolean {
        return this.keys.has(keyCode);
    }
}