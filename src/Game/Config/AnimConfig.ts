/**动画信息配置，玩家只配置通用模板,其他的每个id都要单独配置 */
export default class AnimData {
    public static readonly animData: Map<string, Array<{ clip: string, frames: number, loop: boolean }>> = new Map([
        ["ZS", [{ clip: "attack", frames: 12, loop: false }, { clip: "hold", frames: 10, loop: true }]],
        ["10000", [{ clip: "attack", frames: 12, loop: false }, { clip: "hold", frames: 10, loop: true }]]
    ]);
}