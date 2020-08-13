(function () {
    'use strict';

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 1136;
    GameConfig.height = 640;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    var EventDispatcher = Laya.EventDispatcher;
    class GameEvent {
        constructor() {
            this.event = new EventDispatcher();
        }
        addListener(type, listener, thisObject) {
            this.event.on(type, thisObject, listener);
        }
        removeListener(type, listener, thisObject) {
            this.event.off(type, thisObject, listener);
        }
        removeAllListener() {
            this.event.offAll();
        }
        dispatch(type, data) {
            this.event.event(type, data);
        }
    }

    class EventSystem {
        constructor() {
            this.GameEvent = new GameEvent();
            this.BattleEvent = new GameEvent();
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new EventSystem();
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var Sprite = Laya.Sprite;
    class BaseScene extends Sprite {
        constructor() {
            super();
            this.layers = [];
            this.resGroup = [];
        }
        onEnter() {
        }
        preload() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        onExit() {
            this.resGroup.forEach(element => {
            });
        }
    }

    class SceneMgr {
        constructor() {
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new SceneMgr();
        }
        changeScene(Type) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.curScene) {
                    this.curScene.onExit();
                    this.curScene.destroy(true);
                }
                Laya.Resource.destroyUnusedResources();
                const cur = new Type();
                yield cur.preload();
                cur.onEnter();
                this.curScene = cur;
                Laya.stage.addChildAt(cur, 0);
            });
        }
    }

    class Log {
        static info(msg) {
            console.log("%c info   :  " + msg, "color:blue");
        }
        static warning(msg) {
            console.log("%c warning:  " + msg, "color:yellow");
        }
        static todo(msg) {
            console.log("%c todo   :  " + msg, "color:green");
        }
        static error(msg) {
            console.log("%c error  :  " + msg, "color:red");
        }
    }
    Log.showLog = true;

    class DialogMgr {
        constructor() {
            this.dicDlgSettings = new Map();
            this.dicDialog = new Map();
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new DialogMgr();
        }
        showDialog(dlgName) {
            const dlgSetting = this.dicDlgSettings.get(dlgName);
            const DlgCls = dlgSetting.dlgCls;
            let dlg = this.getDlg(dlgName);
            if (null == dlg) {
                dlg = new DlgCls();
                this.cacheDlg(dlgName, dlg);
                fgui.UIPackage.loadPackage(dlgSetting.packageAddress, Laya.Handler.create(this, () => {
                    const root = fgui.UIPackage.createObject(dlgSetting.packageName, dlgSetting.dlgComName).asCom;
                    root._container.name = dlgName;
                    root.sortingOrder = dlgSetting.layer;
                    root.makeFullScreen();
                    fgui.GRoot.inst.addChild(root);
                    dlg.root = root;
                    dlg.root.visible = true;
                    dlg.setting = dlgSetting;
                    dlg.onInit.apply(dlg);
                    dlg.isInit = true;
                    dlg.onResume.apply(dlg);
                }));
            }
            if (dlg.isInit) {
                dlg.root.makeFullScreen();
                dlg.root.visible = true;
                dlg.onResume.apply(dlg);
            }
        }
        hideDialog(dlgName) {
            Log.todo("异步处理，对话框加载是异步的所以这里要处理");
            const dlg = this.getDlg(dlgName);
            if (null == dlg)
                return;
            dlg.onPause.apply(dlg);
            dlg.root.visible = false;
            fgui.GRoot.inst.removeChild(dlg.root);
        }
        destroyDialog(dlgName) {
            const dlgSetting = this.dicDlgSettings.get(dlgName);
            const dlg = this.getDlg(dlgName);
            if (null == dlg)
                return;
            this.hideDialog(dlgName);
            fgui.UIPackage.removePackage(dlgSetting.packageName);
            this.dicDialog.delete(dlgName);
            dlg.onDestroy.apply(dlg);
            dlg.root.dispose();
            dlg.root = null;
        }
        getDlg(dlgName) {
            return this.dicDialog.get(dlgName);
        }
        registerUI(dlgName, dlgSetting) {
            this.dicDlgSettings.set(dlgName, dlgSetting);
        }
        cacheDlg(dlgName, dlg) {
            this.dicDialog.set(dlgName, dlg);
        }
    }

    class BaseDialog {
        constructor() {
            this.isInit = false;
        }
        onInit() {
            this.isInit = true;
        }
        getControl(controlName) {
            const control = this.root.getChild(controlName);
            return control;
        }
    }

    class DialogSetting {
        constructor(packageAddress, packageName, dlgComName, dlgCls, layer) {
            this.packageAddress = packageAddress;
            this.packageName = packageName;
            this.dlgComName = dlgComName;
            this.dlgCls = dlgCls;
            this.layer = layer;
        }
    }

    class ResMgr {
        constructor() {
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new ResMgr();
        }
        loadRes(address, complete, progress) {
            Laya.loader.load(address, complete, progress);
        }
        loadResAsync(address) {
            return __awaiter(this, void 0, void 0, function* () {
                const loadFunc = new Promise(resolve => {
                    Laya.loader.load(address, Laya.Handler.create(this, (res) => {
                        resolve(res);
                    }));
                });
                return loadFunc;
            });
        }
        loadGroup(group, complete, progress) {
            Laya.loader.load(group, complete, progress);
        }
        loadGroupAsync(group) {
            return __awaiter(this, void 0, void 0, function* () {
                const loadFunc = new Promise(resolve => {
                    Laya.loader.load(group, Laya.Handler.create(this, (res) => {
                        resolve(res);
                    }));
                });
                return loadFunc;
            });
        }
        loadAnimAsync(anim, animAddress) {
            return __awaiter(this, void 0, void 0, function* () {
                const loadFunc = new Promise(resolve => {
                    anim.loadAnimation(animAddress, Laya.Handler.create(this, () => {
                        resolve();
                    }));
                });
            });
        }
        setGroup(address, group) {
            Laya.loader.setGroup(address, group);
        }
        getRes(address) {
            return Laya.loader.getRes(address);
        }
        unloadRes(address) {
            Laya.loader.clearRes(address);
        }
    }

    class ByteArrayMsg {
        constructor(endian, dispatch) {
            this.endian = endian;
            this.dispatch = dispatch;
            this.dispatch.bind(this);
            this.msgBuffer = new Laya.Byte();
        }
        receive(msg) {
            this.msgBuffer.clear();
            this.msgBuffer.writeArrayBuffer(msg);
            this.msgBuffer.pos = 0;
            do {
                const obj = this.decode(this.msgBuffer);
                if (null != obj) {
                    this.dispatch(obj);
                }
                else {
                    break;
                }
            } while (this.msgBuffer.bytesAvailable > 0);
            if (this.msgBuffer.bytesAvailable == 0) {
                this.msgBuffer.clear();
            }
        }
        send(socket, msgID, msg) {
            const obj = this.encode(msgID, msg);
            if (obj) {
                socket.send(obj);
            }
        }
        decode(msg) {
            return null;
        }
        encode(msgID, msg) {
            return null;
        }
    }

    class ProtobufMsg extends ByteArrayMsg {
        constructor(endian, dispatch) {
            super(endian, dispatch);
            this.msgs = {};
        }
        decode(msg) {
            const byteArray = msg;
            const msgID = byteArray.readUint16();
            const len = byteArray.readUint16();
            if (byteArray.bytesAvailable >= len) {
                const msgBytes = byteArray.readArrayBuffer(len);
                const msgParse = this.getMsgType(msgID);
                return msgParse(msgBytes, len);
            }
            return null;
        }
        encode(msgID, msg) {
            const msgBody = new Laya.Byte(msg);
            const sendMsg = new Laya.Byte();
            sendMsg.writeUint16(msgID);
            sendMsg.writeUint16(msgBody.length);
            sendMsg.writeArrayBuffer(msgBody);
            return sendMsg;
        }
        getMsgType(msgID) {
            return this.msgs[msgID];
        }
    }

    class NetEngine {
        constructor() {
            this.NetEvent = new GameEvent();
            this.socket = new Laya.Socket();
            this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
            this.msg = new ProtobufMsg(this.socket.endian, this.dispatchMsg);
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new NetEngine();
        }
        connect(host, port) {
            this.addEvent();
            this.socket.connect(host, port);
        }
        connectByURL(url) {
            this.addEvent();
            this.socket.connectByUrl(url);
        }
        addEvent() {
            this.socket.on(Laya.Event.OPEN, this, this.onOpen);
            this.socket.on(Laya.Event.CLOSE, this, this.onClose);
            this.socket.on(Laya.Event.MESSAGE, this, this.onMessage);
            this.socket.on(Laya.Event.ERROR, this, this.onError);
        }
        onMessage(msg = null) {
            this.msg.receive(msg);
        }
        onClose(event = null) {
            this.NetEvent.dispatch(NetEngine.SOCKET_CLOSE);
        }
        onOpen(event = null) {
        }
        onError(error = null) {
            this.NetEvent.dispatch(NetEngine.SOCKET_ERROR);
        }
        sendMsg(msgID, msg) {
            this.msg.send(this.socket, msgID, msg);
        }
        dispatchMsg(msg) {
            this.NetEvent.dispatch(NetEngine.ON_MESSAGE, msg);
        }
        close() {
            this.socket.close();
            this.socket.cleanSocket();
        }
    }
    NetEngine.SOCKET_ERROR = "SOCKET_ERROR";
    NetEngine.ON_MESSAGE = "ON_MESSAGE";
    NetEngine.SOCKET_CLOSE = "SOCKET_CLOSE";

    class BaseData {
        constructor() {
            this.event = new GameEvent();
        }
    }

    class DataMgr {
        constructor() {
            this.dicDatas = new Map();
        }
        static get Instance() {
            return this.instance ? this.instance : this.instance = new DataMgr();
        }
        getData(Type) {
            if (null == Type)
                return null;
            let data = this.dicDatas.get(Type.name);
            if (data == null) {
                data = new Type();
                this.dicDatas.set(Type.name, data);
            }
            return data;
        }
        clear() {
            this.dicDatas.forEach((value, key) => {
                value.clear();
            });
        }
    }

    var GF;
    (function (GF) {
        class EventSystem$1 extends EventSystem {
        }
        GF.EventSystem = EventSystem$1;
        class GameEvent$1 extends GameEvent {
        }
        GF.GameEvent = GameEvent$1;
        class BaseScene$1 extends BaseScene {
        }
        GF.BaseScene = BaseScene$1;
        class SceneMgr$1 extends SceneMgr {
        }
        GF.SceneMgr = SceneMgr$1;
        class DialogSetting$1 extends DialogSetting {
        }
        GF.DialogSetting = DialogSetting$1;
        class BaseDialog$1 extends BaseDialog {
        }
        GF.BaseDialog = BaseDialog$1;
        class DialogMgr$1 extends DialogMgr {
        }
        GF.DialogMgr = DialogMgr$1;
        class ResMgr$1 extends ResMgr {
        }
        GF.ResMgr = ResMgr$1;
        class NetEngine$1 extends NetEngine {
        }
        GF.NetEngine = NetEngine$1;
        class BaseData$1 extends BaseData {
        }
        GF.BaseData = BaseData$1;
        class DataMgr$1 extends DataMgr {
        }
        GF.DataMgr = DataMgr$1;
        class Log$1 extends Log {
        }
        GF.Log = Log$1;
    })(GF || (GF = {}));

    class Actor extends Laya.Sprite {
        play(clipName) {
            this.clipName = clipName;
        }
    }

    class AnimData {
    }
    AnimData.animData = new Map([
        ["ZS", [{ clip: "attack", frames: 12, loop: false }, { clip: "hold", frames: 10, loop: true }]],
        ["10000", [{ clip: "attack", frames: 12, loop: false }, { clip: "hold", frames: 10, loop: true }]]
    ]);

    class CommonFunc {
        static prefixInteger(num, length) {
            return ("000000" + num).substr(-length);
        }
    }

    class Avatar {
        constructor() {
            this.animation = new Laya.Animation();
            this.animData = new Map();
        }
        get container() {
            return this.animation;
        }
        changeFeature(featureID) {
            return __awaiter(this, void 0, void 0, function* () {
                this.isLoaded = false;
                yield GF.ResMgr.Instance.loadResAsync("res/atlas/sprites/" + featureID + ".atlas");
                const animData = AnimData.animData.get(featureID);
                this.animData.clear();
                animData.forEach((element) => {
                    this.animData.set(element.clip, element.loop);
                    const urls = [];
                    for (let i = 0; i < element.frames; i++) {
                        const str = "sprites/" + featureID + "/" + element.clip + "_" + CommonFunc.prefixInteger(i + 1, 5) + ".png";
                        urls.push(str);
                    }
                    this.animation.loadImages(urls, element.clip);
                });
                this.isLoaded = true;
                if (this.clip != null) {
                    this.animation.play(this.animation.index, this.animData.get(this.clip), this.clip);
                }
            });
        }
        play(clip, start = 0) {
            this.clip = clip;
            if (this.isLoaded) {
                this.animation.play(start, this.animData[clip], clip);
            }
        }
        clear() {
            this.animData.clear();
            this.animation.clear();
            this.animation.destroy();
        }
    }

    class Monster extends Actor {
        constructor() {
            super();
            this.body = new Avatar();
            this.addChild(this.body.container);
        }
        changeFeature(featureID) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.body.changeFeature(featureID);
            });
        }
        play(clipName) {
            super.play(clipName);
            this.body.play(this.clipName);
        }
    }

    class LoginScene extends GF.BaseScene {
        onEnter() {
            const _super = Object.create(null, {
                onEnter: { get: () => super.onEnter }
            });
            return __awaiter(this, void 0, void 0, function* () {
                _super.onEnter.call(this);
                GF.DialogMgr.Instance.showDialog("DialogLogin");
                const mon = new Monster();
                mon.pos(300, 300);
                this.addChild(mon);
                mon.changeFeature("10000");
                mon.play("attack");
            });
        }
    }

    var Platform;
    (function (Platform) {
        Platform[Platform["MasterDevelopment"] = 0] = "MasterDevelopment";
        Platform[Platform["MasterRelease"] = 1] = "MasterRelease";
    })(Platform || (Platform = {}));

    class InnerScene extends GF.BaseScene {
        onEnter() {
            const _super = Object.create(null, {
                onEnter: { get: () => super.onEnter }
            });
            return __awaiter(this, void 0, void 0, function* () {
                _super.onEnter.call(this);
                GF.DialogMgr.Instance.showDialog("DialogInnerCity");
            });
        }
    }

    class DialogLogin extends GF.BaseDialog {
        onInit() {
            super.onInit();
            this.btnConfirm = this.getControl("btnLogin");
            this.btnConfirm.onClick(this, () => {
                GF.DialogMgr.Instance.destroyDialog(this.setting.dlgComName);
                GF.SceneMgr.Instance.changeScene(InnerScene);
            });
        }
        onResume() { }
        onPause() { }
        onDestroy() { }
    }

    class DialogInnerCity extends GF.BaseDialog {
        onInit() {
            super.onInit();
            this.btnFight = this.getControl("btnFight");
            this.btnFight.onClick(this, () => {
                GF.DialogMgr.Instance.destroyDialog(this.setting.dlgComName);
                GF.SceneMgr.Instance.changeScene(LoginScene);
            });
        }
        onResume() {
        }
        onPause() { }
        onDestroy() { }
    }

    class Game {
        static init() {
            Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;
            this.targetPlatform = Platform.MasterDevelopment;
            if (this.targetPlatform == Platform.MasterDevelopment) {
                GF.Log.showLog = true;
            }
            else if (this.targetPlatform == Platform.MasterRelease) {
                GF.Log.showLog = false;
                Laya.URL.basePath = "http://172.16.0.82:8080/laya/";
                Laya.MiniAdpter.nativefiles = [];
            }
            this.registerUI();
        }
        static start() {
            fgui.GRoot.inst.displayObject.name = "UI";
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            GF.SceneMgr.Instance.changeScene(LoginScene);
        }
        static registerUI() {
            GF.DialogMgr.Instance.registerUI("DialogLogin", new GF.DialogSetting("res/ui/Login", "Login", "DialogLogin", DialogLogin, 8));
            GF.DialogMgr.Instance.registerUI("DialogInnerCity", new GF.DialogSetting("res/ui/InnerCity", "InnerCity", "DialogInnerCity", DialogInnerCity, 10));
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Game.init();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Game.start();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
