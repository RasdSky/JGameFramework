/** 
 *@Author: Ji
 *@Desc: 对话框配置 
 */
export default class DialogSetting {
    public packageAddress: string;
    /**
     * 这里强制只支持一个package，如果有公用资源必须放到Common包中
     */
    public packageName: string;
    /**
     * 对话框component名称
     */
    public dlgComName: string;
    /**
     * 对话框类
     */
    public dlgCls: any;
    /**
     * 层级
     */
    public layer: number;
    public constructor(packageAddress: string, packageName: string, dlgComName: string, dlgCls: any, layer: number) {
        this.packageAddress = packageAddress;
        this.packageName = packageName;
        this.dlgComName = dlgComName;
        this.dlgCls = dlgCls;
        this.layer = layer;
    }
}