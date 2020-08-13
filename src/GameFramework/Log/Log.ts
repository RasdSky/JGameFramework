export default class Log {
    public static showLog: boolean = true;
    /**输出普通日志 */
    public static info(msg: any): void {
        /* eslint-disable no-console */
        console.log("%c info   :  " + msg, "color:blue");
    }
    /**输出警告 */
    public static warning(msg: any): void {
        /* eslint-disable no-console */
        console.log("%c warning:  " + msg, "color:yellow");
    }
    /**输出todo */
    public static todo(msg: any): void {
        /* eslint-disable no-console */
        console.log("%c todo   :  " + msg, "color:green");
    }
    /**输出错误 */
    public static error(msg: any): void {
        /* eslint-disable no-console */
        console.log("%c error  :  " + msg, "color:red");
    }
}