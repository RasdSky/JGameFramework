import { GF } from "../../GameFramework/GF";
import { IAvatarRender } from "./IAvatarRender";
import { AnimData } from "../Config/AnimConfig";

export default class AnimAvatar implements IAvatarRender {
    private atlasPath: string;
    private animation: Laya.Animation;
    private clip: string;
    private isLoaded: boolean;
    private featureID: string;
    //记录动作是否循环
    private animData: Map<string, boolean>;
    public constructor() {
        this.animation = new Laya.Animation();
        this.animData = new Map<string, boolean>();
    }
    public get renderObject(): Laya.Animation {
        return this.animation;
    }
    public async changeFeature(featureID: string): Promise<void> {
        this.featureID = featureID;
        this.isLoaded = false;
        this.atlasPath = "res/atlas/sprites/" + featureID + ".atlas";
        await GF.ResMgr.Instance.loadResAsync(this.atlasPath);
        const animData: Array<{ clip: string, frames: number, loop: boolean }> = AnimData.get(featureID);
        this.animData.clear();
        animData.forEach((element) => {
            let cachedClipName = featureID + "-" + element.clip;
            this.animData.set(cachedClipName, element.loop);
            const urls: Array<string> = [];
            for (let i: number = 0; i < element.frames; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                const str = "sprites/" + featureID + "/" + element.clip + "_" + GF.CommonFunc.prefixInteger(i + 1, 5) + ".png";
                urls.push(str);
            }
           Laya.Animation.createFrames(urls, cachedClipName);
        });
        this.isLoaded = true;
        if (this.clip != null) {
            this.animation.play(this.animation.index, this.animData.get(this.clip), this.clip);
        }
    }
    public play(clip: string, start: number = 0): void {
        this.clip = this.getCacheClipName(clip);
        if (this.isLoaded) {
            this.animation.play(start, this.animData[this.clip], this.clip);
        }
    }
    private getCacheClipName(clip: string): string {
        return this.featureID + "-" + clip;
    }
    public dispose(): void {
        this.animData.forEach((v, k) => {
            Laya.Animation.clearCache(k);
        });
        this.animData.clear();
        this.animation.clear();
        this.animation.destroy();
        GF.ResMgr.Instance.unloadRes(this.atlasPath);
    }
}