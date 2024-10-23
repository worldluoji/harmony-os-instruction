if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MusicControlComponent_Params {
    currentBreakpoint?: string;
    songList?: SongItem[];
    selectIndex?: number;
    imageColor?: string;
    topArea?: number;
    bottomArea?: number;
    imageLabel?: PixelMap | Resource;
    isShowControl?: boolean;
    isShowControlLg?: boolean;
    isTablet?: boolean;
    isTabletFalse?: boolean;
    pageShowTime?: number;
    intervalID?: number;
    isShowPlay?: boolean;
    isFoldFull?: boolean;
    context?: common.UIAbilityContext | undefined;
    callback?: Callback<display.FoldDisplayMode>;
}
import display from "@ohos:display";
import image from "@ohos:multimedia.image";
import effectKit from "@ohos:effectKit";
import type common from "@ohos:app.ability.common";
import type { BusinessError, Callback } from "@ohos:base";
import { BreakpointConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { ColorConversion, Logger } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import type { SongItem } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import { LyricsComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/LyricsComponent";
import { MusicInfoComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/MusicInfoComponent";
import { ControlAreaComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/ControlAreaComponent";
import { TopAreaComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/TopAreaComponent";
import { PlayerConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/PlayerConstants";
export class MusicControlComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__imageColor = this.createStorageLink('imageColor', 'rgba(0, 0, 2, 1.00)', "imageColor");
        this.__topArea = this.createStorageLink('topArea', 0, "topArea");
        this.__bottomArea = this.createStorageLink('bottomArea', 0, "bottomArea");
        this.__imageLabel = new ObservedPropertyObjectPU(this.songList[this.selectIndex].label, this, "imageLabel");
        this.__isShowControl = new ObservedPropertySimplePU(true, this, "isShowControl");
        this.__isShowControlLg = new ObservedPropertySimplePU(false, this, "isShowControlLg");
        this.__isTablet = new ObservedPropertySimplePU(true, this, "isTablet");
        this.__isTabletFalse = new ObservedPropertySimplePU(false, this, "isTabletFalse");
        this.__pageShowTime = this.createStorageLink('pageShowTime', 0, "pageShowTime");
        this.__intervalID = new ObservedPropertySimplePU(0, this, "intervalID");
        this.__isShowPlay = new SynchedPropertySimpleTwoWayPU(params.isShowPlay, this, "isShowPlay");
        this.__isFoldFull = this.createStorageLink('isFoldFull', false, "isFoldFull");
        this.context = AppStorage.get('context');
        this.callback = (data: display.FoldDisplayMode) => {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                if (data === display.FoldDisplayMode.FOLD_DISPLAY_MODE_FULL) {
                    this.isFoldFull = true;
                }
                else {
                    this.isFoldFull = false;
                }
            }
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("selectIndex", this.getImageColor);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MusicControlComponent_Params) {
        if (params.imageLabel !== undefined) {
            this.imageLabel = params.imageLabel;
        }
        if (params.isShowControl !== undefined) {
            this.isShowControl = params.isShowControl;
        }
        if (params.isShowControlLg !== undefined) {
            this.isShowControlLg = params.isShowControlLg;
        }
        if (params.isTablet !== undefined) {
            this.isTablet = params.isTablet;
        }
        if (params.isTabletFalse !== undefined) {
            this.isTabletFalse = params.isTabletFalse;
        }
        if (params.intervalID !== undefined) {
            this.intervalID = params.intervalID;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.callback !== undefined) {
            this.callback = params.callback;
        }
    }
    updateStateVars(params: MusicControlComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
        this.__selectIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__imageColor.purgeDependencyOnElmtId(rmElmtId);
        this.__topArea.purgeDependencyOnElmtId(rmElmtId);
        this.__bottomArea.purgeDependencyOnElmtId(rmElmtId);
        this.__imageLabel.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowControl.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowControlLg.purgeDependencyOnElmtId(rmElmtId);
        this.__isTablet.purgeDependencyOnElmtId(rmElmtId);
        this.__isTabletFalse.purgeDependencyOnElmtId(rmElmtId);
        this.__pageShowTime.purgeDependencyOnElmtId(rmElmtId);
        this.__intervalID.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__isFoldFull.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__songList.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
        this.__imageColor.aboutToBeDeleted();
        this.__topArea.aboutToBeDeleted();
        this.__bottomArea.aboutToBeDeleted();
        this.__imageLabel.aboutToBeDeleted();
        this.__isShowControl.aboutToBeDeleted();
        this.__isShowControlLg.aboutToBeDeleted();
        this.__isTablet.aboutToBeDeleted();
        this.__isTabletFalse.aboutToBeDeleted();
        this.__pageShowTime.aboutToBeDeleted();
        this.__intervalID.aboutToBeDeleted();
        this.__isShowPlay.aboutToBeDeleted();
        this.__isFoldFull.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
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
    private __selectIndex: ObservedPropertyAbstractPU<number>;
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue: number) {
        this.__selectIndex.set(newValue);
    }
    private __imageColor: ObservedPropertyAbstractPU<string>;
    get imageColor() {
        return this.__imageColor.get();
    }
    set imageColor(newValue: string) {
        this.__imageColor.set(newValue);
    }
    private __topArea: ObservedPropertyAbstractPU<number>;
    get topArea() {
        return this.__topArea.get();
    }
    set topArea(newValue: number) {
        this.__topArea.set(newValue);
    }
    private __bottomArea: ObservedPropertyAbstractPU<number>;
    get bottomArea() {
        return this.__bottomArea.get();
    }
    set bottomArea(newValue: number) {
        this.__bottomArea.set(newValue);
    }
    private __imageLabel: ObservedPropertyObjectPU<PixelMap | Resource>;
    get imageLabel() {
        return this.__imageLabel.get();
    }
    set imageLabel(newValue: PixelMap | Resource) {
        this.__imageLabel.set(newValue);
    }
    private __isShowControl: ObservedPropertySimplePU<boolean>;
    get isShowControl() {
        return this.__isShowControl.get();
    }
    set isShowControl(newValue: boolean) {
        this.__isShowControl.set(newValue);
    }
    private __isShowControlLg: ObservedPropertySimplePU<boolean>;
    get isShowControlLg() {
        return this.__isShowControlLg.get();
    }
    set isShowControlLg(newValue: boolean) {
        this.__isShowControlLg.set(newValue);
    }
    private __isTablet: ObservedPropertySimplePU<boolean>;
    get isTablet() {
        return this.__isTablet.get();
    }
    set isTablet(newValue: boolean) {
        this.__isTablet.set(newValue);
    }
    private __isTabletFalse: ObservedPropertySimplePU<boolean>;
    get isTabletFalse() {
        return this.__isTabletFalse.get();
    }
    set isTabletFalse(newValue: boolean) {
        this.__isTabletFalse.set(newValue);
    }
    private __pageShowTime: ObservedPropertyAbstractPU<number>;
    get pageShowTime() {
        return this.__pageShowTime.get();
    }
    set pageShowTime(newValue: number) {
        this.__pageShowTime.set(newValue);
    }
    private __intervalID: ObservedPropertySimplePU<number>;
    get intervalID() {
        return this.__intervalID.get();
    }
    set intervalID(newValue: number) {
        this.__intervalID.set(newValue);
    }
    private __isShowPlay: SynchedPropertySimpleTwoWayPU<boolean>;
    get isShowPlay() {
        return this.__isShowPlay.get();
    }
    set isShowPlay(newValue: boolean) {
        this.__isShowPlay.set(newValue);
    }
    private __isFoldFull: ObservedPropertyAbstractPU<boolean>;
    get isFoldFull() {
        return this.__isFoldFull.get();
    }
    set isFoldFull(newValue: boolean) {
        this.__isFoldFull.set(newValue);
    }
    private context: common.UIAbilityContext | undefined;
    private callback: Callback<display.FoldDisplayMode>;
    aboutToAppear(): void {
        this.getImageColor();
        try {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                let mode = display.getFoldDisplayMode();
                if (mode === display.FoldDisplayMode.FOLD_DISPLAY_MODE_FULL) {
                    this.isFoldFull = true;
                }
                display.on('foldDisplayModeChange', this.callback);
            }
        }
        catch (exception) {
            Logger.error('Failed to register callback. Code: ' + JSON.stringify(exception));
        }
    }
    aboutToDisappear(): void {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            display.off('foldDisplayModeChange', this.callback);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(80:5)", "@ohos/musiclist");
            Stack.height(StyleConstants.FULL_HEIGHT);
            Stack.width(StyleConstants.FULL_WIDTH);
            Stack.backgroundColor(this.imageColor);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.imageLabel);
            Image.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(81:7)", "@ohos/musiclist");
            Image.size(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ?
                {
                    width: PlayerConstants.BACK_IMAGE
                } :
                {
                    height: PlayerConstants.BACK_IMAGE
                });
            Image.aspectRatio(1);
            Image.objectFit(ImageFit.Cover);
            Image.opacity(0.5);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(92:7)", "@ohos/musiclist");
            Row.padding({
                bottom: this.bottomArea,
                top: this.topArea
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isFoldFull) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(94:11)", "@ohos/musiclist");
                        Column.layoutWeight(1);
                        Column.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({
                            bottom: { "id": 100663608, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            left: { "id": 100663663, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new TopAreaComponent(this, { isShowPlay: this.__isShowPlay }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 95, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowPlay: this.isShowPlay
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "TopAreaComponent" });
                    }
                    __Common__.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridRow.create({
                            columns: { md: BreakpointConstants.COLUMN_MD },
                            gutter: BreakpointConstants.GUTTER_MUSIC_X
                        });
                        GridRow.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(100:13)", "@ohos/musiclist");
                        GridRow.layoutWeight(1);
                        GridRow.margin({
                            bottom: { "id": 100663549, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, GridRow);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridCol.create({
                            span: { md: BreakpointConstants.SPAN_SM }
                        });
                        GridCol.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(104:15)", "@ohos/musiclist");
                        GridCol.margin({
                            left: { "id": 100663605, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663605, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, GridCol);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MusicInfoComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 107, col: 17 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MusicInfoComponent" });
                    }
                    GridCol.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridCol.create({
                            span: { md: BreakpointConstants.SPAN_SM }
                        });
                        GridCol.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(113:15)", "@ohos/musiclist");
                        GridCol.padding({
                            left: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, GridCol);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new LyricsComponent(this, { isShowControl: this.__isShowControlLg, isTablet: this.__isTabletFalse }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 116, col: 17 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowControl: this.isShowControlLg,
                                        isTablet: this.isTabletFalse
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "LyricsComponent" });
                    }
                    GridCol.pop();
                    GridRow.pop();
                    Column.pop();
                });
            }
            else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(133:11)", "@ohos/musiclist");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new TopAreaComponent(this, { isShowPlay: this.__isShowPlay }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 134, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowPlay: this.isShowPlay
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "TopAreaComponent" });
                    }
                    __Common__.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridRow.create({
                            columns: { md: BreakpointConstants.COLUMN_MD, lg: BreakpointConstants.COLUMN_LG },
                            gutter: BreakpointConstants.GUTTER_MUSIC_X
                        });
                        GridRow.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(139:13)", "@ohos/musiclist");
                        GridRow.layoutWeight(1);
                        GridRow.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            top: { "id": 100663579, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            bottom: { "id": 100663578, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, GridRow);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridCol.create({
                            span: { md: BreakpointConstants.SPAN_SM, lg: BreakpointConstants.SPAN_SM },
                            offset: { lg: BreakpointConstants.OFFSET_MD }
                        });
                        GridCol.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(143:15)", "@ohos/musiclist");
                    }, GridCol);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(147:17)", "@ohos/musiclist");
                        Column.height(StyleConstants.FULL_HEIGHT);
                        Column.justifyContent(FlexAlign.SpaceBetween);
                        Column.margin({
                            bottom: { "id": 100663523, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.songList[this.selectIndex].label);
                        Image.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(148:19)", "@ohos/musiclist");
                        Image.width(StyleConstants.FULL_WIDTH);
                        Image.aspectRatio(1);
                        Image.borderRadius({ "id": 100663545, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    }, Image);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ControlAreaComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 152, col: 19 });
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
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        GridCol.create({
                            span: { md: BreakpointConstants.SPAN_SM, lg: BreakpointConstants.SPAN_MD },
                            offset: { lg: BreakpointConstants.OFFSET_MD }
                        });
                        GridCol.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(160:15)", "@ohos/musiclist");
                    }, GridCol);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new LyricsComponent(this, { isShowControl: this.__isShowControlLg, isTablet: this.__isTablet }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 164, col: 17 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowControl: this.isShowControlLg,
                                        isTablet: this.isTablet
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "LyricsComponent" });
                    }
                    GridCol.pop();
                    GridRow.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.TopStart });
                        Stack.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(176:11)", "@ohos/musiclist");
                        Stack.height(StyleConstants.FULL_HEIGHT);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Swiper.create();
                        Swiper.debugLine("features/musicList/src/main/ets/components/MusicControlComponent.ets(177:13)", "@ohos/musiclist");
                        Swiper.height(StyleConstants.FULL_HEIGHT);
                        Swiper.indicator(new DotIndicator()
                            .top({ "id": 100663616, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" })
                            .selectedColor({ "id": 100663498, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" })
                            .color({ "id": 100663504, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }));
                        Swiper.clip(false);
                        Swiper.loop(false);
                        Swiper.onChange((index: number) => {
                            if (index === 1) {
                                this.isShowControl = true;
                                this.intervalID = setInterval(() => {
                                    this.pageShowTime += 1;
                                    if (this.pageShowTime > 5) {
                                        this.isShowControl = false;
                                        clearInterval(this.intervalID);
                                    }
                                }, 1000);
                            }
                            else {
                                this.pageShowTime = 0;
                                clearInterval(this.intervalID);
                            }
                        });
                    }, Swiper);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({
                            top: { "id": 100663607, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            bottom: { "id": 100663606, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                        __Common__.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MusicInfoComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 178, col: 15 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MusicInfoComponent" });
                    }
                    __Common__.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({
                            top: { "id": 100663604, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                        __Common__.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new LyricsComponent(this, { isShowControl: this.__isShowControl, isTablet: this.__isTabletFalse }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 187, col: 15 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowControl: this.isShowControl,
                                        isTablet: this.isTabletFalse
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "LyricsComponent" });
                    }
                    __Common__.pop();
                    Swiper.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.padding({
                            left: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                            right: { "id": 100663524, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new TopAreaComponent(this, { isShowPlay: this.__isShowPlay }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/MusicControlComponent.ets", line: 221, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isShowPlay: this.isShowPlay
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "TopAreaComponent" });
                    }
                    __Common__.pop();
                    Stack.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        Stack.pop();
    }
    /**
     * Get largest proportion color of an image.
     */
    getImageColor() {
        if (!this.context) {
            return;
        }
        this.context.resourceManager.getMediaContent(this.songList[this.selectIndex].label)
            .then((value: Uint8Array) => {
            let buffer = value.buffer as ArrayBuffer;
            image.createImageSource(buffer).createPixelMap().then((pixelMap) => {
                effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
                    if (error) {
                        Logger.error('Failed to create color picker.');
                    }
                    else {
                        let color = colorPicker.getLargestProportionColor();
                        let colorArr = ColorConversion.dealColor(color.red, color.green, color.blue);
                        this.imageColor = `rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, 1)`;
                    }
                });
                let headFilter = effectKit.createEffect(pixelMap);
                if (headFilter !== null) {
                    headFilter.blur(PlayerConstants.IMAGE_BLUR);
                    headFilter.getEffectPixelMap().then((value) => {
                        this.imageLabel = value;
                    });
                }
            })
                .catch((error: BusinessError) => {
                Logger.error(`${error.code} + ${error.message}`);
            });
        })
            .catch((error: BusinessError) => {
            Logger.error(`${error.code} + ${error.message}`);
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
