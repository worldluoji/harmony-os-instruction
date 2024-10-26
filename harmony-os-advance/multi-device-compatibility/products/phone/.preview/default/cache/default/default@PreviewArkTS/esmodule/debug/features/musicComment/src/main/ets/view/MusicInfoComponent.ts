if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MusicInfoComponent_Params {
    selectIndex?: number;
    songList?: SongItem[];
}
import type { SongItem } from '@ohos/mediaCommon';
import { StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
export class MusicInfoComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MusicInfoComponent_Params) {
    }
    updateStateVars(params: MusicInfoComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectIndex.aboutToBeDeleted();
        this.__songList.aboutToBeDeleted();
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
    private __songList: ObservedPropertyAbstractPU<SongItem[]>;
    get songList() {
        return this.__songList.get();
    }
    set songList(newValue: SongItem[]) {
        this.__songList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(25:5)", "musiccomment");
            Row.height({ "id": 100663390, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.padding({
                top: { "id": 100663396, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                bottom: { "id": 100663395, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.songList[this.selectIndex].label);
            Image.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(26:7)", "musiccomment");
            Image.width({ "id": 100663394, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663392, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({
                right: { "id": 100663393, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            Image.borderRadius({ "id": 100663391, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(33:7)", "musiccomment");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].title);
            Text.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(34:9)", "musiccomment");
            Text.fontSize({ "id": 100663399, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Regular);
            Text.fontColor({ "id": 100663443, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.songList[this.selectIndex].singer);
            Text.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(38:9)", "musiccomment");
            Text.fontSize({ "id": 100663398, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Regular);
            Text.fontColor({ "id": 100663442, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.lineHeight({ "id": 100663397, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(46:7)", "musiccomment");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663437, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicComment/src/main/ets/view/MusicInfoComponent.ets(47:7)", "musiccomment");
            Image.width({ "id": 100663375, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663374, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
