/*
 * @Author: jyj
 * @Desc: 方便游戏中调用，这里做一个文件集中namespace，使用时只要引入GF(import { GF } from "../../GF";)就可以了
 * 只能外部引用GF，GF不能引用外部，内部也不能引用GF（防止circle import）!!!!!!!!!!!!!!!!!!!!!! 
 */
import eventSystem from './Event/EventSystem';
import gameEvent from './Event/GameEvent';
import baseScene from './SceneMgr/BaseScene';
import sceneManager from './SceneMgr/SceneMgr';
import dialogMgr from './UI/DialogMgr';
import baseDialog from './UI/BaseDialog';
import dialogSetting from './UI/DialogSetting';
import resourMgr from './ResMgr/ResMgr';
import netEngine from './Net/NetEngine';
import baseData from './Data/BaseData';
import dataMgr from './Data/DataMgr';
import log from "./Log/Log";
export namespace GF {
    /** 
     * 游戏事件系统，常用的事件都写在这里，对应模块如果有需要可以自己创建
     */
    export class EventSystem extends eventSystem { }
    export class GameEvent extends gameEvent { }
    /** 
     * 场景基类
     */
    export class BaseScene extends baseScene { }
    /** 
     * 场景管理类
     */
    export class SceneMgr extends sceneManager { }
    /** 
     * 对话框配置信息
     */
    export class DialogSetting extends dialogSetting { }
    /** 
     * 对话框基类
     */
    export abstract class BaseDialog extends baseDialog { }
    /**
     * 对话框管理
     */
    export class DialogMgr extends dialogMgr { }
    /**
     * 资源管理
     */
    export class ResMgr extends resourMgr { }
    /**
     * 网路模块管理
     */
    export class NetEngine extends netEngine { }
    /**数据类基类 */
    export abstract class BaseData extends baseData { }
    /**数据管理 */
    export class DataMgr extends dataMgr { }
    /**日志 */
    export class Log extends log { }

}