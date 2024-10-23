if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PlayList_Params {
    currentBreakpoint?: string;
    songList?: SongItem[];
    isShowPlay?: boolean;
}
import { BreakpointConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { MediaService, BreakpointType } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import type { SongItem } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import { SongDataSource } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/viewmodel/SongDataSource";
import { ContentConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/ContentConstants";
export class PlayList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.__isShowPlay = this.createStorageLink('isShowPlay', false, "isShowPlay");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PlayList_Params) {
    }
    updateStateVars(params: PlayList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowPlay.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__songList.aboutToBeDeleted();
        this.__isShowPlay.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: SynchedPropertySimpleTwoWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __songList: ObservedPropertyAbstractPU<SongItem[]>;
    get songList() {
        return this.__songList.get();
    }
    set songList(newValue: SongItem[]) {
        this.__songList.set(newValue);
    }
    private __isShowPlay: ObservedPropertyAbstractPU<boolean>;
    get isShowPlay() {
        return this.__isShowPlay.get();
    }
    set isShowPlay(newValue: boolean) {
        this.__isShowPlay.set(newValue);
    }
    PlayAll(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/PlayList.ets(29:5)", "@ohos/musiclist");
            Row.height({ "id": 100663619, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.backgroundColor(Color.White);
            Row.padding({
                left: { "id": 100663620, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663620, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Row.borderRadius({
                topRight: { "id": 100663621, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                topLeft: { "id": 100663621, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Row.position({
                x: 0,
                y: 0
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663472, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/PlayList.ets(30:7)", "@ohos/musiclist");
            Image.height({ "id": 100663622, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663622, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663462, "type": 10003, params: [this.songList.length], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/musicList/src/main/ets/components/PlayList.ets(33:7)", "@ohos/musiclist");
            Text.maxLines(ContentConstants.PLAY_ALL_MAX_LINES);
            Text.padding({ left: { "id": 100663623, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Text.fontColor(Color.Black);
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663626, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663625, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663624, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicList/src/main/ets/components/PlayList.ets(42:7)", "@ohos/musiclist");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663453, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/PlayList.ets(43:7)", "@ohos/musiclist");
            Image.width({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ right: { "id": 100663617, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663681, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/PlayList.ets(47:7)", "@ohos/musiclist");
            Image.height({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    SongItem(item: SongItem, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/PlayList.ets(70:5)", "@ohos/musiclist");
            Row.onClick(() => {
                MediaService.getInstance().loadAssent(index);
                this.isShowPlay = true;
            });
            Row.height({ "id": 100663589, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/PlayList.ets(71:7)", "@ohos/musiclist");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.title);
            Text.debugLine("features/musicList/src/main/ets/components/PlayList.ets(72:9)", "@ohos/musiclist");
            Text.fontColor(Color.Black);
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663572, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663571, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663570, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Text.margin({ bottom: { "id": 100663593, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/PlayList.ets(80:9)", "@ohos/musiclist");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.mark);
            Image.debugLine("features/musicList/src/main/ets/components/PlayList.ets(81:11)", "@ohos/musiclist");
            Image.width({ "id": 100663591, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663591, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ right: { "id": 100663590, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.singer);
            Text.debugLine("features/musicList/src/main/ets/components/PlayList.ets(85:11)", "@ohos/musiclist");
            Text.opacity({ "id": 100663637, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663640, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663639, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663638, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicList/src/main/ets/components/PlayList.ets(97:7)", "@ohos/musiclist");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663470, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/PlayList.ets(98:7)", "@ohos/musiclist");
            Image.height({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663618, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/PlayList.ets(111:5)", "@ohos/musiclist");
            Column.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : { "id": 100663585, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                bottom: { "id": 100663584, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Column);
        this.PlayAll.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/musicList/src/main/ets/components/PlayList.ets(113:7)", "@ohos/musiclist");
            List.width(StyleConstants.FULL_WIDTH);
            List.backgroundColor(Color.White);
            List.margin({ top: { "id": 100663583, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ?
                ContentConstants.COL_TWO : ContentConstants.COL_ONE);
            List.layoutWeight(1);
            List.divider({
                color: { "id": 100663444, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                strokeWidth: { "id": 100663418, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                startMargin: { "id": 100663592, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                endMargin: { "id": 100663592, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, List);
        {
            const __lazyForEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(() => { }, false);
                        ListItem.debugLine("features/musicList/src/main/ets/components/PlayList.ets(115:11)", "@ohos/musiclist");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, ListItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/musicList/src/main/ets/components/PlayList.ets(116:13)", "@ohos/musiclist");
                            Column.padding({
                                left: { "id": 100663592, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                                right: { "id": 100663592, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                            });
                        }, Column);
                        this.SongItem.bind(this)(item, index);
                        Column.pop();
                        ListItem.pop();
                    };
                    observedDeepRender();
                }
            };
            const __lazyForEachItemIdFunc = (item: SongItem, index?: number) => JSON.stringify(item) + index;
            LazyForEach.create("1", this, new SongDataSource(this.songList), __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
