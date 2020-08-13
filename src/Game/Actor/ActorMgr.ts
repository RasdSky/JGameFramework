import Actor from "./Actor";
import { GF } from "../../GameFramework/GF";

export default class EntityMgr {
    private dicActors: Map<number, Actor>;
    private static instance: EntityMgr;
    private constructor() {
        this.dicActors = new Map<number, Actor>();
    }
    public static get Instance(): EntityMgr {
        if (null == this.instance) {
            this.instance = new EntityMgr();
        }
        return this.instance;
    }
    public addActor(id: number, entity: Actor): void {
        if (this.dicActors.has(id)) {
            GF.Log.error("添加重复玩家");
            return;
        }
        this.dicActors.set(id, entity);
    }
    public removeActor(id: number): void {
        const entity: Actor = this.dicActors.get(id);
        if (null == entity) return;
        this.dicActors.delete(id);
        entity.destroy();
    }
    public clear(): void {
        this.dicActors.forEach(element => {
            element.destroy();
        });
        this.dicActors.clear();
    }
}