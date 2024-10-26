
import { UIAbility,AbilityConstant,Want,Context } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import Logger from '../common/Logger';

const TAG = '[Sample_StartMode]';

interface Data {
  context: Context;
  launchWant: Want;
}

export default class SpecifiedAbility extends UIAbility {
  private want: Want | null = null;
  getAbilityDataCallback: Function | undefined = undefined;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info(TAG, 'SpecifiedAbility onCreate');
    this.want = want;
    this.context.eventHub.on('getAbilityData', this.getAbilityDataCallback = (data: Data): void => {
      Logger.info(TAG, 'SpecifiedAbility' + JSON.stringify(data));
      data.context = this.context;
      data.launchWant = want;
    })
  }

  onDestroy() {
    Logger.info(TAG, 'SpecifiedAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info(TAG, 'SpecifiedAbility onWindowStageCreate');
    let target = this.want && this.want.parameters && this.want.parameters.target ? this.want.parameters.target : 'pages/Home';
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
    Logger.info(TAG, 'SpecifiedAbility onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    Logger.info(TAG, 'SpecifiedAbility onForeground');
  }

  onBackground() {
    // Ability has back to background
    Logger.info(TAG, 'SpecifiedAbility onBackground');
  }
}
