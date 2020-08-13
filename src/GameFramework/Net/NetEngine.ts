/*
 * @Author: Ji
 * @Desc: 网络模块
 */
import BaseMsg from './BaseMsg';
import GameEvent from '../Event/GameEvent';
import ProtobufMsg from './ProtobufMsg';
export default class NetEngine {
    private static instance: NetEngine;
    private socket: Laya.Socket;
    private msg: BaseMsg;
    /**
     * socket连接错误
     */
    public static readonly SOCKET_ERROR = "SOCKET_ERROR";
    /**
     * 收到消息,监听这个消息就可以获得解析后的对象
     */
    public static readonly ON_MESSAGE = "ON_MESSAGE";
    /**
     * socket断开连接
     */
    public static readonly SOCKET_CLOSE = "SOCKET_CLOSE";
    //网络模块事件
    public readonly NetEvent: GameEvent = new GameEvent();
    protected constructor() {
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this.msg = new ProtobufMsg(this.socket.endian, this.dispatchMsg);
    }
    public static get Instance(): NetEngine {
        return this.instance ? this.instance : this.instance = new NetEngine();
    }
    public connect(host: string, port: number): void {
        this.addEvent();
        this.socket.connect(host, port);
    }
    public connectByURL(url: string): void {
        this.addEvent();
        this.socket.connectByUrl(url);
    }
    private addEvent(): void {
        this.socket.on(Laya.Event.OPEN, this, this.onOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessage);
        this.socket.on(Laya.Event.ERROR, this, this.onError);
    }
    private onMessage(msg: any = null): void {
        this.msg.receive(msg);
    }
    /**
     * 关闭连接
     */
    private onClose(event: any = null): void {
        this.NetEvent.dispatch(NetEngine.SOCKET_CLOSE);
    }
    /**
     * 连接结果
     */
    private onOpen(event: any = null): void {

    }
    private onError(error: any = null): void {
        this.NetEvent.dispatch(NetEngine.SOCKET_ERROR);
    }
    public sendMsg(msgID: number, msg: any): void {
        this.msg.send(this.socket, msgID, msg);
    }
    /**
     * 
     * @param msg  分发消息
     */
    private dispatchMsg(msg): void {
        this.NetEvent.dispatch(NetEngine.ON_MESSAGE, msg);
    }
    /**
    * 关闭Socket连接
    */
    public close(): void {
        this.socket.close();
        this.socket.cleanSocket();
    }
}