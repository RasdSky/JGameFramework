import { GF } from "../../GameFramework/GF";
import { IAvatarRender } from "./IAvatarRender";
import AnimAvatar from "./AnimAvatar";
import { IAvatar } from "./IAvatar";

export default class MonsterRender extends GF.Com implements IAvatar {
    public bodyRender: IAvatarRender;
    public onAwake() {
        this.bodyRender = new AnimAvatar();
        this.entity.gameObject.addChild(this.bodyRender.renderObject);
    }
    public async changeFeature(featureID: string): Promise<void> {
        return this.bodyRender.changeFeature(featureID);
    }
    public play(clip: string, start: number = 0): void {
        this.bodyRender.play(clip, start);
    }
    public onDestroy(): void {
        this.bodyRender.dispose();
    }
}