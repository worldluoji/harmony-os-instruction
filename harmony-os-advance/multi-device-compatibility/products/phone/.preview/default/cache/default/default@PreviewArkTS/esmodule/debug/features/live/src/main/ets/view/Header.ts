if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Header_Params {
    pageIndexInfos?: NavPathStack;
}
import { LiveConstants } from "@bundle:com.huawei.music.musichome/phone@live/ets/constants/LiveConstants";
export class Header extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageIndexInfos = this.createStorageLink('pageIndexInfos', new NavPathStack(), "pageIndexInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Header_Params) {
    }
    updateStateVars(params: Header_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageIndexInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageIndexInfos.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __pageIndexInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageIndexInfos() {
        return this.__pageIndexInfos.get();
    }
    set pageIndexInfos(newValue: NavPathStack) {
        this.__pageIndexInfos.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/live/src/main/ets/view/Header.ets(23:5)", "live");
            Row.height({ "id": 100663366, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663372, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/live/src/main/ets/view/Header.ets(24:7)", "live");
            Image.width({ "id": 100663345, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663343, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({ left: { "id": 100663344, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Image.onClick(() => {
                this.pageIndexInfos.pop();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663316, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/live/src/main/ets/view/Header.ets(31:7)", "live");
            Text.fontSize({ "id": 100663310, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontFamily(LiveConstants.LIVE_TITLE_FONT_FAMILY);
            Text.fontWeight(LiveConstants.TITLE_FONT_WEIGHT);
            Text.fontColor({ "id": 100663340, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.margin({ left: { "id": 100663365, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } });
            Text.height({ "id": 100663364, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
