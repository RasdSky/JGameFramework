/** 
 *@Author: Ji
 *@Desc: 对话框管理,外部只能打开关闭销毁对话框，不能获得对话框实例，对话框之间通过消息系统通信 
 */
import DialogSetting from './DialogSetting';
import BaseDialog from './BaseDialog';
import Log from '../Log/Log';
export default class DialogMgr {
    private dicDlgSettings: Map<string, DialogSetting>;
    private dicDialog: Map<string, BaseDialog>;
    private static instance;
    protected constructor() {
        this.dicDlgSettings = new Map<string, DialogSetting>();
        this.dicDialog = new Map<string, BaseDialog>();
    }
    public static get Instance(): DialogMgr {
        return this.instance ? this.instance : this.instance = new DialogMgr();
    }
    /**
     * 显示对话框
     * @type dlgSetting 对话框配置
     */
    public showDialog(dlgName: string):void {
        const dlgSetting = this.dicDlgSettings.get(dlgName);
        const DlgCls = dlgSetting.dlgCls;
        let dlg: BaseDialog = this.getDlg(dlgName);
        if (null == dlg) {
            dlg = new DlgCls();
            this.cacheDlg(dlgName, dlg);
            fgui.UIPackage.loadPackage(dlgSetting.packageAddress, Laya.Handler.create(this, () => {
                const root = fgui.UIPackage.createObject(dlgSetting.packageName, dlgSetting.dlgComName).asCom;
                /* eslint-disable no-underscore-dangle*/
                root._container.name = dlgName;
                root.sortingOrder = dlgSetting.layer;
                root.makeFullScreen();
                fgui.GRoot.inst.addChild(root);
                dlg.root = root;
                dlg.root.visible = true;
                dlg.setting = dlgSetting;
                dlg.onInit.apply(dlg);
                dlg.isInit = true;
                dlg.onResume.apply(dlg);
            }));
        }
        if (dlg.isInit) {
            dlg.root.makeFullScreen();
            dlg.root.visible = true;
            dlg.onResume.apply(dlg);
        }
    }
    public hideDialog(dlgName: string):void {
        Log.todo("异步处理，对话框加载是异步的所以这里要处理");
        const dlg: BaseDialog = this.getDlg(dlgName);
        if (null == dlg) return;
        dlg.onPause.apply(dlg);
        dlg.root.visible = false;
        fgui.GRoot.inst.removeChild(dlg.root);
    }
    public destroyDialog(dlgName: string):void{
        const dlgSetting = this.dicDlgSettings.get(dlgName);
        const dlg: BaseDialog = this.getDlg(dlgName);
        if (null == dlg) return;
        //先关闭再销毁
        this.hideDialog(dlgName);
        fgui.UIPackage.removePackage(dlgSetting.packageName);
        this.dicDialog.delete(dlgName);
        dlg.onDestroy.apply(dlg);
        dlg.root.dispose();
        dlg.root = null;   
    }
    private getDlg(dlgName: string): BaseDialog {
        return this.dicDialog.get(dlgName);
    }
    /**
     * 注册对话框配置信息
     * @param dlgName 对话框名称
     * @param dlgSetting  对话框设置
     */
    public registerUI(dlgName: string, dlgSetting: DialogSetting):void{
        this.dicDlgSettings.set(dlgName, dlgSetting);
    }
    private cacheDlg(dlgName: string, dlg: BaseDialog):void {
        this.dicDialog.set(dlgName, dlg);
    }
}