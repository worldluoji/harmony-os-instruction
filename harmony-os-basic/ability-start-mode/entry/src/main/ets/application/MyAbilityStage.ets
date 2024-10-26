/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AbilityStage,Want } from '@kit.AbilityKit';
import Logger from '../common/Logger';

const TAG = '[Sample_StartMode]';

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    Logger.info(TAG, 'MyAbilityStage onCreate');
  }

  /*
   * 业务逻辑会根据参数返回一个字符串Key，用于标识当前UIAbility实例。
   * 如果返回的Key已经对应一个已启动的UIAbility实例，系统会将该UIAbility实例拉回前台并获焦，而不会创建新的实例。
   * 如果返回的Key没有对应已启动的UIAbility实例，则系统会创建新的UIAbility实例并启动。
   * */
  onAcceptWant(want: Want) {
    Logger.info(TAG, 'MyAbilityStage onAcceptWant start');
    if (want && want.abilityName === 'SpecifiedAbility') {
      if (want.parameters) {
        return `SpecifiedAbility${want.parameters.foodItemId}`;
      }
    }
    return '';
  }
}