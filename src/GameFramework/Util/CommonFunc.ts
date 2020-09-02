export default class CommonFunc {
    /**
     * 数字左边补零成需要的位数,最多补6个0
     * @param num 需要处理数字
     * @param length 输出的字符串长度
     */
    public static prefixInteger(num: number, length: number) {
        return ("000000" + num).substr(-length);
    }
    /**
     * 延迟几帧调用
     * @param delay 延迟的帧数
     * @param caller 
     */
    public static async frameOnceAsync(delay: number, caller: any): Promise<void> {
        return new Promise(resolve => {
            Laya.timer.frameOnce(delay, caller, () => {
                resolve();
            });
        })
    }
}