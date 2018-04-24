# fongwell-app
基于Node和webpack的项目基本构建


## Info

```bash
- 基于TypeScript，React
- 支持ECMAScript最新特性：如异步函数，动态导入，装饰器；
- 语言编译顺序：TypeScript ==> ES7 ==> 通过babelrc转ES5（为了antd组件按需加载）
```

## Basic

|Name|State|
|----|----|
|tslint、eslint|`☑️`|
|按需加载antd组件|`☑️`|
|第三方库提取|`☑️`|
|异步模块加载 ==> import('./AsyncComponent'))|`☑️`|
|less和antd主题色配置|`☑️`|
|css-module|`☑️`|
|常用classes配置|`☑️`|
|基于antd-Icon实现自定义svgIcon|`☑️`|


## Development

|Name|State|
|----|----|
|热替换|`☑️`|


## Production

|Name|State|
|----|----|
|压缩客户端代码|`☑️`|
|代码打包分析|`☑️`|

## 2018-4-24 16:01:46  5f81fda

使用optimization来打包第三方包的时候，必须要在打包主模块的时候出现，不能只在异步加载的模块中出现；
比如：

```bash
optimization.splitChunks.cacheGroups.test: /react|react-dom|moment/,   只出现在asyncComponent会在webpack打包的时候报错
```

## 2018-4-24 16:09:09 94d36fe
#### extract-text-webpack-plugin ==> mini-css-extract-plugin

extract-text-webpack-plugin存在的问题：
1.无法分离异步加载的css文件，（只能提取同步加载的模块）
2.配置不太友好，

换成mini-css-extract-plugin就好了很好，解决了css文件异步加载，还有更加清晰的webpack配置

依然不能解决的问题：异步加载出现多次的css样式/js模块怎么通过重复次数一次加载出来？（optimization还是玩的不6~）

#### 2018-4-24 20:41:47
reduce webpack.config.js ( extract-text-webpack-plugin )


####未解决的问题：
-   babel-polyfill与antd的es6+有一部分重复了。
-   浏览器控制台sourceMap（es7），暂时无法map原ts代码
-   optimization
