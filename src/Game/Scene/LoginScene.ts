import { GF } from '../../GameFramework/GF';
import Entity from '../../GameFramework/Entity/Entity';
import EntityFactroy from '../Actor/EntityFactroy';
import MonsterRender from '../Actor/MonsterRender';
import ResMgr from '../../GameFramework/ResMgr/ResMgr';
export default class LoginScene extends GF.BaseScene {
    private mon: Entity;
    public async onEnter(): Promise<void> {
        super.onEnter();
        GF.DialogMgr.Instance.showDialog("DialogLogin");
        // let tex = await ResMgr.Instance.loadResAsync("sprites/10000/attack_00001.png");
        // for (let index = 0; index < 100000; index++) {
        //     let sprite = new Laya.Sprite();
        //     sprite.pivot(320, 240);
        //     sprite.graphics.drawTexture(tex);
        //     // sprite.loadImage("sprites/10000/attack_00001.png");
        //     this.addChild(sprite);
        //     sprite.pos(Math.random() * 1136, Math.random() * 640);
        // }

        // sprite.visible = false;
        // sprite.texture.destroy();
        // sprite.destroy();

        this.mon = EntityFactroy.createMonster();
        const bodyRender = this.mon.getCom(MonsterRender);
        bodyRender.changeFeature("10000");
        bodyRender.play("attack");
        this.addChild(this.mon.gameObject);
        this.mon.setPosition(300, 300);
    }
    public onExit(): void {
        this.mon.destroy();
    }
}