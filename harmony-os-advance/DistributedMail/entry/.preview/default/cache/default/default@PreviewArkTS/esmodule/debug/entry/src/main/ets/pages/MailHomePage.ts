if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MailHomePage_Params {
    recipient?: string;
    sender?: string;
    subject?: string;
    emailContent?: string;
    isContinuation?: string;
    crossEndPicture?: PixelMap | undefined;
    appendix?: Array<AppendixBean>;
    attachments?: Object;
    appContext?: common.UIAbilityContext;
    distributedPath?: string;
}
import type { BusinessError } from "@ohos:base";
import type common from "@ohos:app.ability.common";
import fileIo from "@ohos:file.fs";
import picker from "@ohos:file.picker";
import image from "@ohos:multimedia.image";
import promptAction from "@ohos:promptAction";
import Logger from "@bundle:com.example.distributedmail/entry/ets/common/utils/Logger";
import { CommonConstants } from "@bundle:com.example.distributedmail/entry/ets/common/constants/CommonConstants";
import { FileType } from "@bundle:com.example.distributedmail/entry/ets/viewmodel/AppendixItem";
import type { AppendixBean } from "@bundle:com.example.distributedmail/entry/ets/viewmodel/AppendixItem";
import { imageIndex } from "@bundle:com.example.distributedmail/entry/ets/viewmodel/AppendixIndexModel";
class MailHomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__recipient = this.createStorageLink('recipient', '', "recipient");
        this.__sender = this.createStorageLink('sender', '', "sender");
        this.__subject = this.createStorageLink('subject', '', "subject");
        this.__emailContent = this.createStorageLink('emailContent', '', "emailContent");
        this.__isContinuation = this.createStorageLink('isContinuation', CommonConstants.NO_CONTINUATION, "isContinuation");
        this.__crossEndPicture = new ObservedPropertyObjectPU(undefined, this, "crossEndPicture");
        this.__appendix = this.createStorageLink('appendix', [], "appendix");
        this.__attachments = this.createStorageLink('attachments', [], "attachments");
        this.appContext = getContext(this) as common.UIAbilityContext;
        this.distributedPath = CommonConstants.MAIL_DISTRIBUTED_PATH;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MailHomePage_Params) {
        if (params.crossEndPicture !== undefined) {
            this.crossEndPicture = params.crossEndPicture;
        }
        if (params.appContext !== undefined) {
            this.appContext = params.appContext;
        }
        if (params.distributedPath !== undefined) {
            this.distributedPath = params.distributedPath;
        }
    }
    updateStateVars(params: MailHomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__recipient.purgeDependencyOnElmtId(rmElmtId);
        this.__sender.purgeDependencyOnElmtId(rmElmtId);
        this.__subject.purgeDependencyOnElmtId(rmElmtId);
        this.__emailContent.purgeDependencyOnElmtId(rmElmtId);
        this.__isContinuation.purgeDependencyOnElmtId(rmElmtId);
        this.__crossEndPicture.purgeDependencyOnElmtId(rmElmtId);
        this.__appendix.purgeDependencyOnElmtId(rmElmtId);
        this.__attachments.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__recipient.aboutToBeDeleted();
        this.__sender.aboutToBeDeleted();
        this.__subject.aboutToBeDeleted();
        this.__emailContent.aboutToBeDeleted();
        this.__isContinuation.aboutToBeDeleted();
        this.__crossEndPicture.aboutToBeDeleted();
        this.__appendix.aboutToBeDeleted();
        this.__attachments.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __recipient: ObservedPropertyAbstractPU<string>;
    get recipient() {
        return this.__recipient.get();
    }
    set recipient(newValue: string) {
        this.__recipient.set(newValue);
    }
    private __sender: ObservedPropertyAbstractPU<string>;
    get sender() {
        return this.__sender.get();
    }
    set sender(newValue: string) {
        this.__sender.set(newValue);
    }
    private __subject: ObservedPropertyAbstractPU<string>;
    get subject() {
        return this.__subject.get();
    }
    set subject(newValue: string) {
        this.__subject.set(newValue);
    }
    private __emailContent: ObservedPropertyAbstractPU<string>;
    get emailContent() {
        return this.__emailContent.get();
    }
    set emailContent(newValue: string) {
        this.__emailContent.set(newValue);
    }
    private __isContinuation: ObservedPropertyAbstractPU<string>;
    get isContinuation() {
        return this.__isContinuation.get();
    }
    set isContinuation(newValue: string) {
        this.__isContinuation.set(newValue);
    }
    private __crossEndPicture: ObservedPropertyObjectPU<PixelMap | undefined>;
    get crossEndPicture() {
        return this.__crossEndPicture.get();
    }
    set crossEndPicture(newValue: PixelMap | undefined) {
        this.__crossEndPicture.set(newValue);
    }
    private __appendix: ObservedPropertyAbstractPU<Array<AppendixBean>>;
    get appendix() {
        return this.__appendix.get();
    }
    set appendix(newValue: Array<AppendixBean>) {
        this.__appendix.set(newValue);
    }
    private __attachments: ObservedPropertyAbstractPU<Object>;
    get attachments() {
        return this.__attachments.get();
    }
    set attachments(newValue: Object) {
        this.__attachments.set(newValue);
    }
    private appContext: common.UIAbilityContext;
    private distributedPath: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MailHomePage.ets(41:5)", "entry");
            Column.width(CommonConstants.PERCENTAGE_MAX);
            Column.height(CommonConstants.PERCENTAGE_MAX);
            Column.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        this.NavigationTitle.bind(this)();
        this.EmailContent.bind(this)();
        this.NavigationToolbar.bind(this)();
        Column.pop();
    }
    AddAppendix(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Menu.create();
            Menu.debugLine("entry/src/main/ets/pages/MailHomePage.ets(53:5)", "entry");
        }, Menu);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            MenuItem.create({ startIcon: { "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }, content: { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
            MenuItem.debugLine("entry/src/main/ets/pages/MailHomePage.ets(54:7)", "entry");
            MenuItem.onClick(() => {
                this.documentSelect(FileType.TXT);
            });
        }, MenuItem);
        MenuItem.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            MenuItem.create({ startIcon: { "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }, content: { "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
            MenuItem.debugLine("entry/src/main/ets/pages/MailHomePage.ets(59:7)", "entry");
            MenuItem.onClick(() => {
                this.documentSelect(FileType.DOC);
            });
        }, MenuItem);
        MenuItem.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            MenuItem.create({ startIcon: { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }, content: { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
            MenuItem.debugLine("entry/src/main/ets/pages/MailHomePage.ets(64:7)", "entry");
            MenuItem.onClick(() => {
                this.documentSelect(FileType.PDF);
            });
        }, MenuItem);
        MenuItem.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            MenuItem.create({ startIcon: { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }, content: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
            MenuItem.debugLine("entry/src/main/ets/pages/MailHomePage.ets(69:7)", "entry");
            MenuItem.enabled(false);
        }, MenuItem);
        MenuItem.pop();
        Menu.pop();
    }
    /**
     * Top navigation title bar.
     */
    NavigationTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(78:5)", "entry");
            Row.width(CommonConstants.PERCENTAGE_MAX);
            Row.height({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({
                left: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" },
                right: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(79:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(80:9)", "entry");
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.margin({
                right: { "id": 16777256, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
            Image.onClick(() => {
                this.appContext.terminateSelf();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(89:9)", "entry");
            Text.fontColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.fontSize({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(95:7)", "entry");
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Image);
        Row.pop();
    }
    /**
     * Bottom toolbar area.
     */
    NavigationToolbar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: CommonConstants.BOTTOM_IMAGE_SPACE });
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(112:5)", "entry");
            Row.width(CommonConstants.PERCENTAGE_MAX);
            Row.height({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Row.padding({
                left: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" },
                right: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
            Row.border({
                width: {
                    top: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
                },
                color: { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777266, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(113:7)", "entry");
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.bindMenu({ builder: this.AddAppendix.bind(this) });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(117:7)", "entry");
            Image.enabled(false);
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(121:7)", "entry");
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(124:7)", "entry");
            Image.width({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Image.height({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Image);
        Row.pop();
    }
    EmailContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MailHomePage.ets(143:5)", "entry");
            Column.width(CommonConstants.PERCENTAGE_MAX);
            Column.layoutWeight(1);
            Column.padding({
                left: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" },
                right: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
            Column.margin({ top: { "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Recipient
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(145:7)", "entry");
            // Recipient
            Row.width(CommonConstants.PERCENTAGE_MAX);
            // Recipient
            Row.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            // Recipient
            Row.border({
                width: { bottom: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } },
                color: { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(146:9)", "entry");
            Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.fontSize({ "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.focusable(true);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.recipient });
            TextInput.debugLine("entry/src/main/ets/pages/MailHomePage.ets(150:9)", "entry");
            TextInput.type(InputType.Email);
            TextInput.width(CommonConstants.PERCENTAGE_MAX);
            TextInput.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.caretColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.onChange((recipientName: string) => {
                this.recipient = recipientName;
                AppStorage.set('recipient', recipientName);
            });
        }, TextInput);
        // Recipient
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Sender
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(168:7)", "entry");
            // Sender
            Row.width(CommonConstants.PERCENTAGE_MAX);
            // Sender
            Row.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            // Sender
            Row.border({
                width: { bottom: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } },
                color: { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(169:9)", "entry");
            Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.fontSize({ "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.sender });
            TextInput.debugLine("entry/src/main/ets/pages/MailHomePage.ets(172:9)", "entry");
            TextInput.type(InputType.Email);
            TextInput.width(CommonConstants.PERCENTAGE_MAX);
            TextInput.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.caretColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.onChange((senderName: string) => {
                this.sender = senderName;
                AppStorage.set('sender', senderName);
            });
        }, TextInput);
        // Sender
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Subject
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(190:7)", "entry");
            // Subject
            Row.width(CommonConstants.PERCENTAGE_MAX);
            // Subject
            Row.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            // Subject
            Row.border({
                width: { bottom: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } },
                color: { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(191:9)", "entry");
            Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            Text.fontSize({ "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.subject });
            TextInput.debugLine("entry/src/main/ets/pages/MailHomePage.ets(194:9)", "entry");
            TextInput.width(CommonConstants.PERCENTAGE_MAX);
            TextInput.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.caretColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextInput.onChange((subjectInfo: string) => {
                this.subject = subjectInfo;
                AppStorage.set('subject', subjectInfo);
            });
        }, TextInput);
        // Subject
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Appendix
            if (this.appendix.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(212:9)", "entry");
                        Row.width(CommonConstants.PERCENTAGE_MAX);
                        Row.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                        Row.border({
                            width: { bottom: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } },
                            color: { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
                        });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                        Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(213:11)", "entry");
                        Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                        Text.fontSize({ "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: CommonConstants.APPENDIX_LIST_SPACE });
                        List.debugLine("entry/src/main/ets/pages/MailHomePage.ets(216:11)", "entry");
                        List.listDirection(Axis.Horizontal);
                        List.alignListItem(ListItemAlign.Center);
                        List.divider({
                            strokeWidth: 1,
                            color: Color.Grey,
                            startMargin: CommonConstants.APPENDIX_LIST_START_MARGIN,
                            endMargin: CommonConstants.APPENDIX_LIST_END_MARGIN
                        });
                        List.scrollBar(BarState.Off);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
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
                                    ListItem.debugLine("entry/src/main/ets/pages/MailHomePage.ets(218:15)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Row.create();
                                        Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(219:17)", "entry");
                                    }, Row);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Image.create(imageIndex[item.iconIndex].icon);
                                        Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(220:19)", "entry");
                                        Image.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                                        Image.aspectRatio(1);
                                        Image.margin({ right: { "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" } });
                                    }, Image);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.fileName);
                                        Text.debugLine("entry/src/main/ets/pages/MailHomePage.ets(224:19)", "entry");
                                        Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                                    }, Text);
                                    Text.pop();
                                    Row.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.appendix, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                    Row.pop();
                });
            }
            // Message content area.
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Message content area.
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(249:7)", "entry");
            // Message content area.
            Row.layoutWeight(1);
            // Message content area.
            Row.alignItems(VerticalAlign.Top);
            // Message content area.
            Row.width(CommonConstants.PERCENTAGE_MAX);
            // Message content area.
            Row.margin({
                top: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" },
                bottom: { "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ text: this.emailContent });
            TextArea.debugLine("entry/src/main/ets/pages/MailHomePage.ets(250:9)", "entry");
            TextArea.height(CommonConstants.PERCENTAGE_MAX);
            TextArea.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextArea.caretColor({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
            TextArea.onChange((emailContent: string) => {
                this.emailContent = emailContent;
                AppStorage.set('emailContent', emailContent);
            });
        }, TextArea);
        // Message content area.
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Image display area.
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MailHomePage.ets(268:7)", "entry");
            // Image display area.
            Row.width(CommonConstants.PERCENTAGE_MAX);
            // Image display area.
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.crossEndPicture) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.crossEndPicture);
                        Image.debugLine("entry/src/main/ets/pages/MailHomePage.ets(270:11)", "entry");
                        Image.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                        Image.objectFit(ImageFit.ScaleDown);
                        Image.borderRadius({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // Image display area.
        Row.pop();
        Column.pop();
    }
    /**
     * Rendering pictures.
     *
     * @param buffer Returned image stream of cross-end photographing.
     */
    createPicture(buffer: ArrayBuffer): void {
        let imageSource = image.createImageSource(buffer);
        imageSource.createPixelMap().then((pixelMap) => {
            this.crossEndPicture = pixelMap;
        });
    }
    /**
     * Add appendix from file manager.
     *
     * @param fileType
     */
    documentSelect(fileType: number): void {
        try {
            let DocumentSelectOptions = new picker.DocumentSelectOptions();
            let documentPicker = new picker.DocumentViewPicker();
            documentPicker.select(DocumentSelectOptions).then((DocumentSelectResult: Array<string>) => {
                for (let documentSelectResultElement of DocumentSelectResult) {
                    let buf = new ArrayBuffer(CommonConstants.FILE_BUFFER_SIZE);
                    let readSize = 0;
                    let file = fileIo.openSync(documentSelectResultElement, fileIo.OpenMode.READ_ONLY);
                    let readLen = fileIo.readSync(file.fd, buf, { offset: readSize });
                    // File name is not supported chinese name.
                    let fileName = file.name;
                    if (!fileName.endsWith(imageIndex[fileType].fileType) ||
                        new RegExp("\[\\u4E00-\\u9FA5]|[\\uFE30-\\uFFA0]", "gi").test(fileName)) {
                        promptAction.showToast({
                            message: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.distributedmail", "moduleName": "entry" }
                        });
                        return;
                    }
                    let destination = fileIo.openSync(getContext()
                        .filesDir + '/' + fileName, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
                    let destinationDistribute = fileIo.openSync(getContext()
                        .distributedFilesDir + '/' + fileName, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
                    while (readLen > 0) {
                        readSize += readLen;
                        fileIo.writeSync(destination.fd, buf);
                        fileIo.writeSync(destinationDistribute.fd, buf);
                        readLen = fileIo.readSync(file.fd, buf, { offset: readSize });
                    }
                    fileIo.closeSync(file);
                    fileIo.closeSync(destination);
                    fileIo.closeSync(destinationDistribute);
                    this.appendix.push({ iconIndex: fileType, fileName: fileName });
                }
                Logger.info(`DocumentViewPicker.select successfully, DocumentSelectResult uri: ${JSON.stringify(DocumentSelectResult)}`);
            }).catch((err: BusinessError) => {
                Logger.error(`DocumentViewPicker.select failed with err: ${JSON.stringify(err)}`);
            });
        }
        catch (error) {
            let err: BusinessError = error as BusinessError;
            Logger.error(`DocumentViewPicker failed with err: ${JSON.stringify(err)}`);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MailHomePage";
    }
}
registerNamedRoute(() => new MailHomePage(undefined, {}), "", { bundleName: "com.example.distributedmail", moduleName: "entry", pagePath: "pages/MailHomePage", pageFullPath: "entry/src/main/ets/pages/MailHomePage", integratedHsp: "false" });
