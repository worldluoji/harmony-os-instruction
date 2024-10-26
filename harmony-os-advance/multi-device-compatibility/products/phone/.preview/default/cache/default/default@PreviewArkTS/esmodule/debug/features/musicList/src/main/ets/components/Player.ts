if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Player_Params {
    selectIndex?: number;
    isPlay?: boolean;
    songList?: SongItem[];
    topArea?: number;
    bottomArea?: number;
    currentBreakpoint?: string;
    imageRotate?: number;
    isShowPlay?: boolean;
    componentHeight?: number;
    deviceHeight?: number;
    panOption?: PanGestureOptions;
    backDisplaySyncSlow?: displaySync.DisplaySync | undefined;
    drawFrame?: (value: displaySync.IntervalInfo) => void;
}
import curves from "@native:ohos.curves";
import window from "@ohos:window";
import displaySync from "@ohos:graphics.displaySync";
import type { BusinessError } from "@ohos:base";
import { BreakpointConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { BreakpointType, Logger, MediaService } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import type { SongItem } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import { PlayerConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/PlayerConstants";
import { MusicControlComponent } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/MusicControlComponent";
export class Player extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__isPlay = this.createStorageLink('isPlay', false, "isPlay");
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.__topArea = this.createStorageLink('topArea', 0, "topArea");
        this.__bottomArea = this.createStorageLink('bottomArea', 0, "bottomArea");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__imageRotate = new ObservedPropertySimplePU(0, this, "imageRotate");
        this.__isShowPlay = this.createStorageLink('isShowPlay', false, "isShowPlay");
        this.__componentHeight = new ObservedPropertySimplePU(0, this, "componentHeight");
        this.__deviceHeight = this.createStorageLink('deviceHeight', 0, "deviceHeight");
        this.panOption = new PanGestureOptions({ direction: PanDirection.Vertical });
        this.backDisplaySyncSlow = undefined;
        this.drawFrame = (value: displaySync.IntervalInfo) => {
            if (this.imageRotate >= 360) {
                this.imageRotate = 0;
            }
            this.imageRotate += 1;
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("isPlay", this.animationFun);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Player_Params) {
        if (params.imageRotate !== undefined) {
            this.imageRotate = params.imageRotate;
        }
        if (params.componentHeight !== undefined) {
            this.componentHeight = params.componentHeight;
        }
        if (params.panOption !== undefined) {
            this.panOption = params.panOption;
        }
        if (params.backDisplaySyncSlow !== undefined) {
            this.backDisplaySyncSlow = params.backDisplaySyncSlow;
        }
        if (params.drawFrame !== undefined) {
            this.drawFrame = params.drawFrame;
        }
    }
    updateStateVars(params: Player_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
        this.__topArea.purgeDependencyOnElmtId(rmElmtId);
        this.__bottomArea.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__imageRotate.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__componentHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__deviceHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectIndex.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__songList.aboutToBeDeleted();
        this.__topArea.aboutToBeDeleted();
        this.__bottomArea.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__imageRotate.aboutToBeDeleted();
        this.__isShowPlay.aboutToBeDeleted();
        this.__componentHeight.aboutToBeDeleted();
        this.__deviceHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectIndex: ObservedPropertyAbstractPU<number>;
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue: number) {
        this.__selectIndex.set(newValue);
    }
    private __isPlay: ObservedPropertyAbstractPU<boolean>;
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue: boolean) {
        this.__isPlay.set(newValue);
    }
    private __songList: ObservedPropertyAbstractPU<SongItem[]>;
    get songList() {
        return this.__songList.get();
    }
    set songList(newValue: SongItem[]) {
        this.__songList.set(newValue);
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
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __imageRotate: ObservedPropertySimplePU<number>;
    get imageRotate() {
        return this.__imageRotate.get();
    }
    set imageRotate(newValue: number) {
        this.__imageRotate.set(newValue);
    }
    private __isShowPlay: ObservedPropertyAbstractPU<boolean>;
    get isShowPlay() {
        return this.__isShowPlay.get();
    }
    set isShowPlay(newValue: boolean) {
        this.__isShowPlay.set(newValue);
    }
    private __componentHeight: ObservedPropertySimplePU<number>;
    get componentHeight() {
        return this.__componentHeight.get();
    }
    set componentHeight(newValue: number) {
        this.__componentHeight.set(newValue);
    }
    private __deviceHeight: ObservedPropertyAbstractPU<number>;
    get deviceHeight() {
        return this.__deviceHeight.get();
    }
    set deviceHeight(newValue: number) {
        this.__deviceHeight.set(newValue);
    }
    private panOption: PanGestureOptions;
    private backDisplaySyncSlow: displaySync.DisplaySync | undefined;
    private drawFrame: (value: displaySync.IntervalInfo) => void;
    animationFun() {
        if (this.isPlay) {
            this.backDisplaySyncSlow?.start();
        }
        else {
            this.backDisplaySyncSlow?.stop();
        }
    }
    aboutToAppear() {
        let range: ExpectedFrameRateRange = {
            expected: 30,
            min: 0,
            max: 30
        };
        this.backDisplaySyncSlow = displaySync.create();
        this.backDisplaySyncSlow.setExpectedFrameRateRange(range);
        this.backDisplaySyncSlow.on('frame', this.drawFrame);
    }
    aboutToDisappear(): void {
        this.backDisplaySyncSlow?.off('frame', this.drawFrame);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/Player.ets(70:5)", "@ohos/musiclist");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 100663629, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.backgroundColor({ "id": 100663497, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.bindContentCover({ value: this.isShowPlay, changeEvent: newValue => { this.isShowPlay = newValue; } }, { builder: () => {
                    this.musicPlayBuilder.call(this);
                } }, ModalTransition.DEFAULT);
            Row.padding({
                left: { "id": 100663630, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663630, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Row.position({
                x: 0,
                y: StyleConstants.FULL_HEIGHT
            });
            Row.translate({
                x: 0,
                y: StyleConstants.TRANSLATE_PLAYER_Y
            });
            Gesture.create(GesturePriority.Low);
            PanGesture.create(this.panOption);
            PanGesture.onActionEnd((event?: GestureEvent) => {
                if (event && event.offsetY < -10) {
                    this.isShowPlay = true;
                }
            });
            PanGesture.pop();
            Gesture.pop();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/Player.ets(71:7)", "@ohos/musiclist");
            Row.layoutWeight(PlayerConstants.LAYOUT_WEIGHT_PLAYER_CONTROL);
            Row.onClick(() => {
                this.isShowPlay = true;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.songList[this.selectIndex]?.label);
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(72:9)", "@ohos/musiclist");
            Image.height({ "id": 100663533, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663547, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.borderRadius({ "id": 100663574, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ right: { "id": 100663534, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Image.rotate({ angle: this.imageRotate });
            Image.onAppear(() => {
                this.animationFun();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/Player.ets(81:9)", "@ohos/musiclist");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].title);
            Text.debugLine("features/musicList/src/main/ets/components/Player.ets(82:11)", "@ohos/musiclist");
            Text.fontColor({ "id": 100663505, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663654, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663653, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663652, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/Player.ets(89:11)", "@ohos/musiclist");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663454, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(90:13)", "@ohos/musiclist");
            Image.height({ "id": 100663665, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663667, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ right: { "id": 100663666, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].singer);
            Text.debugLine("features/musicList/src/main/ets/components/Player.ets(94:13)", "@ohos/musiclist");
            Text.fontColor({ "id": 100663500, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663640, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663639, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663638, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Text.opacity({ "id": 100663637, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicList/src/main/ets/components/Player.ets(111:7)", "@ohos/musiclist");
            Blank.onClick(() => {
                this.isShowPlay = true;
            });
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/Player.ets(116:7)", "@ohos/musiclist");
            Row.width(new BreakpointType({
                sm: { "id": 100663628, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663628, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663627, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663682, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(117:9)", "@ohos/musiclist");
            Image.height({ "id": 100663525, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663527, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ right: { "id": 100663526, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_TWO);
            Image.onClick(() => MediaService.getInstance().playPrevious());
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isPlay ? { "id": 100663488, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663676, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(123:9)", "@ohos/musiclist");
            Image.height({ "id": 100663525, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663527, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_THREE);
            Image.onClick(() => {
                if (MediaService.getInstance().getFirst()) {
                    MediaService.getInstance().loadAssent(0);
                }
                else {
                    this.isPlay ? MediaService.getInstance().pause() : MediaService.getInstance().play();
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663673, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(134:9)", "@ohos/musiclist");
            Image.height({ "id": 100663525, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663527, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({
                right: { "id": 100663526, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                left: { "id": 100663526, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_TWO);
            Image.onClick(() => MediaService.getInstance().playNextAuto(true));
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663671, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/Player.ets(143:9)", "@ohos/musiclist");
            Image.height({ "id": 100663525, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.width({ "id": 100663527, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_ONE);
        }, Image);
        Row.pop();
        Row.pop();
    }
    musicPlayBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/Player.ets(183:5)", "@ohos/musiclist");
            Column.height(StyleConstants.FULL_WIDTH);
            Column.width(StyleConstants.FULL_HEIGHT);
            Column.justifyContent(FlexAlign.End);
            Column.transition(TransitionEffect.translate({ y: 1000 }).animation({ curve: curves.springMotion(0.6, 0.8) }));
            Column.onAppear(() => {
                window.getLastWindow(getContext(this)).then((windowStage: window.Window) => {
                    let area = windowStage.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
                    this.topArea = px2vp(area.topRect.height);
                    let bottomArea = windowStage.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR);
                    this.bottomArea = px2vp(bottomArea.bottomRect.height);
                    Logger.info('bottomArea ' + this.bottomArea);
                    if (this.topArea > 0) {
                        windowStage.setWindowLayoutFullScreen(true);
                    }
                    let sysBarProps: window.SystemBarProperties = {
                        statusBarContentColor: '#FFFFFF'
                    };
                    windowStage.setWindowSystemBarProperties(sysBarProps);
                }).catch((error: BusinessError) => {
                    Logger.error(`${error.code} + ${error.message}`);
                });
            });
            Column.onDisAppear(() => {
                this.componentHeight = 0;
                this.isShowPlay = false;
                window.getLastWindow(getContext(this)).then((windowStage: window.Window) => {
                    let area = windowStage.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
                    let topHeight = px2vp(area.topRect.height);
                    if (topHeight > 0) {
                        windowStage.setWindowLayoutFullScreen(false);
                    }
                    let sysBarProps: window.SystemBarProperties = {
                        statusBarContentColor: '#000000'
                    };
                    windowStage.setWindowSystemBarProperties(sysBarProps);
                }).catch((error: BusinessError) => {
                    Logger.error(`${error.code} + ${error.message}`);
                });
            });
            Gesture.create(GesturePriority.Low);
            PanGesture.create(this.panOption);
            PanGesture.onActionUpdate((event?: GestureEvent) => {
                if (event) {
                    let height = event.offsetY / this.deviceHeight * 100;
                    this.componentHeight = height;
                    if (this.componentHeight < 0) {
                        this.componentHeight = 0;
                    }
                }
            });
            PanGesture.onActionEnd(() => {
                if (this.componentHeight > 40) {
                    this.isShowPlay = false;
                }
                else {
                    this.componentHeight = 0;
                }
            });
            PanGesture.pop();
            Gesture.pop();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/Player.ets(184:7)", "@ohos/musiclist");
            Column.height((100 - this.componentHeight) + '%');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MusicControlComponent(this, { isShowPlay: this.__isShowPlay }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/Player.ets", line: 185, col: 9 });
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
            }, { name: "MusicControlComponent" });
        }
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "Player", new Player(undefined, {}));
    previewComponent();
}
else {
}
