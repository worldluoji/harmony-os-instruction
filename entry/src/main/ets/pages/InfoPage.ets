import Context from '@ohos.app.ability.common';
import DialogUtils from '../common/utils/DialogUtils';
import CommonConstants from '../common/constant/CommonConstant';
import TextInputWidget from '../view/TextInputWidget';
import TextCommonWidget from '../view/TextCommonWidget';
import CustomDialogWidget from '../view/CustomDialogWidget';
import Logger from '../common/utils/Logger';

@Entry
@Component
struct HomePage {
  @State birthdate: string = '';
  @State sex: string = '';
  @State hobbies: string = '';
  private sexArray: Resource = $r('app.strarray.sex_array');
  customDialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogWidget({
      hobbies: $hobbies
    }),
    alignment: DialogAlignment.Bottom,
    customStyle: true,
    offset: {
      dx: 0,
      dy: -20
    }
  });

  aboutToAppear() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    this.birthdate = DialogUtils.getBirthDateValue(year, month, day);
    let context = getContext(this);
    if ((DialogUtils.isEmpty(context)) || (DialogUtils.isEmpty(context.resourceManager))) {
      Logger.error('context or resourceManager is null');
      return;
    }
    let manager = context.resourceManager;
    manager.getStringValue($r('app.string.default_sex').id, (error, sexValue) => {
      if (!DialogUtils.isEmpty(error)) {
        Logger.error('error = ' + JSON.stringify(error));
      } else {
        this.sex = sexValue;
      }
    });
  }

  build() {
    Column() {
      Image($r('app.media.ic_back'))
        .width($r('app.float.image_back_size'))
        .height($r('app.float.image_back_size'))
        .alignSelf(ItemAlign.Start)
        .margin({
          left: CommonConstants.BACK_MARGIN_LEFT,
          top: CommonConstants.BACK_MARGIN_TOP
        })
        .onClick(() => {
          let context = getContext(this) as Context.UIAbilityContext;
          DialogUtils.alertDialog(context);
        })
      Image($r('app.media.ic_avatar'))
        .width($r('app.float.avatar_size'))
        .height($r('app.float.avatar_size'))
        .alignSelf(ItemAlign.Center)
        .margin({ top: CommonConstants.AVATAR_MARGIN_TOP })
      Text($r('app.string.text_personal_title'))
        .fontColor(Color.Black)
        .fontSize($r('app.float.personal_font_size'))
        .margin({ top: CommonConstants.PERSONAL_MARGIN_TOP })
        .alignSelf(ItemAlign.Center)
      TextInputWidget({
        inputImage: $r('app.media.ic_nickname'),
        hintText: $r('app.string.text_input_hint')
      })
      TextCommonWidget({
        textImage: $r('app.media.ic_birthdate'),
        title: $r('app.string.title_birthdate'),
        content: $birthdate,
        onItemClick: () => {
          DialogUtils.datePickerDialog((birthValue: string) => {
            this.birthdate = birthValue;
          });
        }
      })
      TextCommonWidget({
        textImage: $r('app.media.ic_sex'),
        title: $r('app.string.title_sex'),
        content: $sex,
        onItemClick: () => {
          DialogUtils.textPickerDialog(this.sexArray, (sexValue: string) => {
            this.sex = sexValue;
          });
        }
      })
      TextInputWidget({
        inputImage: $r('app.media.ic_signature'),
        hintText: $r('app.string.text_input_signature')
      })
      TextCommonWidget({
        textImage: $r('app.media.ic_hobbies'),
        title: $r('app.string.title_hobbies'),
        content: $hobbies,
        onItemClick: () => {
          this.customDialogController.open();
        }
      })
    }
    .backgroundColor($r('app.color.column_background_color'))
    .width(CommonConstants.FULL_WIDTH)
    .height(CommonConstants.FULL_HEIGHT)
  }
}