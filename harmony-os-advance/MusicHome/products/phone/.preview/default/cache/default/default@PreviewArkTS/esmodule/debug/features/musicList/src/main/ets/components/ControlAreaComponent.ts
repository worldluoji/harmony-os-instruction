if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ControlAreaComponent_Params {
    currentBreakpoint?: string;
    isPlay?: boolean;
    currentTime?: string;
    totalTime?: string;
    value?: number;
    max?: number;
    playModeIndex?: number;
    imageColor?: string;
    pageShowTime?: number;
}
import { BreakpointConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { BreakpointType, MediaService } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import { PlayerConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/PlayerConstants";
export class ControlAreaComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__isPlay = this.createStorageLink('isPlay', false, "isPlay");
        this.__currentTime = this.createStorageLink('currentTime', '00:00', "currentTime");
        this.__totalTime = this.createStorageLink('totalTime', '00:00', "totalTime");
        this.__value = this.createStorageLink('progress', 0, "value");
        this.__max = this.createStorageLink('progressMax', 0, "max");
        this.__playModeIndex = new ObservedPropertySimplePU(0, this, "playModeIndex");
        this.__imageColor = this.createStorageLink('imageColor', '', "imageColor");
        this.__pageShowTime = this.createStorageLink('pageShowTime', 0, "pageShowTime");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ControlAreaComponent_Params) {
        if (params.playModeIndex !== undefined) {
            this.playModeIndex = params.playModeIndex;
        }
    }
    updateStateVars(params: ControlAreaComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTime.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTime.purgeDependencyOnElmtId(rmElmtId);
        this.__value.purgeDependencyOnElmtId(rmElmtId);
        this.__max.purgeDependencyOnElmtId(rmElmtId);
        this.__playModeIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__imageColor.purgeDependencyOnElmtId(rmElmtId);
        this.__pageShowTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__currentTime.aboutToBeDeleted();
        this.__totalTime.aboutToBeDeleted();
        this.__value.aboutToBeDeleted();
        this.__max.aboutToBeDeleted();
        this.__playModeIndex.aboutToBeDeleted();
        this.__imageColor.aboutToBeDeleted();
        this.__pageShowTime.aboutToBeDeleted();
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
    private __isPlay: ObservedPropertyAbstractPU<boolean>;
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue: boolean) {
        this.__isPlay.set(newValue);
    }
    private __currentTime: ObservedPropertyAbstractPU<string>;
    get currentTime() {
        return this.__currentTime.get();
    }
    set currentTime(newValue: string) {
        this.__currentTime.set(newValue);
    }
    private __totalTime: ObservedPropertyAbstractPU<string>;
    get totalTime() {
        return this.__totalTime.get();
    }
    set totalTime(newValue: string) {
        this.__totalTime.set(newValue);
    }
    private __value: ObservedPropertyAbstractPU<number>;
    get value() {
        return this.__value.get();
    }
    set value(newValue: number) {
        this.__value.set(newValue);
    }
    private __max: ObservedPropertyAbstractPU<number>;
    get max() {
        return this.__max.get();
    }
    set max(newValue: number) {
        this.__max.set(newValue);
    }
    private __playModeIndex: ObservedPropertySimplePU<number>;
    get playModeIndex() {
        return this.__playModeIndex.get();
    }
    set playModeIndex(newValue: number) {
        this.__playModeIndex.set(newValue);
    }
    private __imageColor: ObservedPropertyAbstractPU<string>;
    get imageColor() {
        return this.__imageColor.get();
    }
    set imageColor(newValue: string) {
        this.__imageColor.set(newValue);
    }
    private __pageShowTime: ObservedPropertyAbstractPU<number>;
    get pageShowTime() {
        return this.__pageShowTime.get();
    }
    set pageShowTime(newValue: number) {
        this.__pageShowTime.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(34:5)", "@ohos/musiclist");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(35:7)", "@ohos/musiclist");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663672, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(36:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(new BreakpointType({
                sm: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663528, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663452, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(43:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(new BreakpointType({
                sm: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663528, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663476, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(50:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(new BreakpointType({
                sm: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663528, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663491, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(57:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(new BreakpointType({
                sm: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663664, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663528, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(67:7)", "@ohos/musiclist");
            Column.margin({
                top: { "id": 100663650, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 100663646, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663645, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({ min: 0, max: this.max, step: 1, value: this.value });
            Slider.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(68:9)", "@ohos/musiclist");
            Slider.blockColor({ "id": 100663502, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Slider.selectedColor({ "id": 100663503, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Slider.trackColor({ "id": 100663504, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Slider.blockSize({
                width: { "id": 100663642, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                height: { "id": 100663642, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Slider.onChange((value: number, mode: SliderChangeMode) => {
                if (mode === SliderChangeMode.End || mode === SliderChangeMode.Begin) {
                    MediaService.getInstance().seek(value);
                }
                this.pageShowTime = 0;
            });
            Slider.height({ "id": 100663644, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Slider.margin({
                left: new BreakpointType({
                    sm: { "id": 100663649, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663648, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663647, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 100663649, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663648, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663647, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint)
            });
            Slider.hitTestBehavior(HitTestMode.Block);
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(96:9)", "@ohos/musiclist");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.currentTime);
            Text.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(97:11)", "@ohos/musiclist");
            Text.fontColor({ "id": 100663496, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize({ "id": 100663640, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontFamily(PlayerConstants.FONT_FAMILY_BLACK);
            Text.lineHeight('14vp');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.totalTime);
            Text.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(102:11)", "@ohos/musiclist");
            Text.fontColor({ "id": 100663496, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize({ "id": 100663640, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontFamily(PlayerConstants.FONT_FAMILY_BLACK);
            Text.lineHeight('14vp');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(117:7)", "@ohos/musiclist");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({
                left: { "id": 100663530, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663530, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663469, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(118:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 100663532, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663531, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.onClick(() => {
                MediaService.getInstance().playPrevious();
                this.pageShowTime = 0;
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isPlay ? { "id": 100663484, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663687, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(126:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(new BreakpointType({
                sm: { "id": 100663558, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663558, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663559, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Image.onClick(() => {
                if (this.isPlay) {
                    MediaService.getInstance().pause();
                }
                else {
                    if (MediaService.getInstance().getFirst()) {
                        MediaService.getInstance().loadAssent(0);
                    }
                    else {
                        MediaService.getInstance().play();
                    }
                }
                this.pageShowTime = 0;
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663683, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/ControlAreaComponent.ets(145:9)", "@ohos/musiclist");
            __Image__controlImageBuilder();
            Image.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 100663532, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663531, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.onClick(() => {
                MediaService.getInstance().playNextAuto(true);
                this.pageShowTime = 0;
            });
        }, Image);
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Image__controlImageBuilder(): void {
    Image.aspectRatio(1);
    Image.opacity(0.86);
    Image.objectFit(ImageFit.Contain);
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "ControlAreaComponent", new ControlAreaComponent(undefined, {}));
    previewComponent();
}
else {
}
