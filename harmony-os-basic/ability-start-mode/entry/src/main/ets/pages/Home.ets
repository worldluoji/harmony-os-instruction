
import { FoodInfo } from '../model/DataModels';
import { getFoodsData } from '../model/DataUtil';
import { FoodListItem } from './component/FoodListItem';
import Constant from '../common/Constants';

@Entry
@Component
struct Home {
  private foodList: Array<FoodInfo>[] = getFoodsData();

  build() {
    Column() {
      Text($r("app.string.startMode"))
        .width(Constant.FULL_PERCENT)
        .height(Constant.TEN_PERCENT)
        .fontWeight(Constant.FONT_WEIGHT_MD)
        .padding($r('app.integer.padding_normal_sm1'))
        .fontSize($r('app.integer.font_size_normal_md1'))
      Column() {
        List() {
          ForEach(this.foodList, (item: FoodInfo[], index) => {
            ListItem() {
              Column() {
                if (index === Constant.DEFAULT_ZERO) {
                  FoodListComp({
                    modeIntro: $r("app.string.multiton"),
                    modeName: 'multiton',
                    foodsList: item,
                    foodListIndex: index
                  })
                } else if (index === Constant.DEFAULT_ONE) {
                  FoodListComp({
                    modeIntro: $r("app.string.specified"),
                    modeName: 'specified',
                    foodsList: item,
                    foodListIndex: index
                  })
                } else {
                  FoodListComp({
                    modeIntro: $r("app.string.singleton"),
                    modeName: 'sinleton',
                    foodsList: item,
                    foodListIndex: index
                  })
                }
              }.justifyContent(FlexAlign.Center)
            }
          })
        }
      }
    }
    .width(Constant.FULL_PERCENT)
    .height(Constant.FULL_PERCENT)
    .backgroundColor($r('app.color.back_ground_color'))
  }
}

@Component
struct FoodListComp {
  private modeIntro: Resource = {
    bundleName: '',
    moduleName: '',
    id: Constant.DEFAULT_ZERO
  }
  private foodsList: Array<FoodInfo> = [];
  private modeName: string = '';
  private foodListIndex: number = Constant.DEFAULT_ZERO;

  build() {
    Column() {
      Row() {
        Text(this.modeIntro)
          .fontSize($r('app.integer.font_size_normal_sm1'))
          .fontWeight(Constant.FONT_WEIGHT_MD)
          .fontColor($r('app.color.font_color_normal1'))

        Text(` ${this.modeName}`)
          .fontSize($r('app.integer.font_size_normal_sm1'))
          .fontWeight(Constant.FONT_WEIGHT_MD)
          .fontColor($r('app.color.font_color_normal1'))
        Blank()
      }
      .width(Constant.FULL_PERCENT)
      .height($r('app.integer.height_normal_md1'))
      .padding({
        left: $r('app.integer.padding_normal_sm1'),
        top: $r('app.integer.padding_normal_sm1')
      })

      ForEach(this.foodsList, (item: FoodInfo, index) => {
        FoodListItem({
          foodItem: item,
          foodItemIndex: index,
          modeName: this.modeName,
          foodListIndex: this.foodListIndex
        })
      })
    }
    .width(Constant.NINETY_FOUR_PERCENT)
    .borderRadius(Constant.BORDER_RADIUS_NORMAL_MD)
    .margin($r('app.integer.margin_normal'))
    .padding({ bottom: $r('app.integer.padding_normal_sm1') })
    .backgroundColor($r('app.color.white'))
  }
}