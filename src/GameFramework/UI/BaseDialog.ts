/** 
 *@Author: Ji
 *@Desc: 对话框基类 
 */
import DialogSetting from './DialogSetting';
export default abstract class BaseDialog {
    public isInit: boolean = false;
    public root: fairygui.GComponent;
    public setting: DialogSetting;
    public onInit(): void {
        this.isInit = true;
    }
    /**
     * 获取一个控件
     * @param controlName:string 控件名称
     */
    public getControl<T extends fgui.GObject>(controlName: string): T {
        const control = this.root.getChild(controlName) as T;
        return control;
    }
    /**
     * 对话框从隐藏到出现时候调用，所有操作应该在这个函数之后
     */
    public abstract onResume(): void;
    /**
     * 对话框从出现到隐藏时候调用
     */
    public abstract onPause(): void;
    /**
     * 对话框销毁时候调用
     */
    public abstract onDestroy(): void;
}