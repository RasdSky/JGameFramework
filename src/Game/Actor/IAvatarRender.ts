import { IAvatar } from "./IAvatar";
import { IDispose } from "../../GameFramework/Interface/IDispose";

export interface IAvatarRender extends IAvatar, IDispose {
    renderObject: Laya.Sprite;
}