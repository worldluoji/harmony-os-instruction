import { AbilityStage,Want } from '@kit.AbilityKit';
import Logger from '../common/Logger';

const TAG = '[Sample_StartMode]';

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    Logger.info(TAG, 'MyAbilityStage onCreate');
  }

  /*
   * 如果是SpecifiedAbility，业务逻辑会根据参数返回一个字符串Key，用于标识当前UIAbility实例。
   * 如果返回的Key已经对应一个已启动的UIAbility实例，系统会将该UIAbility实例拉回前台并获焦，而不会创建新的实例。
   * 如果返回的Key没有对应已启动的UIAbility实例，则系统会创建新的UIAbility实例并启动。
   *
   * 启动日志如下：
   * [Sample_StartMode], MyAbilityStage onCreate
   * [Sample_StartMode], MyAbilityStage onAcceptWant start
   * [Sample_StartMode], MainAbility
   * [Sample_StartMode], MainAbility onCreate
   * [Sample_StartMode], MainAbility onWindowStageCreate
   * [Sample_StartMode], MainAbility onForeground
   * [Sample_StartMode], Succeeded in loading the content. Data: undefined
   * */
  onAcceptWant(want: Want) {
    Logger.info(TAG, 'MyAbilityStage onAcceptWant start');
    Logger.info(TAG, want.abilityName || 'default');
    if (want && want.abilityName === 'SpecifiedAbility') {
      if (want.parameters) {
        return `SpecifiedAbility${want.parameters.foodItemId}`;
      }
    }
    return '';
  }
}