
import { UIAbility, AbilityConstant, Want, Context } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { emitter } from '@kit.BasicServicesKit';
import Logger from '../common/Logger';
import Constant from '../common/Constants';

const TAG = '[Sample_StartMode]';
const eventId = Constant.DEFAULT_ONE; // 设置一个Id，用来emitter传输

interface Data {
  context: Context;
  launchWant: Want;
}

export default class SingletonAbility extends UIAbility {
  getAbilityDataCallback: Function | undefined = undefined;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    const that = this;
    this.context.eventHub.on('getAbilityData', this.getAbilityDataCallback = (data: Data): void => {
      data.context = that.context;
      data.launchWant = want;
    })
  }

  onDestroy() {
    Logger.info(TAG, 'SingletonAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    Logger.info(TAG, 'SingletonAbility onWindowStageCreate');

    windowStage.loadContent('pages/FoodDetail', (err, data) => {
      if (err.code) {
        Logger.info(TAG, 'Failed to load the content. Cause:' + JSON.stringify(err));
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content. Data: ' + JSON.stringify(data));
    })
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, 'SingletonAbility onNewWant')
    if (want && want.parameters) {
      let eventData: emitter.EventData = {
        data: {
          "foodItemId": null
        }
      }
      let innerEvent: emitter.InnerEvent = {
        eventId,
        priority: emitter.EventPriority.HIGH
      }
      // 对获取到的id进行判断，等于0的话，赋值为1，传到前端，前端根据此id获取对应的数据
      if (want.parameters.foodItemId == 0) {
        want.parameters.foodItemId = 1;
        eventData.data!.foodItemId = want.parameters.foodItemId;
        emitter.emit(innerEvent, eventData);
      } else {
        want.parameters.foodItemId = 0;
        eventData.data!.foodItemId = want.parameters.foodItemId;
        emitter.emit(innerEvent, eventData);
      }
    }
  }

  onWindowStageDestroy() {
    Logger.info(TAG, 'SingletonAbility onWindowStageDestroy');
  }

  onForeground() {
    Logger.info(TAG, 'SingletonAbility onForeground');
  }

  onBackground() {
    // Ability has back to background
    Logger.info(TAG, 'SingletonAbility onBackground');
  }
}
