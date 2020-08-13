import { GF } from "../../GameFramework/GF";
import AnimData from "../Config/AnimConfig";
import CommonFunc from "../Util/CommonFunc";

export default class Avatar {
    private animation: Laya.Animation;
    private clip: string;
    private isLoaded: boolean;
    private animData: Map<string, boolean>;
    public constructor() {
        this.animation = new Laya.Animation();
        this.animData = new Map<string, boolean>();
    }
    public get container(): Laya.Animation {
        return this.animation;
    }

    public async changeFeature(featureID: string): Promise<void> {
        this.isLoaded = false;
        await GF.ResMgr.Instance.loadResAsync("res/atlas/sprites/" + featureID + ".atlas");
        const animData: Array<{ clip: string, frames: number, loop: boolean }> = AnimData.animData.get(featureID);
        this.animData.clear();
        animData.forEach((element) => {
            this.animData.set(element.clip, element.loop);
            const urls: Array<string> = [];
            for (let i: number = 0; i < element.frames; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                const str = "sprites/" + featureID + "/" + element.clip + "_" + CommonFunc.prefixInteger(i + 1, 5) + ".png";
                urls.push(str);
            }
            this.animation.loadImages(urls, element.clip);
        });
        this.isLoaded = true;
        if (this.clip != null) {
            this.animation.play(this.animation.index, this.animData.get(this.clip), this.clip);
        }
    }
    public play(clip: string, start: number = 0): void {
        this.clip = clip;
        if (this.isLoaded) {
            this.animation.play(start, this.animData[clip], clip);
        }
    }
    public clear(): void {
        this.animData.clear();
        this.animation.clear();
        this.animation.destroy();
    }
}