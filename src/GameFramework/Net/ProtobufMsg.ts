/*
 * @Author: Ji
 * @Desc: 基于Protobuf的消息处理
 */
import ByteArrayMsg from './ByteArrayMsg';
export default class ProtobufMsg extends ByteArrayMsg {
    protected msgs: any;
    public constructor(endian: string, dispatch: Function) {
        super(endian, dispatch);
        this.msgs = {};
    }
    public decode(msg: any): any {
        const byteArray = <Laya.Byte>msg;
        const msgID = byteArray.readUint16();
        const len = byteArray.readUint16();
        if (byteArray.bytesAvailable >= len) {
            const msgBytes = byteArray.readArrayBuffer(len);
            const msgParse = this.getMsgType(msgID);
            return msgParse(msgBytes, len);
        }
        return null;
    }
    public encode(msgID: number, msg: any): any {
        const msgBody = new Laya.Byte(msg);
        const sendMsg: Laya.Byte = new Laya.Byte();
        sendMsg.writeUint16(msgID);
        sendMsg.writeUint16(msgBody.length);
        sendMsg.writeArrayBuffer(msgBody);
        return sendMsg;
    }
    protected getMsgType(msgID: number) {
        return this.msgs[msgID];
    }
}