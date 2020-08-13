/** 
 *@Author: Ji
 *@Desc: 数据管理,数据只能从这里取 
 */
import BaseData from './BaseData';

export default class DataMgr {
    private static instance;
    private dicDatas: Map<string, BaseData>;
    protected constructor() {
        this.dicDatas = new Map<string, BaseData>();
    }
    public static get Instance(): DataMgr {
        return this.instance ? this.instance : this.instance = new DataMgr();
    }
    /**
     * 获取数据对象
     * @param Type Class:BaseData
     */
    public getData<T extends BaseData>(Type: (new () => T)): T {
        if (null == Type) return null;
        let data = this.dicDatas.get(Type.name);
        if (data == null) {
            data = new Type();
            this.dicDatas.set(Type.name, data);
        }
        return data as T;
    }
    /**
     * 清理数据,对应数据需要实现自己的clear
     */
    public clear(): void {
        this.dicDatas.forEach((value, key) => {
            value.clear();
        });
    }
}