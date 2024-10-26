if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LivePage_Params {
}
import { Header } from "@bundle:com.huawei.music.musichome/phone@live/ets/view/Header";
import { LiveList } from "@bundle:com.huawei.music.musichome/phone@live/ets/view/LiveList";
import { LiveConstants } from "@bundle:com.huawei.music.musichome/phone@live/ets/constants/LiveConstants";
export class LivePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LivePage_Params) {
    }
    updateStateVars(params: LivePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/live/src/main/ets/view/LivePage.ets(23:5)", "live");
            Column.width(LiveConstants.FULL_WIDTH_PERCENT);
            Column.height(LiveConstants.FULL_HEIGHT_PERCENT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Header(this, {}, undefined, elmtId, () => { }, { page: "features/live/src/main/ets/view/LivePage.ets", line: 24, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Header" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new LiveList(this, {}, undefined, elmtId, () => { }, { page: "features/live/src/main/ets/view/LivePage.ets", line: 25, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "LiveList" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
