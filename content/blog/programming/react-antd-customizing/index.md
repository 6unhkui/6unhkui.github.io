---
category : React
title: CRA 프로젝트에서 Ant Design 커스터마이징하기
date: "2020-09-07"
tags : ["React", "Antd"]
featuredImage: thumbnail.png
---
UI 라이브러리로 Ant Design을 사용하던 중, primary color를 프로젝트에 맞게 변경하는 작업이 필요했다.<br/>
craco 모듈을 사용하면 CRA 프로젝트의 webpack 설정을 eject 하지 않고 오버라이딩 하는 방법으로 변경 할 수 있다.<br/><br/>

#### 1. 라이브러리 설치
```shell
$ yarn add @craco/craco craco-less craco-antd
```
   
#### 2. craco.config.js 생성
프로젝트 루트 경로에 `craco.config.js` 파일을 생성한다.
```javascript:title=craco.config.js
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#7D4CDB"
        }
      }
    }
  ]
};
```

#### 3. package.json의 script 수정
```json:title=package.json
{
  ...
  "scripts": {
    "start": "craco start",
    "build": "craco build"
  },
  ...
}
```

# 설정 값을 변수로 관리하는 방법
위 과정에서 하드코딩 변수를 less 변수로서 관리하고 싶다면 아래 과정을 추가로 진행한다.

#### 1. 라이브러리 설치
antd는 css 전처리기로 less를 사용한다. less로 정의된 변수를 오버라이딩 해야하기 때문에 Less 모듈을 설치한다.
```shell
$ yarn add less less-loader
```

#### 2. craco.config.js 파일 수정
```diff:title=craco.config.js
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [{ plugin: CracoAntDesignPlugin }]
};

const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
-      options: {
-        customizeTheme: {
-          "@primary-color": "#7D4CDB"
-        }
-      }
    }
  ]
};
```

#### 3. antd.customize.less 파일 작성
프로젝트 루트 경로에 `antd.customize.less` 파일을 생성하고 원하는 변수 값을 지정한다
```less:title=antd.customize.less
// -------- Colors -----------
@primary-color: #7D4CDB;

// Base Scaffolding Variables
@border-radius-base: 6px;

// Buttons
@btn-font-weight: 500;
```
- 변수 목록은 Ant Design 깃헙을 참고한다 [바로가기](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less?spm=a2c6h.14275010.0.0.469b1f01EeI6OI&file=default.less)

# 참고
- [craco-antd npm document](https://www.npmjs.com/package/craco-antd)
