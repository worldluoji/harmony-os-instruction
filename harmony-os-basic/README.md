# harmony develop instructions
## 1. 目录说明
### 配置文件
包括应用级配置信息、以及Module级配置信息：
- AppScope > app.json5：app.json5配置文件，用于声明应用的全局配置信息，比如应用Bundle名称、应用名称、应用图标、应用版本号等。
- Module_name > src > main > module.json5：module.json5配置文件，用于声明Module基本信息、支持的设备类型、所含的组件信息、运行所需申请的权限等。

### ArkTS源码文件	
Module_name > src > main > ets：用于存放Module的ArkTS源码文件（.ets文件）。

### 资源文件
包括应用级资源文件、以及Module级资源文件，支持图形、多媒体、字符串、布局文件等，详见资源分类与访问。
- AppScope > resources ：用于存放应用需要用到的资源文件。
- Module_name > src > main > resources ：用于存放该Module需要用到的资源文件。

### 其他配置文件
用于编译构建，包括构建配置文件、编译构建任务脚本、混淆规则文件、依赖的共享包信息等。
- build-profile.json5：工程级或Module级的构建配置文件，包括应用签名、产品配置等。
- hvigorfile.ts：应用级或Module级的编译构建任务脚本，开发者可以自定义编译构建工具版本、控制构建行为的配置参数。
- obfuscation-rules.txt：混淆规则文件。混淆开启后，在使用Release模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。
- oh-package.json5：用于存放依赖库的信息，包括所依赖的三方库和共享包。

## 2. ArkTS
->[ArkTS](./notes/1.%20ArkTS.md)

## 3.应用程序入口-UIAbility
->[UIAbility](./notes/2.%20UIAbility.md)

## 4. 组件
->[组件](./notes/3.%20组件.md)

## reference
- https://developer.harmonyos.com/cn/docs/documentation/doc-guides/arkui-overview-0000001281480754