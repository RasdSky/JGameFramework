import Actor from "./Actor";
import Avatar from "./Avatar";
export default class Monster extends Actor {
    private body: Avatar;
    public constructor() {
        super();
        this.body = new Avatar();
        this.addChild(this.body.container);
    }
    public async changeFeature(featureID:string): Promise<void> {
        await this.body.changeFeature(featureID);
    }
    public play(clipName: string): void {
        super.play(clipName);
        this.body.play(this.clipName);
    }
}