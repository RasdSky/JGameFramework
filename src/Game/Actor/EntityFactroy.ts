import Entity from "../../GameFramework/Entity/Entity";
import MonsterCom from "./MonsterCom";
import MonsterRender from "./MonsterRender";
import MoveCom from "./MoveCom";

export default class EntityFactroy {
    public static createMonster(): Entity {
        const en = new Entity();
        en.addCom(MonsterRender);
        en.addCom(MonsterCom);
        en.addCom(MoveCom);
        return en;
    }
}