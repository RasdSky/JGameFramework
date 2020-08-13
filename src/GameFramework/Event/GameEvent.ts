/*
 * @Author: Ji
 * @Desc: 事件系统，应该对应的模块创建对应的事件系统，不要全部塞到一起
 */
import EventDispatcher = Laya.EventDispatcher
export default class GameEvent {
    private event: EventDispatcher;
    public constructor() {
        this.event = new EventDispatcher();
    }
    /**
     * @type 事件的类型
     * @listener 处理事件的监听器函数function(data)
     * @thisObject 侦听函数绑定的this对象
     */
    public addListener(type: string, listener: Function, thisObject: any): void {
        this.event.on(type, thisObject, listener);
    }
    public removeListener(type: string, listener: Function, thisObject: any): void {
        this.event.off(type, thisObject, listener);
    }
    public removeAllListener(): void {
        this.event.offAll();
    }
    /**
     * 派发一个指定参数的事件
     * @type 事件类型
     * @data 事件
     */
    public dispatch(type: string, data?: any): void {
        this.event.event(type, data);
    }
}