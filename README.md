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
|浏览器控制台sourceMap（es7），暂时无法map原ts代码||


## Production

|Name|State|
|----|----|
|压缩客户端代码|`☑️`|
|代码打包分析|`☑️`|

