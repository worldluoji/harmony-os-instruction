if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HeadComponent_Params {
    pageIndexInfos?: NavPathStack;
}
import { StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
export class HeadComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageIndexInfos = this.createStorageLink('pageIndexInfos', new NavPathStack(), "pageIndexInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HeadComponent_Params) {
    }
    updateStateVars(params: HeadComponent_Params) {
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
            Row.debugLine("features/musicComment/src/main/ets/view/HeadComponent.ets(23:5)", "musiccomment");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 100663384, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.onClick(() => {
                this.pageIndexInfos.pop();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663438, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicComment/src/main/ets/view/HeadComponent.ets(24:7)", "musiccomment");
            Image.width({ "id": 100663386, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663385, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({
                left: { "id": 100663388, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663389, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 100663425, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.debugLine("features/musicComment/src/main/ets/view/HeadComponent.ets(31:7)", "musiccomment");
            Text.fontSize({ "id": 100663383, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663441, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.lineHeight({ "id": 100663387, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
