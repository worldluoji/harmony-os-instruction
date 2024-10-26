if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Content_Params {
    currentBreakpoint?: string;
}
import { BreakpointConstants, GridConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { AlbumCover } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/AlbumCover";
import { PlayList } from "@bundle:com.huawei.music.musichome/phone@musicList/ets/components/PlayList";
export class Content extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Content_Params) {
    }
    updateStateVars(params: Content_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create();
            GridRow.debugLine("features/musicList/src/main/ets/components/ListContent.ets(25:5)", "@ohos/musiclist");
            GridRow.height(StyleConstants.FULL_HEIGHT);
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({ span: { sm: GridConstants.SPAN_TWELVE, md: GridConstants.SPAN_SIX, lg: GridConstants.SPAN_FOUR } });
            GridCol.debugLine("features/musicList/src/main/ets/components/ListContent.ets(26:7)", "@ohos/musiclist");
            GridCol.backgroundColor({ "id": 100663492, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, GridCol);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AlbumCover(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/ListContent.ets", line: 27, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            currentBreakpoint: this.currentBreakpoint
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "AlbumCover" });
        }
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({ span: { sm: GridConstants.SPAN_TWELVE, md: GridConstants.SPAN_SIX, lg: GridConstants.SPAN_EIGHT } });
            GridCol.debugLine("features/musicList/src/main/ets/components/ListContent.ets(31:7)", "@ohos/musiclist");
            GridCol.borderRadius({ "id": 100663631, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        }, GridCol);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PlayList(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId, () => { }, { page: "features/musicList/src/main/ets/components/ListContent.ets", line: 32, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            currentBreakpoint: this.currentBreakpoint
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PlayList" });
        }
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
