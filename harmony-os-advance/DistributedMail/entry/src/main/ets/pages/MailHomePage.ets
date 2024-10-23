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

import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { fileIo, picker } from '@kit.CoreFileKit';
import { image } from '@kit.ImageKit';
import { promptAction } from '@kit.ArkUI';
import Logger from '../common/utils/Logger';
import { CommonConstants } from '../common/constants/CommonConstants';
import { AppendixBean, FileType } from '../viewmodel/AppendixItem';
import { imageIndex } from '../viewmodel/AppendixIndexModel';

@Entry
@Component
struct MailHomePage {
  @StorageLink('recipient') recipient: string = '';
  @StorageLink('sender') sender: string = '';
  @StorageLink('subject') subject: string = '';
  @StorageLink('emailContent') emailContent: string = '';
  @StorageLink('isContinuation') isContinuation: string = CommonConstants.NO_CONTINUATION;
  @State crossEndPicture: PixelMap | undefined = undefined;
  @StorageLink('appendix') appendix: Array<AppendixBean> = [];
  @StorageLink('attachments') attachments: Object = [];
  private appContext: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;
  private distributedPath: string = CommonConstants.MAIL_DISTRIBUTED_PATH;

  build() {
    Column() {
      this.NavigationTitle()
      this.EmailContent()
      this.NavigationToolbar()
    }
    .width(CommonConstants.PERCENTAGE_MAX)
    .height(CommonConstants.PERCENTAGE_MAX)
    .backgroundColor($r('app.color.input_textarea_background'))
    .justifyContent(FlexAlign.SpaceBetween)
  }

  @Builder AddAppendix() {
    Menu() {
      MenuItem({startIcon: $r('app.media.ic_files_grid_txt'), content: $r('app.string.add_txt_file')})
        .onClick(() => {
          this.documentSelect(FileType.TXT);
        })

      MenuItem({startIcon: $r('app.media.ic_files_documents'), content: $r('app.string.add_doc_file')})
        .onClick(() => {
          this.documentSelect(FileType.DOC);
        })

      MenuItem({startIcon: $r('app.media.ic_files_pdf'), content: $r('app.string.add_pdf_file')})
        .onClick(() => {
          this.documentSelect(FileType.PDF);
        })

      MenuItem({startIcon: $r('app.media.ic_files_unknown'), content: $r('app.string.add_other_file')})
        .enabled(false)
    }
  }

  /**
   * Top navigation title bar.
   */
  @Builder NavigationTitle() {
    Row() {
      Row() {
        Image($r('app.media.ic_public_back'))
          .width($r('app.float.common_image_size'))
          .height($r('app.float.common_image_size'))
          .margin({
            right: $r('app.float.navigation_image_margin')
          })
          .onClick(() => {
            this.appContext.terminateSelf();
          })
        Text($r('app.string.new_email_text'))
          .fontColor($r('app.color.text_cursor_color'))
          .fontSize($r('app.float.email_title_size'))
          .fontWeight(FontWeight.Bold)
      }

      Image($r('app.media.ic_send'))
        .width($r('app.float.common_image_size'))
        .height($r('app.float.common_image_size'))
    }
    .width(CommonConstants.PERCENTAGE_MAX)
    .height($r('app.float.navigation_height'))
    .justifyContent(FlexAlign.SpaceBetween)
    .padding({
      left: $r('app.float.common_padding_margin'),
      right: $r('app.float.common_padding_margin')
    })
  }

  /**
   * Bottom toolbar area.
   */
  @Builder NavigationToolbar() {
    Row({ space: CommonConstants.BOTTOM_IMAGE_SPACE }) {
      Image($r('app.media.ic_files_new_folder'))
        .width($r('app.float.common_image_size'))
        .height($r('app.float.common_image_size'))
        .bindMenu(this.AddAppendix)
      Image($r('app.media.ic_photo'))
        .enabled(false)
        .width($r('app.float.common_image_size'))
        .height($r('app.float.common_image_size'))
      Image($r('app.media.ic_at'))
        .width($r('app.float.common_image_size'))
        .height($r('app.float.common_image_size'))
      Image($r('app.media.ic_upload'))
        .width($r('app.float.common_image_size'))
        .height($r('app.float.common_image_size'))
    }
    .width(CommonConstants.PERCENTAGE_MAX)
    .height($r('app.float.navigation_height'))
    .padding({
      left: $r('app.float.common_padding_margin'),
      right: $r('app.float.common_padding_margin')
    })
    .border({
      width: {
        top: $r('app.float.border_divider_width')
      },
      color: $r('app.color.border_divider_color')
    })
  }

