
import { UIAbility,AbilityConstant,Want,Context } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import Logger from '../common/Logger';

const TAG = '[Sample_StartMode]';

interface Data {
  context: Context;
  launchWant: Want;
}

/* 执行顺序打印：
 * [Sample_StartMode], MainAbility onCreate
 * [Sample_StartMode], MainAbility onWindowStageCreate
 * [Sample_StartMode], MainAbility onForeground
 * */
export default class MainAbility extends UIAbility {
  getAbilityDataCallback: Function | undefined = undefined;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, 'MainAbility onCreate');
    // eventHub是鸿蒙系统提供的一个事件处理机制，允许不同组件之间进行通信。这里注册了一个事件监听器，监听名为"getAbilityData"的事件。
    this.context.eventHub.on("getAbilityData", this.getAbilityDataCallback = (data: Data): void => {
      Logger.info(TAG, 'MainAbility' + JSON.stringify(data));
      data.context = this.context;
      data.launchWant = want;
    })
  }

  onDestroy(): void {
    Logger.info(TAG, 'MainAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info(TAG, 'MainAbility onWindowStageCreate');

    windowStage.loadContent('pages/Home', (err, data) => {
      if (err.code) {
        Logger.info(TAG, 'Failed to load the content. Cause:' + JSON.stringify(err));
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content. Data: ' + JSON.stringify(data));
    })
  }
  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    Logger.info(TAG, 'MainAbility onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    Logger.info(TAG, 'MainAbility onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    Logger.info(TAG, 'MainAbility onBackground');
  }
}
