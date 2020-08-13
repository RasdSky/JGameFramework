export default abstract class Actor extends Laya.Sprite {
    protected clipName: string;
    public abstract changeFeature(featureID): Promise<void>;
    public play(clipName: string): void {
        this.clipName = clipName;
    }
}