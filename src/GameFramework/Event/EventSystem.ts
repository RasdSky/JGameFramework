/*
 * @Author: Ji
 * @Desc: 游戏事件系统，常用的事件都写在这里，对应模块如果有需要可以自己创建
 */
import GameEvent from './GameEvent';
export default class EventSystem {
    //默认事件系统
    public readonly GameEvent: GameEvent = new GameEvent();
    public readonly BattleEvent: GameEvent = new GameEvent();
    private static instance:EventSystem;
    public constructor() {
    }
    public static get Instance(): EventSystem {
        return this.instance ? this.instance : this.instance = new EventSystem();
    }
}