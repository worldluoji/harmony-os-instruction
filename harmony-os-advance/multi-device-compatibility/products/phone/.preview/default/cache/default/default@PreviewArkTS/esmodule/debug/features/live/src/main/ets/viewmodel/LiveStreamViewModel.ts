import { LiveStream } from "@bundle:com.huawei.music.musichome/phone@live/ets/viewmodel/LiveStream";
export class LiveStreamViewModel {
    getLiveStreamList(): LiveStream[] {
        let LiveStreamList: Array<LiveStream> = [];
        LiveStreamList.push(new LiveStream({ "id": 100663331, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663332, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663373, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }));
        LiveStreamList.push(new LiveStream({ "id": 100663335, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663336, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663338, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }));
        LiveStreamList.push(new LiveStream({ "id": 100663333, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663334, "type": 10003, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }, { "id": 100663330, "type": 20000, params: [], "bundleName": "com.huawei.music.musichome", "moduleName": "phone" }));
        return LiveStreamList;
    }
}
