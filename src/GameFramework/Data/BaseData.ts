/** 
 *@Author: Ji
 *@Desc: 数据类基类 
 */
import GameEvent from '../Event/GameEvent';
export default abstract class BaseData {
    /**用来注册数据监听 */
    public event: GameEvent = new GameEvent();
    /**
     * 清理数据
     */
    public abstract clear():void;
}