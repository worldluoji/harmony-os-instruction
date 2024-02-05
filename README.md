# harmony develop demo
## 1. 目录说明
- AppScope中存放应用全局所需要的资源文件。
- entry是应用的主模块，存放HarmonyOS应用的代码、资源等。
- oh_modules是工程的依赖包，存放工程依赖的源文件。
- build-profile.json5是工程级配置信息，包括签名、产品配置等。
- hvigorfile.ts是工程级编译构建任务脚本，hvigor是基于任务管理机制实现的一款全新的自动化构建工具，主要提供任务注册编排，工程模型管理、配置管理等核心能力。
- oh-package.json5是工程级依赖配置文件，用于记录引入包的配置信息。

<br>

## 2. ArkTS
ArkTS兼容TypeScript语言，拓展了声明式UI、状态管理、并发任务等能力。

以JS/TS为基础，在开发框架的维度，做了如下的架构演进设计：
- 通过基于JS扩展的类Web开发范式，来支持主流的前端开发方式。同步的，在运行时方面，通过渲染引擎的增强（平台无关的自绘制机制、声明式UI后端设计、动态布局/多态UI组件等），语言编译器和运行时的优化增强（代码预编译、高效FFI-Foreign Function Interface、引擎极小化等），进一步提升相关的性能体验，并可部署到不同设备上（包括百KB级内存的轻量设备）。另外，通过平台适配层的设计，构建了跨OS平台的基础设施。
- 通过基于TS扩展的声明式UI开发范式，提供了更简洁更自然的开发体验。在运行时方面，在上述的基础上，结合语言运行时的类型优化，以及渲染运行时的扁平化流水线技术等，进一步提升性能体验。

### 架构
<img src="./notes/ArkUI架构.png" />

### 开发范式
<img src="./notes/ArkTS声明式开发范式.png" />

### 条件渲染
使用if/else进行条件渲染
```
Column() {
   if (this.count > 0) {
       Text('count is positive')
   }
}
```
### 循环渲染
开发框架提供循环渲染（ForEach组件）来迭代数组，并为每个数组项创建相应的组件。
```
ForEach(
  arr: any[], // 用于迭代的数组
  itemGenerator: (item: any, index?: number) => void, // 生成子组件的lambda函数
  keyGenerator?: (item: any, index?: number) => string // 用于给定数组项生成唯一且稳定的键值
)
```

### 组件状态管理装饰器和@Builder装饰器
组件状态管理装饰器用来管理组件中的状态，它们分别是：@State、@Prop、@Link。
- @State装饰的变量是组件内部的状态数据，当这些状态数据被修改时，将会调用所在组件的build方法进行UI刷新。
- @Prop与@State有相同的语义，但初始化方式不同。@Prop装饰的变量必须使用其父组件提供的@State变量进行初始化，允许组件内部修改@Prop变量，但更改不会通知给父组件，即@Prop属于单向数据绑定。
- @Link装饰的变量可以和父组件的@State变量建立双向数据绑定，需要注意的是：@Link变量不能在组件内部进行初始化。
- @Builder装饰的方法用于定义组件的声明式UI描述，在一个自定义组件内快速生成多个布局内容。

### 组件生命周期函数：
自定义组件的生命周期函数用于通知用户该自定义组件的生命周期，这些回调函数是私有的，在运行时由开发框架在特定的时间进行调用，
不能从应用程序中手动调用这些回调函数。 自定义组件生命周期的简化图示：

<img src="./notes/自定义组件生命周期.png" />

需要注意的是，部分生命周期回调函数仅对@Entry修饰的自定义组件生效，它们分别是：onPageShow、onPageHide、onBackPress。

<br>

## reference
- https://developer.harmonyos.com/cn/docs/documentation/doc-guides/arkui-overview-0000001281480754