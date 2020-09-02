/** 
 *@Author: Ji 
 *@Desc: 实体类， 不要继承这个类，只能给Entity添加Com
 */
import Com from "./Com";
import Log from "../Log/Log";

export default class Entity {
    private coms: Map<string, Com>;
    public gameObject: Laya.Sprite;
    public constructor() {
        this.gameObject = new Laya.Sprite();
        this.coms = new Map<string, Com>();
    }
    public addCom<T extends Com>(Type: new () => T): T {
        const comName: string = Type.name;
        let com = this.coms.get(comName);
        if (null == com) {
            com = new Type();
            com.entity = this;
            com.onAwake();
            this.coms.set(comName, com);
        } else {
            Log.error("重复添加Com  " + comName);
        }
        return com as T;
    }
    public setPosition(x: number, y?: number): void {
        if (y) {
            this.gameObject.pos(x, y, true);
        } else {
            this.gameObject.x = x;
        }
    }
    public getCom<T extends Com>(Type: new () => T): T {
        return this.coms.get(Type.name) as T;
    }
    public removeCom<T extends Com>(Type: new () => T) {
        this.coms.delete(Type.name);
    }
    public destroy(): void {
        this.coms.forEach((com) => {
            com.onDestroy();
        });
        this.coms.clear();
        this.gameObject.destroy();
    }
}