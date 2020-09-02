import { GF } from "../../GameFramework/GF";
import DialogLogin from "./DialogLogin";
import DialogInnerCity from "./DialogInnerCity";

export default class UICfg {
    public static registerUI(): void {
        GF.DialogMgr.Instance.registerUI("DialogLogin", new GF.DialogSetting("res/ui/Login", "Login", "DialogLogin", DialogLogin, 8));
        GF.DialogMgr.Instance.registerUI("DialogInnerCity", new GF.DialogSetting("res/ui/InnerCity", "InnerCity", "DialogInnerCity", DialogInnerCity, 10));
    }
}