  @Builder EmailContent() {
    Column() {
      // Recipient
      Row() {
        Text($r('app.string.recipient_text'))
          .fontColor($r('app.color.content_text_color'))
          .fontSize($r('app.float.text_font_size'))
          .focusable(true)
        TextInput({ text: this.recipient })
          .type(InputType.Email)
          .width(CommonConstants.PERCENTAGE_MAX)
          .backgroundColor($r('app.color.input_textarea_background'))
          .caretColor($r('app.color.text_cursor_color'))
          .onChange((recipientName: string) => {
            this.recipient = recipientName;
            AppStorage.set('recipient', recipientName);
          })
      }
      .width(CommonConstants.PERCENTAGE_MAX)
      .height($r('app.float.content_box_height'))
      .border({
        width: { bottom: $r('app.float.border_divider_width') },
        color: $r('app.color.border_divider_color')
      })

      // Sender
      Row() {
        Text($r('app.string.sender_text'))
          .fontColor($r('app.color.content_text_color'))
          .fontSize($r('app.float.text_font_size'))
        TextInput({ text: this.sender })
          .type(InputType.Email)
          .width(CommonConstants.PERCENTAGE_MAX)
          .backgroundColor($r('app.color.input_textarea_background'))
          .caretColor($r('app.color.text_cursor_color'))
          .onChange((senderName: string) => {
            this.sender = senderName;
            AppStorage.set('sender', senderName);
          })
      }
      .width(CommonConstants.PERCENTAGE_MAX)
      .height($r('app.float.content_box_height'))
      .border({
        width: { bottom: $r('app.float.border_divider_width') },
        color: $r('app.color.border_divider_color')
      })

      // Subject
      Row() {
        Text($r('app.string.subject_text'))
          .fontColor($r('app.color.content_text_color'))
          .fontSize($r('app.float.text_font_size'))
        TextInput({ text: this.subject })
          .width(CommonConstants.PERCENTAGE_MAX)
          .backgroundColor($r('app.color.input_textarea_background'))
          .caretColor($r('app.color.text_cursor_color'))
          .onChange((subjectInfo: string) => {
            this.subject = subjectInfo;
            AppStorage.set('subject', subjectInfo);
          })
      }
      .width(CommonConstants.PERCENTAGE_MAX)
      .height($r('app.float.content_box_height'))
      .border({
        width: { bottom: $r('app.float.border_divider_width') },
        color: $r('app.color.border_divider_color')
      })

      // Appendix
      if (this.appendix.length > 0) {
        Row() {
          Text($r('app.string.appendix_text'))
            .fontColor($r('app.color.content_text_color'))
            .fontSize($r('app.float.text_font_size'))
          List({ space: CommonConstants.APPENDIX_LIST_SPACE }) {
            ForEach(this.appendix, (item: AppendixBean) => {
              ListItem() {
                Row() {
                  Image(imageIndex[item.iconIndex].icon)
                    .width($r('app.float.appendix_list_item_width'))
                    .aspectRatio(1)
                    .margin({ right: $r('app.float.appendix_list_item_margin_right')})
                  Text(item.fileName)
                    .fontSize($r('app.float.appendix_file_name_font_size'))
                }
              }
            })
          }
          .listDirection(Axis.Horizontal)
          .alignListItem(ListItemAlign.Center)
          .divider({
            strokeWidth: 1,
            color: Color.Grey,
            startMargin: CommonConstants.APPENDIX_LIST_START_MARGIN,
            endMargin: CommonConstants.APPENDIX_LIST_END_MARGIN
          })
          .scrollBar(BarState.Off)
        }
        .width(CommonConstants.PERCENTAGE_MAX)
        .height($r('app.float.content_box_height'))
        .border({
          width: { bottom: $r('app.float.border_divider_width') },
          color: $r('app.color.border_divider_color')
        })
      }

      // Message content area.
      Row() {
        TextArea({ text: this.emailContent })
          .height(CommonConstants.PERCENTAGE_MAX)
          .backgroundColor($r('app.color.input_textarea_background'))
          .caretColor($r('app.color.text_cursor_color'))
          .onChange((emailContent: string) => {
            this.emailContent = emailContent;
            AppStorage.set('emailContent', emailContent);
          })
      }
      .layoutWeight(1)
      .alignItems(VerticalAlign.Top)
      .width(CommonConstants.PERCENTAGE_MAX)
      .margin({
        top: $r('app.float.text_image_margin'),
        bottom: $r('app.float.navigation_height')
      })

      // Image display area.
      Row() {
        if (this.crossEndPicture) {
          Image(this.crossEndPicture)
            .height($r('app.float.photo_picture_height'))
            .objectFit(ImageFit.ScaleDown)
            .borderRadius($r('app.float.photo_picture_radius'))
        }
      }
      .width(CommonConstants.PERCENTAGE_MAX)
      .justifyContent(FlexAlign.Start)
    }
    .width(CommonConstants.PERCENTAGE_MAX)
    .layoutWeight(1)
    .padding({
      left: $r('app.float.common_padding_margin'),
      right: $r('app.float.common_padding_margin')
    })
    .margin({ top: $r('app.float.email_content_margin') })
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
    })
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
              message: $r('app.string.alert_message_chinese')
            })
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
    } catch (error) {
      let err: BusinessError = error as BusinessError;
      Logger.error(`DocumentViewPicker failed with err: ${JSON.stringify(err)}`);
    }
  }
}