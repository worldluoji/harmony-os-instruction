import { RouterUrlConstants } from "@bundle:com.huawei.music.musichome/phone@constantsCommon/index";
import IndexItem from "@bundle:com.huawei.music.musichome/phone/ets/viewmodel/IndexItem";
/**
 * Home page information data processing class.
 */
class IndexViewModel {
    /**
     * Data information on the home page.
     *
     * @returns IndexItem array.
     */
    getIndexItemList(): IndexItem[] {
        let IndexItemList: IndexItem[] = [];
        IndexItemList.push(new IndexItem({ "id": 100663319, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663318, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663314, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663324, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, RouterUrlConstants.MUSIC_LIST));
        IndexItemList.push(new IndexItem({ "id": 100663316, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663315, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663313, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663325, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, RouterUrlConstants.LIVE));
        return IndexItemList;
    }
}
export default new IndexViewModel();
