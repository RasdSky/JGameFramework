/*
 * @Author: Ji
 * @Desc: 场景类基类
 */
import Sprite = Laya.Sprite;
export default class BaseScene extends Sprite {
    /**用来存储只有本场景使用的资源 */
    protected resGroup: Array<string>;
    //当前所有Layer
    private layers: Array<Sprite>;
    public constructor() {
        super();
        this.layers = [];
        this.resGroup = [];
    }
    /**
     * 进入场景
     */
    public onEnter(): void {

    }
    /**
     * 预加载资源
     */
    public async preload(): Promise<void> {

    }
    /**
     * 退出场景
     */
    public onExit(): void {
        this.resGroup.forEach(element => {

        });
    }
}