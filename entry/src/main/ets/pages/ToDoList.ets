import DataModel from '../viewmodel/DataModel';
import CommonConstants from '../common/constant/CommonConstant';
import ToDoItem from '../view/ToDoItem';

// 使用@Entry和@Component装饰的自定义组件作为页面的入口，会在页面加载时首先进行渲染。
@Entry
@Component
struct ToDoList {
  private totalTasks: Array<string> = [];

  aboutToAppear() {
    this.totalTasks = DataModel.getData();
  }

  // 在自定义组件内需要使用build方法来进行UI描述, 如Column和Text都是内置组件，由ArkUI框架提供，ToDoItem为自定义组件，需要开发者使用ArkTS自行声明
  build() {
    Column({ space: CommonConstants.COLUMN_SPACE }) {
      Text($r('app.string.page_title'))
        .fontSize($r('app.float.title_font_size'))
        .fontWeight(FontWeight.Bold)
        .lineHeight($r('app.float.title_font_height'))
        .width(CommonConstants.TITLE_WIDTH)
        .margin({
          top: $r('app.float.title_margin_top'),
          bottom: $r('app.float.title_margin_bottom')
        })
        .textAlign(TextAlign.Start)

      ForEach(this.totalTasks,
        (item: string) => {
          ToDoItem({ content: item })
        },
        (item: string) => JSON.stringify(item)
      )
    }
    .width(CommonConstants.FULL_LENGTH)
    .height(CommonConstants.FULL_LENGTH)
    .backgroundColor($r('app.color.page_background'))
  }
}