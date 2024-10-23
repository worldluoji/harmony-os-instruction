if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiveList_Params {
    scroller?: Scroller;
    liveStreams?: LiveStream[];
    currentBreakpoint?: string;
}
import type { LiveStream } from '../viewmodel/LiveStream';
import { LiveConstants } from "@bundle:com.huawei.music.musichome/phone@live/ets/constants/LiveConstants";
import { LiveStreamViewModel } from "@bundle:com.huawei.music.musichome/phone@live/ets/viewmodel/LiveStreamViewModel";
export class LiveList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.scroller = new Scroller();
        this.__liveStreams = new ObservedPropertyObjectPU(new LiveStreamViewModel().getLiveStreamList(), this, "liveStreams");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', LiveConstants.CURRENT_BREAKPOINT, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiveList_Params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.liveStreams !== undefined) {
            this.liveStreams = params.liveStreams;
        }
    }
    updateStateVars(params: LiveList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__liveStreams.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__liveStreams.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private scroller: Scroller;
    private __liveStreams: ObservedPropertyObjectPU<LiveStream[]>;
    get liveStreams() {
        return this.__liveStreams.get();
    }
    set liveStreams(newValue: LiveStream[]) {
        this.__liveStreams.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: { sm: LiveConstants.FOUR_COLUMN, md: LiveConstants.EIGHT_COLUMN, lg: LiveConstants.TWELVE_COLUMN },
                breakpoints: { value: [LiveConstants.SMALL_DEVICE_TYPE, LiveConstants.MIDDLE_DEVICE_TYPE,
                        LiveConstants.LARGE_DEVICE_TYPE] },
                gutter: { x: { "id": 100663348, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } }
            });
            GridRow.debugLine("features/live/src/main/ets/view/LiveList.ets(27:5)", "live");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: { sm: LiveConstants.FOUR_COLUMN, md: LiveConstants.SIX_COLUMN, lg: LiveConstants.EIGHT_COLUMN },
                offset: { sm: LiveConstants.ZERO_COLUMN, md: LiveConstants.ONE_COLUMN, lg: LiveConstants.TWO_COLUMN }
            });
            GridCol.debugLine("features/live/src/main/ets/view/LiveList.ets(33:7)", "live");
            GridCol.margin({ left: { "id": 100663346, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, right: { "id": 100663347, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create(this.scroller);
            Scroll.debugLine("features/live/src/main/ets/view/LiveList.ets(37:9)", "live");
            Scroll.align(Alignment.Top);
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                bottom: { "id": 100663360, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/live/src/main/ets/view/LiveList.ets(38:11)", "live");
            Column.width(LiveConstants.FULL_WIDTH_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.LiveItem.bind(this)(item, index);
            };
            this.forEachUpdateFunction(elmtId, this.liveStreams, forEachItemGenFunction, (item: LiveStream, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        GridCol.pop();
        GridRow.pop();
    }
    LiveItem(item: LiveStream, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Center });
            Stack.debugLine("features/live/src/main/ets/view/LiveList.ets(57:5)", "live");
            Stack.width(LiveConstants.FULL_WIDTH_PERCENT);
            Stack.margin({
                top: index === 0 ? { "id": 100663363, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : 0,
                bottom: { "id": 100663362, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.liveBackground);
            Image.debugLine("features/live/src/main/ets/view/LiveList.ets(58:7)", "live");
            Image.size({ width: LiveConstants.FULL_WIDTH_PERCENT, height: { "id": 100663350, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Image.borderRadius({ "id": 100663349, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/live/src/main/ets/view/LiveList.ets(62:7)", "live");
            Column.height({ "id": 100663350, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Column.padding({
                left: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT ? { "id": 100663361, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663359, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT ? { "id": 100663361, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663359, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/live/src/main/ets/view/LiveList.ets(63:9)", "live");
            Row.height({ "id": 100663368, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            Row.alignItems(VerticalAlign.Top);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663342, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/live/src/main/ets/view/LiveList.ets(64:11)", "live");
            Image.width({ "id": 100663371, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663367, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT ? { "id": 100663370, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663369, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/live/src/main/ets/view/LiveList.ets(75:9)", "live");
            Column.height({ "id": 100663354, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/live/src/main/ets/view/LiveList.ets(76:11)", "live");
            Row.height({ "id": 100663356, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT ? { "id": 100663357, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663358, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.title);
            Text.debugLine("features/live/src/main/ets/view/LiveList.ets(77:13)", "live");
            Text.fontColor({ "id": 100663341, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(LiveConstants.LIVE_TITLE_FONT_WEIGHT);
            Text.fontFamily(LiveConstants.LIVE_ITEM_TITLE_FONT_FAMILY);
            Text.fontSize({ "id": 100663355, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/live/src/main/ets/view/LiveList.ets(88:11)", "live");
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            Row.height({ "id": 100663352, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.margin({ top: { "id": 100663353, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.liveIntroduction);
            Text.debugLine("features/live/src/main/ets/view/LiveList.ets(89:13)", "live");
            Text.fontFamily(LiveConstants.LIVE_ITEM_INTRODUCTION_FONT_FAMILY);
            Text.fontSize({ "id": 100663351, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663339, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(LiveConstants.LIVE_INTRODUCTION_FONT_WEIGHT);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
