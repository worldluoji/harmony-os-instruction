if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ListItemComponent_Params {
    item?: Comment;
}
import { StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { Comment } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/viewmodel/Comment";
import { CommonConstants } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/constants/CommonConstants";
export class ListItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = new Comment('', '', '', { "id": 100663429, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListItemComponent_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
    }
    updateStateVars(params: ListItemComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item: Comment;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(25:5)", "musiccomment");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.alignItems(VerticalAlign.Top);
            Row.padding({
                top: { "id": 100663404, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.item.icon);
            Image.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(26:7)", "musiccomment");
            Image.width({ "id": 100663403, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663401, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.borderRadius({ "id": 100663400, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({
                right: { "id": 100663402, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(33:7)", "musiccomment");
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(34:9)", "musiccomment");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(35:11)", "musiccomment");
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.nickname);
            Text.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(36:13)", "musiccomment");
            Text.fontSize({ "id": 100663411, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663445, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Regular);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.time);
            Text.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(40:13)", "musiccomment");
            Text.fontSize({ "id": 100663419, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663448, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Regular);
            Text.margin({
                top: { "id": 100663420, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.content);
            Text.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(47:13)", "musiccomment");
            Text.fontSize({ "id": 100663377, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663440, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Regular);
            Text.margin({
                top: { "id": 100663378, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(57:11)", "musiccomment");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 100663428, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(58:11)", "musiccomment");
            Image.width({ "id": 100663382, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.height({ "id": 100663380, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Image.margin({
                top: { "id": 100663381, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item.commentList && this.item.commentList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(69:11)", "musiccomment");
                        Row.margin({
                            top: { "id": 100663413, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                        Row.width(StyleConstants.FULL_WIDTH);
                        Row.justifyContent(FlexAlign.Start);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(70:13)", "musiccomment");
                        Column.backgroundColor({ "id": 100663446, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                        Column.padding({ "id": 100663414, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create();
                        Text.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(71:15)", "musiccomment");
                    }, Text);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create(CommonConstants.NICKNAME_PREV + this.item.commentList[0].nickname +
                            CommonConstants.NICKNAME_SUFFIX);
                        Span.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(72:17)", "musiccomment");
                        Span.fontSize({ "id": 100663415, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                        Span.fontColor({ "id": 100663447, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                        Span.fontWeight(FontWeight.Regular);
                    }, Span);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create(this.item.commentList[0].content);
                        Span.debugLine("features/musicComment/src/main/ets/view/ListItemComponent.ets(77:17)", "musiccomment");
                        Span.fontSize({ "id": 100663415, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                        Span.fontColor({ "id": 100663447, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                        Span.fontWeight(FontWeight.Regular);
                    }, Span);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
