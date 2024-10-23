if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AlbumComponent_Params {
    imgHeight?: Length;
    currentBreakpoint?: string;
    pageIndexInfos?: NavPathStack;
}
import { BreakpointConstants, GridConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { BreakpointType } from "@bundle:com.huawei.music.musichome/phone@mediaCommon/index";
import { optionList } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/viewmodel/SongListData";
import type { OptionItem } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/viewmodel/SongListData";
import { ContentConstants } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/constants/ContentConstants";
export class AlbumComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__imgHeight = new ObservedPropertyObjectPU(0, this, "imgHeight");
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__pageIndexInfos = this.createStorageLink('pageIndexInfos', new NavPathStack(), "pageIndexInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AlbumComponent_Params) {
        if (params.imgHeight !== undefined) {
            this.imgHeight = params.imgHeight;
        }
    }
    updateStateVars(params: AlbumComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__imgHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageIndexInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__imgHeight.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageIndexInfos.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __imgHeight: ObservedPropertyObjectPU<Length>;
    get imgHeight() {
        return this.__imgHeight.get();
    }
    set imgHeight(newValue: Length) {
        this.__imgHeight.set(newValue);
    }
    private __currentBreakpoint: SynchedPropertySimpleTwoWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __pageIndexInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageIndexInfos() {
        return this.__pageIndexInfos.get();
    }
    set pageIndexInfos(newValue: NavPathStack) {
        this.__pageIndexInfos.set(newValue);
    }
    CoverImage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomStart });
            Stack.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(29:5)", "@ohos/musiclist");
            Stack.width(StyleConstants.FULL_WIDTH);
            Stack.height(StyleConstants.FULL_HEIGHT);
            Stack.aspectRatio(ContentConstants.ASPECT_RATIO_ALBUM_COVER);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663677, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(30:7)", "@ohos/musiclist");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.aspectRatio(ContentConstants.ASPECT_RATIO_ALBUM_COVER);
            Image.borderRadius({ "id": 100663512, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.onAreaChange((oldArea: Area, newArea: Area) => {
                this.imgHeight = newArea.height;
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663458, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(37:7)", "@ohos/musiclist");
            Text.letterSpacing(ContentConstants.LETTER_SPACING);
            Text.fontColor(Color.White);
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663521, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663520, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663519, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Text.translate({
                x: StyleConstants.TRANSLATE_X,
                y: StyleConstants.TRANSLATE_Y
            });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    CoverIntroduction(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(57:5)", "@ohos/musiclist");
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                this.imgHeight : { "id": 100663565, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663569, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : 0
            });
            Column.margin({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : { "id": 100663567, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 100663566, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663461, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(58:7)", "@ohos/musiclist");
            Text.opacity({ "id": 100663514, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(ContentConstants.ALBUM_FONT_WEIGHT);
            Text.fontColor({ "id": 100663493, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663588, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663587, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663586, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
            Text.margin({ bottom: { "id": 100663513, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663464, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(69:7)", "@ohos/musiclist");
            Text.opacity({ "id": 100663568, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.fontWeight(ContentConstants.INTRODUCTION_FONT_WEIGHT);
            Text.fontColor({ "id": 100663493, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 100663564, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                md: { "id": 100663563, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                lg: { "id": 100663562, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            }).getValue(this.currentBreakpoint));
        }, Text);
        Text.pop();
        Column.pop();
    }
    CoverOptions(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(97:5)", "@ohos/musiclist");
            Row.height({ "id": 100663610, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.padding({
                left: { "id": 100663616, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663616, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: ContentConstants.COVER_OPTION_SPACE });
                    Column.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(99:9)", "@ohos/musiclist");
                    Column.onClick(() => {
                        if (item.action) {
                            item.action(ObservedObject.GetRawObject(this.pageIndexInfos));
                        }
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.image);
                    Image.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(100:11)", "@ohos/musiclist");
                    Image.height({ "id": 100663614, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Image.width({ "id": 100663614, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.text);
                    Text.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(103:11)", "@ohos/musiclist");
                    Text.fontColor({ "id": 100663493, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Text.fontSize(new BreakpointType({
                        sm: { "id": 100663613, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                        md: { "id": 100663612, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                        lg: { "id": 100663611, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                    }).getValue(this.currentBreakpoint));
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, optionList, forEachItemGenFunction, (item: OptionItem, index?: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(128:5)", "@ohos/musiclist");
            Column.margin({
                left: new BreakpointType({
                    sm: { "id": 100663539, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663537, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663536, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 100663539, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663537, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663536, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint)
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create();
            GridRow.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(129:7)", "@ohos/musiclist");
            GridRow.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663544, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663543, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                left: new BreakpointType({
                    sm: { "id": 100663517, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663516, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663515, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 100663517, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    md: { "id": 100663516, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                    lg: { "id": 100663515, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                }).getValue(this.currentBreakpoint)
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: { sm: GridConstants.SPAN_FOUR, md: GridConstants.SPAN_TWELVE, lg: GridConstants.SPAN_TWELVE }
            });
            GridCol.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(130:9)", "@ohos/musiclist");
        }, GridCol);
        this.CoverImage.bind(this)();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: { sm: GridConstants.SPAN_EIGHT, md: GridConstants.SPAN_TWELVE, lg: GridConstants.SPAN_TWELVE }
            });
            GridCol.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(136:9)", "@ohos/musiclist");
        }, GridCol);
        this.CoverIntroduction.bind(this)();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: { sm: GridConstants.SPAN_TWELVE, md: GridConstants.SPAN_TWELVE, lg: GridConstants.SPAN_TWELVE }
            });
            GridCol.debugLine("features/musicList/src/main/ets/components/AlbumComponent.ets(142:9)", "@ohos/musiclist");
            GridCol.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663615, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : 0,
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663615, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : 0
            });
        }, GridCol);
        this.CoverOptions.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
