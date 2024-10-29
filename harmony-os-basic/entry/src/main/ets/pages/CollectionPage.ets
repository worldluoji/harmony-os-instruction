import { collections } from '@kit.ArkTS';
import Logger from '../common/utils/Logger';

@Entry
@Component
struct CollectionPage {
  @State message: string = 'Hello ArkTS Collection';
  build() {
    Column() {
      Text(this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          const arr = new collections.Array<number>();
          arr.push(1);
          arr.push(2);
          arr.push(3);
          Logger.info(arr[2] + '');

          const ma = new collections.Map<number, string>();
          ma.set(1, 'one');
          ma.set(2, 'two');
          ma.set(3, 'three');
          Logger.info(ma.get(1) + '');

          const set = new collections.Set<string>();
          set.add('one');
          set.add('one');
          set.add('two');
          Logger.info(set.has('one') + '');

        })
        .width('100%')
    }
  }
}