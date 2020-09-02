import { GF } from "../../GameFramework/GF";

export default class MoveCom extends GF.Com {
    public onAwake(): void {
        Laya.timer.frameLoop(1, this, this.update);
    }
    private update(): void {
        if (GF.Input.getKeyDown(Laya.Keyboard.W)) {
            this.entity.gameObject.y -= 1;
        }
        if (GF.Input.getKeyDown(Laya.Keyboard.S)) {
            this.entity.gameObject.y += 1;
        }
        if (GF.Input.getKeyDown(Laya.Keyboard.D)) {
            this.entity.gameObject.x += 1;
        }
        if (GF.Input.getKeyDown(Laya.Keyboard.A)) {
            this.entity.gameObject.x -= 1;
        }
    }
    public onDestroy(): void {
        Laya.timer.clear(this, this.update);
    }
}