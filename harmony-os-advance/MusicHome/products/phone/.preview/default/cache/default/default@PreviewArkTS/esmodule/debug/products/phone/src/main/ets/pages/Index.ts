if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    indexItemList?: IndexItem[];
    pageIndexInfos?: NavPathStack;
}
import { BreakpointConstants, RouterUrlConstants, StyleConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import { LivePage } from "@bundle:com.huawei.music.musichome/phone@live/Index";
import { MusicListPage } from "@bundle:com.huawei.music.musichome/phone@musicList/Index";
import { MusicCommentPage } from "@bundle:com.huawei.music.musichome/phone@musicComment/Index";
import type IndexItem from '../viewmodel/IndexItem';
import IndexViewModel from "@bundle:com.huawei.music.musichome/phone/ets/viewmodel/IndexViewModel";
import { HomeConstants } from "@bundle:com.huawei.music.musichome/phone/ets/common/constants/HomeConstants";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__indexItemList = new ObservedPropertyObjectPU(IndexViewModel.getIndexItemList(), this, "indexItemList");
        this.__pageIndexInfos = this.createStorageLink('pageIndexInfos', new NavPathStack(), "pageIndexInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.indexItemList !== undefined) {
            this.indexItemList = params.indexItemList;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__indexItemList.purgeDependencyOnElmtId(rmElmtId);
        this.__pageIndexInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__indexItemList.aboutToBeDeleted();
        this.__pageIndexInfos.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __indexItemList: ObservedPropertyObjectPU<IndexItem[]>;
    get indexItemList() {
        return this.__indexItemList.get();
    }
    set indexItemList(newValue: IndexItem[]) {
        this.__indexItemList.set(newValue);
    }
    // @StorageLink：将 pageIndexInfos 属性与存储中的 pageIndexInfos 关联起来。NavPathStack 是一个导航路径栈，用于管理页面导航。
    private __pageIndexInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageIndexInfos() {
        return this.__pageIndexInfos.get();
    }
    set pageIndexInfos(newValue: NavPathStack) {
        this.__pageIndexInfos.set(newValue);
    }
    /*
     * @Builder：标记 PagesMap 为一个构建器函数，用于动态生成 UI 组件。
     * PagesMap 函数根据传入的 name 参数决定要显示的页面，并且隐藏标题栏。
     * */
    PagesMap(name: string, param?: object, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (name === RouterUrlConstants.LIVE) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new LivePage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 40, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "LivePage" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/Index" });
                        NavDestination.hideTitleBar(true);
                        NavDestination.debugLine("products/phone/src/main/ets/pages/Index.ets(39:7)", "phone");
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else if (name === RouterUrlConstants.MUSIC_LIST) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new MusicListPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 45, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "MusicListPage" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/Index" });
                        NavDestination.hideTitleBar(true);
                        NavDestination.debugLine("products/phone/src/main/ets/pages/Index.ets(44:7)", "phone");
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else if (name === RouterUrlConstants.MUSIC_COMMENT) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new MusicCommentPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 50, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "MusicCommentPage" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/Index" });
                        NavDestination.hideTitleBar(true);
                        NavDestination.debugLine("products/phone/src/main/ets/pages/Index.ets(49:7)", "phone");
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else /*
             * GridRow：栅格容器组件，仅可以和栅格子组件（GridCol）在栅格布局场景中使用。
             * GridCol：栅格子组件，必须作为栅格容器组件（GridRow）的子组件使用。
             * */ {
                this.ifElseBranchUpdateFunction(3, () => {
                });
            }
        }, If);
        If.pop();
    }
    /*
     * GridRow：栅格容器组件，仅可以和栅格子组件（GridCol）在栅格布局场景中使用。
     * GridCol：栅格子组件，必须作为栅格容器组件（GridRow）的子组件使用。
     * */
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pageIndexInfos, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/Index", isUserCreateStack: true });
            Navigation.debugLine("products/phone/src/main/ets/pages/Index.ets(61:5)", "phone");
            Navigation.mode(NavigationMode.Stack);
            Navigation.navDestination({ builder: this.PagesMap.bind(this) });
            Navigation.height(StyleConstants.FULL_HEIGHT);
            Navigation.hideTitleBar(true);
            Navigation.hideToolBar(true);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                breakpoints: {
                    value: BreakpointConstants.BREAKPOINT_VALUE,
                    reference: BreakpointsReference.WindowSize
                },
                columns: {
                    sm: BreakpointConstants.COLUMN_SM,
                    md: BreakpointConstants.COLUMN_MD,
                    lg: BreakpointConstants.COLUMN_LG
                },
                gutter: { x: BreakpointConstants.GUTTER_X },
                direction: GridRowDirection.Row
            });
            GridRow.debugLine("products/phone/src/main/ets/pages/Index.ets(62:7)", "phone");
            GridRow.padding({
                top: { "id": 100663304, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                left: { "id": 100663302, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: { "id": 100663303, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.SPAN_SM,
                    md: BreakpointConstants.SPAN_MD,
                    lg: BreakpointConstants.SPAN_LG
                },
                offset: {
                    md: BreakpointConstants.OFFSET_MD,
                    lg: BreakpointConstants.OFFSET_LG
                }
            });
            GridCol.debugLine("products/phone/src/main/ets/pages/Index.ets(75:9)", "phone");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: HomeConstants.COLUMN_SPACE });
            Column.debugLine("products/phone/src/main/ets/pages/Index.ets(86:11)", "phone");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("products/phone/src/main/ets/pages/Index.ets(88:15)", "phone");
                    Column.width(StyleConstants.FULL_WIDTH);
                    Column.height({ "id": 100663308, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Column.backgroundImage(item.icon);
                    Column.backgroundImageSize({
                        width: StyleConstants.FULL_WIDTH,
                        height: { "id": 100663308, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                    });
                    Column.borderRadius({ "id": 100663307, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Column.padding({ "id": 100663309, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Column.alignItems(HorizontalAlign.Start);
                    Column.justifyContent(FlexAlign.SpaceBetween);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(89:17)", "phone");
                    Text.fontSize({ "id": 100663310, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Text.fontColor(Color.White);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.description);
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(92:17)", "phone");
                    Text.fontSize({ "id": 100663305, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Text.opacity(HomeConstants.TEXT_OPACITY);
                    Text.fontColor(Color.White);
                    Text.margin({
                        top: { "id": 100663306, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                    });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("products/phone/src/main/ets/pages/Index.ets(99:17)", "phone");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("products/phone/src/main/ets/pages/Index.ets(100:17)", "phone");
                    Column.alignItems(HorizontalAlign.End);
                    Column.width(StyleConstants.FULL_WIDTH);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithChild();
                    Button.debugLine("products/phone/src/main/ets/pages/Index.ets(101:19)", "phone");
                    Button.backgroundColor({ "id": 100663321, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Button.borderRadius({ "id": 100663298, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Button.width({ "id": 100663301, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Button.height({ "id": 100663300, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Button.onClick(() => {
                        this.pageIndexInfos.pushPathByName(item.url, null);
                    });
                }, Button);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.button);
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(102:21)", "phone");
                    Text.fontSize({ "id": 100663299, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
                    Text.fontColor(Color.White);
                }, Text);
                Text.pop();
                Button.pop();
                Column.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.indexItemList, forEachItemGenFunction, (item: IndexItem, index?: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.music.musichome", moduleName: "phone", pagePath: "pages/Index", pageFullPath: "products/phone/src/main/ets/pages/Index", integratedHsp: "false" });
