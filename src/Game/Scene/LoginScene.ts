import { GF } from '../../GameFramework/GF';
import Monster from '../Actor/Monster';
export default class LoginScene extends GF.BaseScene {
    public async onEnter(): Promise<void> {
        super.onEnter();
        GF.DialogMgr.Instance.showDialog("DialogLogin");
        const mon: Monster = new Monster();
        mon.pos(300, 300);
        this.addChild(mon);
        mon.changeFeature("10000");
        mon.play("attack");
    }
}