import hilog from "@ohos:hilog";
import BackupExtensionAbility from "@ohos:application.BackupExtensionAbility";
import type { BundleVersion } from "@ohos:application.BackupExtensionAbility";
export default class PhoneBackupExtAbility extends BackupExtensionAbility {
    async onBackup() {
        hilog.info(0x0000, 'testTag', 'onBackup ok');
    }
    async onRestore(bundleVersion: BundleVersion) {
        hilog.info(0x0000, 'testTag', 'onRestore ok %{public}s', JSON.stringify(bundleVersion));
    }
}
