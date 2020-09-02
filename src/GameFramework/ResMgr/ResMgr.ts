import Log from "../Log/Log";

/*
 * @Author: Ji
 * @Desc: 资源加载,所有资源加载都是异步
 *  要得到散图直接写相对于Assets路径 "sprites/10000/attack_00001.png" ，加载图集要写图集路径"res/atlas/sprites/10000.atlas"
 */
export default class ResMgr {
    private static instance: ResMgr;
    protected constructor() {
    }
    public static get Instance(): ResMgr {
        return this.instance ? this.instance : this.instance = new ResMgr();
    }
    public loadRes(address: string, complete?: laya.utils.Handler | null, progress?: laya.utils.Handler | null): void {
        Laya.loader.load(address, complete, progress);
    }
    /**
     * await方式加载资源，方便写逻辑
     * @param address 
     */
    public async loadResAsync(address: string): Promise<any> {
        const loadFunc = new Promise<any>(resolve => {
            Laya.loader.load(address, Laya.Handler.create(this, (res) => {
                resolve(res);
            }));
        });
        return loadFunc;
    }
    public loadGroup(group: string[], complete?: laya.utils.Handler | null, progress?: laya.utils.Handler | null): void {
        Laya.loader.load(group, complete, progress);
    }
    public async loadGroupAsync(group: string[]): Promise<boolean> {
        const loadFunc = new Promise<boolean>(resolve => {
            Laya.loader.load(group, Laya.Handler.create(this, (res) => {
                resolve(res);
            }));
        });
        return loadFunc;
    }
    public async loadAnimAsync(anim: Laya.Animation, animAddress: string): Promise<void> {
        const loadFunc = new Promise<boolean>(resolve => {
            anim.loadAnimation(animAddress, Laya.Handler.create(this, () => {
                resolve();
            }));
        });
    }
    public setGroup(address: string, group: string) {
        Laya.loader.setGroup(address, group);
    }
    public getRes(address: string): any {
        return Laya.loader.getRes(address);
    }
    public clearTextureRes(address: string) {
        Laya.loader.clearTextureRes(address);
    }
    public unloadRes(address: string) {
        Laya.loader.clearRes(address);
    }
}