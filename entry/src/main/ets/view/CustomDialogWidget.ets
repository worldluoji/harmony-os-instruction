
import Logger from '../common/utils/Logger';
import HobbyItem from '../viewmodel/HobbyItem';
import DialogUtils from '../common/utils/DialogUtils';
import CommonConstants from '../common/constant/CommonConstant';

@CustomDialog
export default struct CustomDialogWidget {
  @State hobbyItems: HobbyItem[] = [];
  @Link hobbies: string;
  private controller?: CustomDialogController;

  aboutToAppear() {
    let context: Context = getContext(this);
    if (DialogUtils.isEmpty(context) || DialogUtils.isEmpty(context.resourceManager)) {
      Logger.error('context or resourceManager is null');
      return;
    }
    let manager = context.resourceManager;
    manager.getStringArrayValue($r('app.strarray.hobbies_data').id, (error, hobbyArray) => {
      if (!DialogUtils.isEmpty(error)) {
        Logger.error('error = ' + JSON.stringify(error));
      } else {
        hobbyArray.forEach((hobby: string) => {
          let hobbyItem = new HobbyItem();
          hobbyItem.label = hobby;
          hobbyItem.isChecked = false;
          this.hobbyItems.push(hobbyItem);
        });
      }
    });
  }

  /**
   * Set hobbies value
   *
   * @param {HobbyItem[]} hobby item array
   */
  setHobbiesValue(hobbyItems: HobbyItem[]) {
    if (DialogUtils.isEmpty(hobbyItems) || (hobbyItems.length === 0)) {
      Logger.error('hobbyItems length is 0');
      return;
    }
    let hobbiesText: string = '';
    hobbiesText = hobbyItems.filter((isCheckItem: HobbyItem) => isCheckItem?.isChecked)
      .map<string>((checkedItem: HobbyItem) => {
        return checkedItem.label!;
      })
      .join('，');
    if (hobbiesText.length > 0) {
      this.hobbies = hobbiesText;
    }
  }

  build() {
    Column() {
      Text($r('app.string.text_title_hobbies'))
        .fontColor($r('app.color.custom_color'))
        .fontSize($r('app.float.title_hobbies_size'))
        .lineHeight($r('app.float.title_line_height'))
        .fontWeight(500)
        .alignSelf(ItemAlign.Start)
        .margin({ left: $r('app.float.title_left_distance') })
      List() {
        ForEach(this.hobbyItems, (itemHobby: HobbyItem) => {
          ListItem() {
            Row() {
              Text(itemHobby.label)
                .fontSize($r('app.float.label_size'))
                .fontColor($r('app.color.custom_color'))
                .layoutWeight(1)
                .textAlign(TextAlign.Start)
                .fontWeight(500)
                .margin({ left: $r('app.float.label_left_distance') })
              Toggle({ type: ToggleType.Checkbox, isOn: false })
                .onChange((isCheck) => {
                  itemHobby.isChecked = isCheck;
                })
                .width($r('app.float.toggle_size'))
                .height($r('app.float.toggle_size'))
                .margin({ right: $r('app.float.toggle_right_distance') })
            }
            .height($r('app.float.options_height'))
            .margin({
              top: $r('app.float.options_top_distance'),
              bottom: $r('app.float.options_bottom_distance')
            })
          }
        }, (itemHobby: HobbyItem) => JSON.stringify(itemHobby.label))
      }
      .margin({
        top: $r('app.float.list_top_distance'),
        bottom: $r('app.float.list_bottom_distance')
      })
      .divider({
        strokeWidth: $r('app.float.divider_height'),
        color: $r('app.color.divider_color')
      })
      .listDirection(Axis.Vertical)
      .edgeEffect(EdgeEffect.None)
      .width(CommonConstants.FULL_WIDTH)
      .height($r('app.float.options_list_height'))

      Row() {
        Button('Cancel')
          .dialogButtonStyle()
          .onClick(() => {
            this.controller?.close();
          })
        Blank()
          .backgroundColor($r('app.color.custom_blank_color'))
          .width($r('app.float.blank_width'))
          .opacity($r('app.float.blank_opacity'))
          .height($r('app.float.blank_height'))
        Button('Definite')
          .dialogButtonStyle()
          .onClick(() => {
            this.setHobbiesValue(this.hobbyItems);
            this.controller?.close();
          })
      }
    }
    .width(CommonConstants.COMMON_DIALOG_WIDTH)
    .padding({
      top: $r('app.float.dialog_top_distance'),
      bottom: $r('app.float.dialog_bottom_distance')
    })
    .borderRadius($r('app.float.dialog_radius'))
    .backgroundColor(Color.White)
  }
}

@Extend(Button) function dialogButtonStyle() {
  .fontSize($r('app.float.button_text_size'))
  .fontColor($r('app.color.custom_button_color'))
  .layoutWeight(1)
  .backgroundColor(Color.White)
  .width(CommonConstants.FULL_WIDTH)
  .height($r('app.float.button_height'))
}