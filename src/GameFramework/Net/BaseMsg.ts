/*
 * @Author: Ji
 * @Desc: 消息解析基类
 */
export default interface BaseMsg {
    /**
     * 接收消息处理
     * @param msg
     */
    receive(msg): void;
    /**
     * 发送消息处理
     * @param msg
     */
    send(socket: Laya.Socket, msgID: number, msg: any): void;
    /**
     * 消息解析
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msgID: number, msg: any): any
/* eslint-disable semi */
}