import { GF } from '../../GameFramework/GF';
import LoginScene from '../Scene/LoginScene';
export default class DialogInnerCity extends GF.BaseDialog {
    private btnFight: fgui.GButton;
    public onInit(): void {
        super.onInit();
        this.btnFight = this.getControl<fgui.GButton>("btnFight");
        this.btnFight.onClick(this, () => {
            GF.DialogMgr.Instance.destroyDialog(this.setting.dlgComName);
            GF.SceneMgr.Instance.changeScene(LoginScene);
        });
    }
    public onResume(): void {
    }
    public onPause(): void { }
    public onDestroy(): void { }
}