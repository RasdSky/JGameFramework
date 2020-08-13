import InnerScene from '../Scene/InnerScene';
import { GF } from '../../GameFramework/GF';
export default class DialogLogin extends GF.BaseDialog {
    private btnConfirm: fgui.GButton;
    private listServer: fgui.GList;
    public onInit(): void {
        super.onInit();
        this.btnConfirm = this.getControl<fgui.GButton>("btnLogin");
        this.btnConfirm.onClick(this, () => {
            GF.DialogMgr.Instance.destroyDialog(this.setting.dlgComName);
            GF.SceneMgr.Instance.changeScene(InnerScene);
        });
        // this.listServer = this.getControl<fgui.GList>("n9");
        // this.listServer.removeChildrenToPool();
        // this.listServer.on(fgui.Events.CLICK_ITEM, this, (item: fgui.GObject) => {
        //     GF.Log.error(item.asCom.getChild("n0").text);
        // });
        // for (let index = 0; index < 10; index++) {
        //     const com: fgui.GComponent = this.listServer.addItemFromPool().asCom;
        //     const lab: fgui.GLabel = com.getChild("n0").asLabel;
        //     lab.text = index.toString();
        // }
    }
    public onResume(): void { }
    public onPause(): void { }
    public onDestroy(): void { }
}