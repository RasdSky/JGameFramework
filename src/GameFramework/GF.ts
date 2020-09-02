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
import com from "./Entity/Com";
import entity from "./Entity/Entity";
import input from "./Base/Input";
import commonFunc from "./Util/CommonFunc"
export namespace GF {
    /** 
     * 游戏事件系统，常用的事件都写在这里，对应模块如果有需要可以自己创建
     */
    export const EventSystem = eventSystem;
    export const GameEvent = gameEvent;
    /** 
     * 场景基类
     */
    export const BaseScene = baseScene;
    /** 
     * 场景管理类
     */
    export const SceneMgr = sceneManager;
    /** 
     * 对话框配置信息
     */
    export const DialogSetting = dialogSetting;
    /** 
     * 对话框基类
     */
    export const BaseDialog = baseDialog;
    /**
     * 对话框管理
     */
    export const DialogMgr = dialogMgr;
    /**
     * 资源管理
     */
    export const ResMgr = resourMgr;
    /**
     * 网路模块管理
     */
    export const NetEngine = netEngine;
    /**数据类基类 */
    export const BaseData = baseData;
    /**数据管理 */
    export const DataMgr = dataMgr;
    /**日志 */
    export const Log = log;
    export const Com = com;
    export const Entity = entity;
    /**输入模块 */
    export const Input = input;
    export const CommonFunc = commonFunc;
}