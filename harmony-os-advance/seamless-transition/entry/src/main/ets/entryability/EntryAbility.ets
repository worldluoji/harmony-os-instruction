/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { commonType, distributedDataObject } from '@kit.ArkData';
import { window } from '@kit.ArkUI';
import Logger from '../common/utils/Logger';
import { CommonConstants } from '../common/constants/CommonConstants';
import { AppendixBean } from '../viewmodel/AppendixItem';
import { MailInfo } from '../viewmodel/MailInfo';
import { fileIo, fileUri } from '@kit.CoreFileKit';
import { JSON } from '@kit.ArkTS';

export default class EntryAbility extends UIAbility {
  private distributedObject: distributedDataObject.DataObject | undefined = undefined;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('EntryAbility', 'Ability onCreate');
    this.restoreDistributedObject(want, launchParam);
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('EntryAbility', 'Ability onNewWant');
    this.restoreDistributedObject(want, launchParam);
  }

  /**
   * The peer device receives data.
   * @param want
   * @param launchParam
   * @returns
   */
  async restoreDistributedObject(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {
    if (launchParam.launchReason !== AbilityConstant.LaunchReason.CONTINUATION) {
      return;
    }
    AppStorage.setOrCreate<string>('isContinuation', CommonConstants.CAN_CONTINUATION);
    AppStorage.setOrCreate<Array<AppendixBean>>('appendix', JSON.parse(want.parameters?.appendix as string) as Array<AppendixBean>);
    // Obtain the session ID of a distributed data object.

    let mailInfo: MailInfo = new MailInfo(undefined, undefined, undefined, undefined, undefined);
    this.distributedObject = distributedDataObject.create(this.context, mailInfo);
    // Add a data restored listener.
    this.distributedObject.on('status', (sessionId: string, networkId: string, status: 'online' | 'offline' | 'restored') => {
      Logger.info('EntryAbility', 'status changed ' + sessionId + ' ' + status + ' ' + networkId);
      if (status === 'restored') {
        if (!this.distributedObject) {
          return;
        }
        AppStorage.setOrCreate('recipient', this.distributedObject['recipient']);
        AppStorage.setOrCreate('sender', this.distributedObject['sender']);
        AppStorage.setOrCreate('subject', this.distributedObject['subject']);
        AppStorage.setOrCreate('emailContent', this.distributedObject['emailContent']);
        AppStorage.setOrCreate('attachments', this.distributedObject['attachments']);
        let attachments = this.distributedObject['attachments'] as commonType.Assets;
        Logger.info('this.distributedObject[attachments] ' + JSON.stringify(this.distributedObject['attachments']))
        for (const attachment of attachments) {
          this.fileCopy(attachment);
        }
      }
    });
    let sessionId : string = want.parameters?.distributedSessionId as string;
    Logger.info('sessionId' +　sessionId);
    this.distributedObject.setSessionId(sessionId);
    this.context.restoreWindowStage(new LocalStorage());
  }

  async onContinue(wantParam: Record<string, Object | undefined>): Promise<AbilityConstant.OnContinueResult> {
    wantParam.appendix = JSON.stringify(AppStorage.get<Array<AppendixBean>>('appendix'));
    try {
      // Generate the session ID of the distributed data object.
      let sessionId: string = distributedDataObject.genSessionId();
      wantParam.distributedSessionId = sessionId;

      let appendix = AppStorage.get<Array<AppendixBean>>('appendix');
      let assets: commonType.Assets = [];
      if (appendix) {
        for (let i = 0; i < appendix.length; i++) {
          let append = appendix[i];
          let attachment: commonType.Asset = this.getAssetInfo(append);
          assets.push(attachment);
        }
      }

      let mailInfo: MailInfo = new MailInfo(AppStorage.get('recipient'), AppStorage.get('sender'),
        AppStorage.get('subject'), AppStorage.get('emailContent'), assets);
      let source = mailInfo.flatAssets();
      this.distributedObject = distributedDataObject.create(this.context, source);
      this.distributedObject.setSessionId(sessionId);
      await this.distributedObject.save(wantParam.targetDevice as string).then(() => {
        Logger.info('onContinue distributedObject save success');
      }).catch((err: BusinessError) => {
        Logger.error(`Failed to save. Code:${err.code},message:${err.message}`);
      });
    } catch (error) {
      Logger.error('EntryAbility', 'distributedDataObject failed', `code ${(error as BusinessError).code}`);
    }
    return AbilityConstant.OnContinueResult.AGREE;
  }

  /**
   * Copy distributed files.
   * @param attachmentRecord
   * @param key
   */
  private fileCopy(attachment: commonType.Asset) {
    let filePath: string = this.context.distributedFilesDir + '/' + attachment.name;
    let savePath: string = this.context.filesDir + '/' + attachment.name;
    try {
      if (fileIo.accessSync(filePath)) {
        let saveFile = fileIo.openSync(savePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
        let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE);
        let buf: ArrayBuffer = new ArrayBuffer(CommonConstants.FILE_BUFFER_SIZE);
        let readSize = 0;
        let readLen = fileIo.readSync(file.fd, buf, {
          offset: readSize
        });
        while (readLen > 0) {
          readSize += readLen;
          fileIo.writeSync(saveFile.fd, buf);
          readLen = fileIo.readSync(file.fd, buf, {
            offset: readSize
          });
        }
        fileIo.closeSync(file);
        fileIo.closeSync(saveFile);
        Logger.info('EntryAbility', attachment.name + 'synchronized successfully.');
      }
    } catch (error) {
      let err: BusinessError = error as BusinessError;
      Logger.error(`DocumentViewPicker failed with err: ${JSON.stringify(err)}`);
    }
  }

  /**
   * Obtain distributed file asset information.
   * @param append
   * @returns
   */
  private getAssetInfo(append: AppendixBean) {
    let filePath = getContext().distributedFilesDir + '/' + append.fileName;
    fileIo.statSync(filePath);
    let uri: string = fileUri.getUriFromPath(filePath);
    let stat = fileIo.statSync(filePath);
    let attachment: commonType.Asset = {
      name: append.fileName,
      uri: uri,
      path: filePath,
      createTime: stat.ctime.toString(),
      modifyTime: stat.ctime.toString(),
      size: stat.size.toString()
    };
    return attachment;
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability.
    Logger.info('EntryAbility', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/MailHomePage', (err, data) => {

      if (err.code) {
        Logger.error('EntryAbility', 'Failed to load the content, ', `Catch err: ${err}`);
        return;
      }
      Logger.info('EntryAbility', 'Succeeded in loading the content, ', `Data: ${data}`);
    });
  }

  onWindowStageDestroy() {
    Logger.info('EntryAbility', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    Logger.info('EntryAbility', 'Ability onForeground');
  }

  onBackground() {
    Logger.info('EntryAbility', 'Ability onBackground');
  }

  onDestroy() {
    Logger.info('EntryAbility', 'Ability onDestroy');
  }
}
