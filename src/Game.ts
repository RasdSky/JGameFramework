import { GF } from './GameFramework/GF';
import LoginScene from './Game/Scene/LoginScene';
import { Platform } from './Settings/Platform';
import DialogLogin from './Game/UI/DialogLogin';
import DialogInnerCity from './Game/UI/DialogInnerCity';
export default class Game {
    public static targetPlatform: Platform;
    public static init(): void {
        Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;//Stage.FRAME_FAST,Stage.FRAME_SLOW,Stage.FRAME_MOUSE
        this.targetPlatform = Platform.MasterDevelopment;
        if (this.targetPlatform == Platform.MasterDevelopment) {
            GF.Log.showLog = true;
        } else if (this.targetPlatform == Platform.MasterRelease) {
            GF.Log.showLog = false;
            //这里设置资源服务器地址,回头把资源工程踢出去，资源全部交给策划维护 :)
            Laya.URL.basePath = "http://172.16.0.82:8080/laya/";
            //资源白名单，白名单内的从本地加载
            Laya.MiniAdpter.nativefiles = [
            ];
        }
        this.registerUI();
    }
    public static start(): void {
        fgui.GRoot.inst.displayObject.name = "UI";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        GF.SceneMgr.Instance.changeScene(LoginScene);
        // GF.NetEngine.Instance.connect("172.16.0.82", 8080);
    }
    /**
     * 这里注册UI信息 
     */
    public static registerUI(): void {
        GF.DialogMgr.Instance.registerUI("DialogLogin", new GF.DialogSetting("res/ui/Login", "Login", "DialogLogin", DialogLogin, 8));
        GF.DialogMgr.Instance.registerUI("DialogInnerCity", new GF.DialogSetting("res/ui/InnerCity", "InnerCity", "DialogInnerCity", DialogInnerCity, 10));
    }
}