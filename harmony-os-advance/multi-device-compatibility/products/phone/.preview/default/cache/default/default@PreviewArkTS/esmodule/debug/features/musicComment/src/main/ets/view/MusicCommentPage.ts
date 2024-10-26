if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MusicCommentPage_Params {
    currentBp?: string;
    wonderfulComment?: Comment[];
    newComment?: Comment[];
}
import { StyleConstants, BreakpointConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import type { Comment } from '../viewmodel/Comment';
import CommentViewModel from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/viewmodel/CommentViewModel";
import { ListItemComponent } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/view/ListItemComponent";
import { HeadComponent } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/view/HeadComponent";
import { MusicInfoComponent } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/view/MusicInfoComponent";
import { CommonConstants } from "@bundle:com.huawei.music.musichome/phone@musicComment/ets/constants/CommonConstants";
export class MusicCommentPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBp = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBp");
        this.__wonderfulComment = new ObservedPropertyObjectPU(CommentViewModel.getWonderfulReview(), this, "wonderfulComment");
        this.__newComment = new ObservedPropertyObjectPU(CommentViewModel.getNewComment(), this, "newComment");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MusicCommentPage_Params) {
        if (params.wonderfulComment !== undefined) {
            this.wonderfulComment = params.wonderfulComment;
        }
        if (params.newComment !== undefined) {
            this.newComment = params.newComment;
        }
    }
    updateStateVars(params: MusicCommentPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBp.purgeDependencyOnElmtId(rmElmtId);
        this.__wonderfulComment.purgeDependencyOnElmtId(rmElmtId);
        this.__newComment.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBp.aboutToBeDeleted();
        this.__wonderfulComment.aboutToBeDeleted();
        this.__newComment.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBp: ObservedPropertyAbstractPU<string>;
    get currentBp() {
        return this.__currentBp.get();
    }
    set currentBp(newValue: string) {
        this.__currentBp.set(newValue);
    }
    private __wonderfulComment: ObservedPropertyObjectPU<Comment[]>;
    get wonderfulComment() {
        return this.__wonderfulComment.get();
    }
    set wonderfulComment(newValue: Comment[]) {
        this.__wonderfulComment.set(newValue);
    }
    private __newComment: ObservedPropertyObjectPU<Comment[]>;
    get newComment() {
        return this.__newComment.get();
    }
    set newComment(newValue: Comment[]) {
        this.__newComment.set(newValue);
    }
    ShowTitle(title: ResourceStr, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(31:5)", "musiccomment");
            Row.justifyContent(FlexAlign.Start);
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(32:7)", "musiccomment");
            Text.fontSize({ "id": 100663376, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontColor({ "id": 100663439, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.lineHeight({ "id": 100663421, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({
                top: { "id": 100663423, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                bottom: { "id": 100663422, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663407, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663405, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663410, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663408, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
    }
    initialRender() {
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
                gutter: { x: BreakpointConstants.GUTTER_X }
            });
            GridRow.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(51:5)", "musiccomment");
            GridRow.backgroundColor(Color.White);
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.COLUMN_SM,
                    md: BreakpointConstants.COLUMN_MD,
                    lg: BreakpointConstants.COLUMN_LG
                }
            });
            GridCol.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(63:7)", "musiccomment");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(70:9)", "musiccomment");
            Column.height(StyleConstants.FULL_HEIGHT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663407, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663405, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663410, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663408, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new HeadComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicComment/src/main/ets/view/MusicCommentPage.ets", line: 71, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "HeadComponent" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663407, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663405, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663410, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663408, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MusicInfoComponent(this, {}, undefined, elmtId, () => { }, { page: "features/musicComment/src/main/ets/view/MusicCommentPage.ets", line: 79, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MusicInfoComponent" });
        }
        __Common__.pop();
        this.ShowTitle.bind(this)({ "id": 100663427, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(89:11)", "musiccomment");
            List.lanes(this.currentBp === BreakpointConstants.BREAKPOINT_LG ? 2 : 1);
            List.scrollBar(BarState.Off);
            List.divider({
                color: { "id": 100663444, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                strokeWidth: { "id": 100663418, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                startMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663416, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663417, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                endMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 100663379, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            List.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663407, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663406, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663410, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663409, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const comment = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.currentBp === BreakpointConstants.BREAKPOINT_SM ||
                        this.currentBp === BreakpointConstants.BREAKPOINT_MD) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                If.create();
                                if (index && index < CommonConstants.LIST_COUNT) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        {
                                            const itemCreation = (elmtId, isInitialRender) => {
                                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                itemCreation2(elmtId, isInitialRender);
                                                if (!isInitialRender) {
                                                    ListItem.pop();
                                                }
                                                ViewStackProcessor.StopGetAccessRecording();
                                            };
                                            const itemCreation2 = (elmtId, isInitialRender) => {
                                                ListItem.create(deepRenderFunction, true);
                                                ListItem.width(StyleConstants.FULL_WIDTH);
                                                ListItem.padding({
                                                    bottom: { "id": 100663412, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                                                });
                                                ListItem.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(94:19)", "musiccomment");
                                            };
                                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                                itemCreation(elmtId, isInitialRender);
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    __Common__.create();
                                                    __Common__.margin({
                                                        left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 100663406, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                                                        right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 100663409, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                                                    });
                                                }, __Common__);
                                                {
                                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                        if (isInitialRender) {
                                                            let componentCall = new ListItemComponent(this, { item: comment }, undefined, elmtId, () => { }, { page: "features/musicComment/src/main/ets/view/MusicCommentPage.ets", line: 95, col: 21 });
                                                            ViewPU.create(componentCall);
                                                            let paramsLambda = () => {
                                                                return {
                                                                    item: comment
                                                                };
                                                            };
                                                            componentCall.paramsGenerator_ = paramsLambda;
                                                        }
                                                        else {
                                                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                        }
                                                    }, { name: "ListItemComponent" });
                                                }
                                                __Common__.pop();
                                                ListItem.pop();
                                            };
                                            this.observeComponentCreation2(itemCreation2, ListItem);
                                            ListItem.pop();
                                        }
                                    });
                                }
                                else {
                                    this.ifElseBranchUpdateFunction(1, () => {
                                    });
                                }
                            }, If);
                            If.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    itemCreation2(elmtId, isInitialRender);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                    ListItem.width(StyleConstants.FULL_WIDTH);
                                    ListItem.padding({
                                        bottom: { "id": 100663412, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                                    });
                                    ListItem.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(109:17)", "musiccomment");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        __Common__.create();
                                        __Common__.margin({
                                            left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 100663406, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                                            right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 100663409, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                                        });
                                    }, __Common__);
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new ListItemComponent(this, { item: comment }, undefined, elmtId, () => { }, { page: "features/musicComment/src/main/ets/view/MusicCommentPage.ets", line: 110, col: 19 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        item: comment
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                        }, { name: "ListItemComponent" });
                                    }
                                    __Common__.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.wonderfulComment, forEachItemGenFunction, (item: Comment, index?: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.ShowTitle.bind(this)({ "id": 100663426, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(144:11)", "musiccomment");
            List.layoutWeight(1);
            List.lanes(this.currentBp === BreakpointConstants.BREAKPOINT_LG ? 2 : 1);
            List.scrollBar(BarState.Off);
            List.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663407, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663406, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663410, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663409, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
            List.divider({
                color: { "id": 100663444, "type": 10001, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                strokeWidth: { "id": 100663418, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                startMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 100663416, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" } : { "id": 100663417, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                endMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 100663379, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const comment = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.width(StyleConstants.FULL_WIDTH);
                        ListItem.padding({
                            bottom: { "id": 100663412, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                        });
                        ListItem.debugLine("features/musicComment/src/main/ets/view/MusicCommentPage.ets(146:15)", "musiccomment");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            __Common__.create();
                            __Common__.margin({
                                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 100663406, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" },
                                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 100663409, "type": 10002, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }
                            });
                        }, __Common__);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ListItemComponent(this, { item: comment }, undefined, elmtId, () => { }, { page: "features/musicComment/src/main/ets/view/MusicCommentPage.ets", line: 147, col: 17 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            item: comment
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "ListItemComponent" });
                        }
                        __Common__.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.newComment, forEachItemGenFunction, (item: Comment, index?: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
