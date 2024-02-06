import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';

// UIAbility是应用程序入口
export default class EntryAbility extends UIAbility {
  // 每一个UIAbility实例都对应持有一个WindowStage实例。 WindowStage为本地窗口管理器，用于管理窗口相关的内容，例如与界面相关的获焦/失焦、可见/不可见。
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    // 设置UI页面加载
    // 设置WindowStage的事件订阅（获焦/失焦、可见/不可见）

    // loadContent接口设置应用要加载的页面
    windowStage.loadContent('pages/ToDoList', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  // 在UIAbility的UI页面可见之前，即UIAbility切换至前台时触发
  onForeground() {
    // 申请系统需要的资源，或者重新申请在onBackground中释放的资源
    // ...
  }

  // onBackground回调，在UIAbility的UI页面完全不可见之后，即UIAbility切换至后台时候触发。
  onBackground() {
    // 释放UI页面不可见时无用的资源，或者在此回调中执行较为耗时的操作
    // 例如状态保存等
    // ...
  }

  // 在UIAbility实例销毁之前，则会先进入onWindowStageDestroy回调，我们可以在该回调中释放UI页面资源。
  onWindowStageDestroy() {
    // 释放UI页面资源
    // ...
  }

  // 在UIAbility销毁时触发
  onDestroy() {
    // 系统资源的释放、数据的保存等
    // ...
  }
}
