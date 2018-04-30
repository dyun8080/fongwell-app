# 基于Node和webpack的项目基本构建

```bash
- 基于TypeScript，React，mobx，antd的后台管理项目
- 支持ECMAScript最新特性：如异步函数，动态导入，装饰器；
- 语言编译顺序：TypeScript ==> ES7 ==> 通过babelrc转ES5（为了antd组件按需加载）
```


## Contains

- [x] [Typescript](https://www.typescriptlang.org/) 2.8
- [x] [React](https://facebook.github.io/react/) 16
- [x] [React Router](https://github.com/ReactTraining/react-router) 4.2
- [x] [Mobx](https://github.com/mobxjs/mobx) 4.2
- [x] [Mobx React](https://github.com/mobxjs/mobx-react) 5.0
- [x] [Mobx React Router](https://github.com/alisd23/mobx-react-router/)
- [x] [ant-design](https://github.com/ant-design/ant-design)

### Build tools

- [x] [Webpack](https://webpack.github.io) 4.6
  - [x] [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [x] [PostCSS Loader](https://github.com/postcss/postcss-loader)
  - [x] [CSS next](https://github.com/MoOx/postcss-cssnext)
  - [x] [CSS modules](https://github.com/css-modules/css-modules)
- [x] [Babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```
