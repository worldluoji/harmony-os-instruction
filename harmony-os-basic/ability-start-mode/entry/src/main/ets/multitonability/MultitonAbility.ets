
import { UIAbility,AbilityConstant,Want,Context } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import Logger from '../common/Logger';

const TAG = '[Sample_StartMode]';

interface Data {
  context: Context;
  launchWant: Want;
}

export default class MultitonAbility extends UIAbility {
  getAbilityDataCallback: Function | undefined = undefined;

  /*
   * want为UIAbility实例启动的入口参数
   * 示例中的context的获取方式请参见获取UIAbility的上下文信息。
   * https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/uiability-usage-V5#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF
   * */
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, 'MultitonAbility onCreate');
    const that = this;
    this.context.eventHub.on('getAbilityData', this.getAbilityDataCallback = (data: Data): void => {
      Logger.info(TAG, 'MainAbility' + JSON.stringify(data));
      data.context = that.context;
      data.launchWant = want;
    })
  }

  onDestroy() {
    Logger.info(TAG, 'MultitonAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info(TAG, 'MultitonAbility onWindowStageCreate');

    windowStage.loadContent('pages/FoodDetail', (err, data) => {
      if (err.code) {
        Logger.info(TAG, 'Failed to load the content. Cause:' + JSON.stringify(err));
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content. Data: ' + JSON.stringify(data));
    })
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    Logger.info(TAG, 'MultitonAbility onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    Logger.info(TAG, 'MultitonAbility onForeground');
  }

  onBackground() {
    // Ability has back to background
    Logger.info(TAG, 'MultitonAbility onBackground');
  }
}
