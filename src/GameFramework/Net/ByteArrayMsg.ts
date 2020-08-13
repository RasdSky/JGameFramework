/*
 * @Author: Ji
 * @Desc: 基于二进制的消息
 */
import BaseMsg from './BaseMsg';
export default class ByteArrayMsg implements BaseMsg {
    private msgBuffer: Laya.Byte;
    private endian: string;
    private dispatch: Function;
    public constructor(endian: string, dispatch: Function) {
        this.endian = endian;
        this.dispatch = dispatch;
        this.dispatch.bind(this);
        this.msgBuffer = new Laya.Byte();
    }

    /**
     * 接收消息处理
     * @param msg
     */
    public receive(msg): void {
        this.msgBuffer.clear();
        this.msgBuffer.writeArrayBuffer(msg);
        this.msgBuffer.pos = 0;
        do {
            const obj: any = this.decode(this.msgBuffer);
            if (null != obj) {
                this.dispatch(obj);
            } else {
                break;
            }
        } while (this.msgBuffer.bytesAvailable > 0);
        if (this.msgBuffer.bytesAvailable == 0) {
            this.msgBuffer.clear();
        }
    }

    /**
     * 发送消息处理
     * @param msg
     */
    public send(socket: Laya.Socket, msgID: number, msg: any): void {
        const obj: any = this.encode(msgID, msg);
        if (obj) {
            socket.send(obj);
        }
    }

    /**
     * 消息解析
     * @param msg
     */
    public decode(msg: any): any {
        // Log.log("decode需要子类重写，根据项目的协议结构解析");
        return null;
    }

    /**
     * 消息封装
     * @param msg
     */
    public encode(msgID: number, msg: any): any {
        // Log.log("encode需要子类重写，根据项目的协议结构解析");
        return null;
    }
}