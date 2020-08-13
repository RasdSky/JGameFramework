/** 
 *@Author: Ji
 *@Desc: 场景管理 (场景只是一个虚拟概念,其实就是一个空容器，方便管理)
 */
import BaseScene from './BaseScene';
export default class SceneMgr {
    public curScene: BaseScene;
    private static instance:SceneMgr;
    protected constructor() {
    }
    public static get Instance(): SceneMgr {
        return this.instance ? this.instance : this.instance = new SceneMgr();
    }
    /**
    * 切换场景
    * @type type 场景类
    */
    public async changeScene<T extends BaseScene>(Type: (new () => T)) {
        if (this.curScene) {
            this.curScene.onExit();
            this.curScene.destroy(true);
        }
        Laya.Resource.destroyUnusedResources();
        const cur: BaseScene = new Type();
        await cur.preload();
        cur.onEnter();
        this.curScene = cur;
        Laya.stage.addChildAt(cur, 0);
    }
}