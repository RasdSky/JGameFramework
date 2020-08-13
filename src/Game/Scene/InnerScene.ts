import { GF } from '../../GameFramework/GF';
export default class InnerScene extends GF.BaseScene {
    public async onEnter():Promise<void> {
        super.onEnter();
        GF.DialogMgr.Instance.showDialog("DialogInnerCity");
    }
}