if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MusicInfoComponent_Params {
    currentTabIndex?: number;
    currentBreakpoint?: string;
    isFoldFull?: boolean;
    songList?: SongItem[];
    selectIndex?: number;
    isShowControl?: boolean;
}
import { BreakpointConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import type { SongItem } from '@ohos/mediaCommon';
import { PlayerConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/PlayerConstants";
import { ControlAreaComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/ControlAreaComponent";
export class MusicInfoComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentTabIndex = new ObservedPropertySimplePU(0, this, "currentTabIndex");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__isFoldFull = this.createStorageLink('isFoldFull', false, "isFoldFull");
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__isShowControl = new ObservedPropertySimplePU(false, this, "isShowControl");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MusicInfoComponent_Params) {
        if (params.currentTabIndex !== undefined) {
            this.currentTabIndex = params.currentTabIndex;
        }
        if (params.isShowControl !== undefined) {
            this.isShowControl = params.isShowControl;
        }
    }
    updateStateVars(params: MusicInfoComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentTabIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isFoldFull.purgeDependencyOnElmtId(rmElmtId);
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
        this.__selectIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowControl.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentTabIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isFoldFull.aboutToBeDeleted();
        this.__songList.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
        this.__isShowControl.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentTabIndex: ObservedPropertySimplePU<number>;
    get currentTabIndex() {
        return this.__currentTabIndex.get();
    }
    set currentTabIndex(newValue: number) {
        this.__currentTabIndex.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isFoldFull: ObservedPropertyAbstractPU<boolean>;
    get isFoldFull() {
        return this.__isFoldFull.get();
    }
    set isFoldFull(newValue: boolean) {
        this.__isFoldFull.set(newValue);
    }
    private __songList: ObservedPropertyAbstractPU<SongItem[]>;
    get songList() {
        return this.__songList.get();
    }
    set songList(newValue: SongItem[]) {
        this.__songList.set(newValue);
    }
    private __selectIndex: ObservedPropertyAbstractPU<number>;
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue: number) {
        this.__selectIndex.set(newValue);
    }
    private __isShowControl: ObservedPropertySimplePU<boolean>;
    get isShowControl() {
        return this.__isShowControl.get();
    }
    set isShowControl(newValue: boolean) {
        this.__isShowControl.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    xs: BreakpointConstants.COLUMN_SM,
                    sm: BreakpointConstants.COLUMN_SM,
                    md: BreakpointConstants.COLUMN_MD
                },
                gutter: BreakpointConstants.GUTTER_MUSIC_X,
                breakpoints: { reference: BreakpointsReference.ComponentSize }
            });
            GridRow.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(32:5)", "@ohos/musiclist");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    xs: BreakpointConstants.SPAN_SM,
                    sm: BreakpointConstants.SPAN_SM,
                    md: BreakpointConstants.SPAN_MD
                },
                offset: { md: BreakpointConstants.OFFSET_MD }
            });
            GridCol.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(41:7)", "@ohos/musiclist");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(49:9)", "@ohos/musiclist");
            Column.height(StyleConstants.FULL_HEIGHT);
            Column.width(StyleConstants.FULL_HEIGHT);
            Column.clip(false);
        }, Column);
        this.CoverInfo.bind(this)();
        this.MusicInfo.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(52:11)", "@ohos/musiclist");
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ControlAreaComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicInfoComponent.ets", line: 53, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ControlAreaComponent" });
        }
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    CoverInfo(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(64:5)", "@ohos/musiclist");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.songList[this.selectIndex].label);
            Image.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(65:7)", "@ohos/musiclist");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 100663546, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.shadow({
                radius: { "id": 100663632, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                color: { "id": 100663499, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                offsetX: 0,
                offsetY: 8
            });
            Image.margin({ "id": 100663599, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    MusicInfo(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(81:5)", "@ohos/musiclist");
            Column.margin({ top: { "id": 100663608, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
            Flex.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(82:7)", "@ohos/musiclist");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].title);
            Text.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(83:9)", "@ohos/musiclist");
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD && !this.isFoldFull ? { "id": 100663659, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663658, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.opacity(0.86);
            Text.fontWeight(FontWeight.Bold);
            Text.fontFamily(PlayerConstants.FONT_FAMILY_BOLD);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663678, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(90:9)", "@ohos/musiclist");
            Image.width({ "id": 100663580, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663580, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.fillColor(Color.White);
            Image.opacity(0.86);
        }, Image);
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].singer);
            Text.debugLine("features/musicList/src/main/ets/components/MusicInfoComponent.ets(98:7)", "@ohos/musiclist");
            Text.textAlign(TextAlign.Start);
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD && !this.isFoldFull ? { "id": 100663658, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663550, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663496, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontFamily(PlayerConstants.FONT_FAMILY_BLACK);
            Text.margin({ top: { "id": 100663609, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.fontWeight(FontWeight.Regular);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "MusicInfoComponent", new MusicInfoComponent(undefined, {}));
    previewComponent();
}
else {
}
