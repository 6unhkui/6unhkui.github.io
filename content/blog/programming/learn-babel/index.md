---
category : Front-End
title: "바벨(Babel) 개념 잡기"
date: "2021-02-02"
tags : ["Front-End", "Babel"]
featuredImage: thumbnail.png
---

# 바벨
바벨은 **자바스크립트 최신 문법(ECMAScript 2015+)을 최대한 많은 브라우저에서 호환 가능** 하도록 변환해주는 도구다.<br/><br/>

이 코드는 ES6의 화살표 함수를 사용하고 있다. IE 같은 구형 브라우저에서는 이런 최신 문법의 코드가 동작하지 않을 수 있다.
```javascript
const sum = (a, b) => a + b;
console.log(sum(2, 4));
```
바벨을 사용하면 다음과 같이 **ES5 사양으로 변환**할 수 있다.
```javascript
"use strict";

var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(2, 4));
```

이처럼 바벨은 ES6+/ES.NEXT로 구현된 최신 사양의 소스 코드를 **IE 같은 구형 브라우저에서도 동작하는 ES5 사양의 소스 코드로 변환(트랜스 파일링)**해준다.

# 바벨 사용해보기
### 1. 샘플 코드 작성
```javascript:title=src/Animal.js
export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```
```javascript:title=src/app.js
import {Animal} from './Animal';

const dog = new Animal('dubu', 2);
const cat = new Animal('kitty', 5);
const rabbit = new Animal('bunny', 3);

const animals = new Array(dog, cat, rabbit);

const sumOfAge = animals.reduce((acc, cur) => acc + cur.age, 0);
console.log(sumOfAge);
```

### 2. 패키지 설치
```shell
# 터미널에서 바벨 명령어를 사용하기 위해 @babel/cli로 함께 설치한다.
$ npm install @babel/core @babel/cli -D
```
한가지 알아둬야 할 점은 바벨은 컴파일러다. (소스 코드 => 결과물 코드로 변환)<br/>
바벨은 다른 컴파일러들과 마찬가지로 3가지 단계를 거쳐 컴파일을 수행한다.
1. **파싱(Parsing)**
2. **변환(Transforming)**
3. **출력(Printing)**

바벨 코어는 ``const bable = code => code;``와 같이 구문을 분석하고 동일한 코드를 다시 생성한다.<br/>
즉, **변환 과정에서 따로 로직을 수행하지 않고 파싱과 출력만 거치는 것**이다.<br/>
이 **변환 과정을 수행**하는 것이 바로 **플러그인**이다.<br/><br/>

샘플 코드에서 화살표 함수와 클래스를 사용했기 때문에 이를 변환해주는 플러그인을 추가로 설치한다.
```shell
$ npm install @babel/plugin-transform-arrow-functions @babel/plugin-transform-classes -D
```

### 3. babel 설정 파일 작성
프로젝트 루트 경로에 ``babel.config.js``라는 이름의 설정 파일을 작성하면 자동으로 설정이 적용된다.
```javascript:title=babel.config.js
module.exports = {
    plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-classes"]
}
```
만약 바벨 v7.8.0 이상의 버전을 사용한다면 ``babel.config.json`` 이름으로 json 형식의 설정 파일도 지원한다.

### 4. script 추가
```json:title=package.json
"scripts": {
  "build": "babel src -d dist"
}
```
src 디렉토리 아래 있는 모든 파일을 트랜스 파일링 한 후 dist 디렉토리에 저장한다는 명령어이다.

### 5. build 후 결과 확인하기
```shell
$ npm run build
```
dist 디렉토리에 정상적으로 트랜스 파일링 된 결과물이 생성되었다.
```javascript:title=dist/Animal.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export let Animal = function Animal(name, age) {
  _classCallCheck(this, Animal);

  this.name = name;
  this.age = age;
};
```
```javascript:title=dist/app.js
import { Animal } from './Animal';
const dog = new Animal('dubu', 2);
const cat = new Animal('kitty', 5);
const rabbit = new Animal('bunny', 3);
const animals = new Array(dog, cat, rabbit);
const sumOfAge = animals.reduce(function (acc, cur) {
  return acc + cur.age;
}, 0);
console.log(sumOfAge);
```

# 프리셋
실제 개발 환경에서 수많은 플러그인을 일일히 조립하는 것도 힘든 일이다.<br/>
주로 사용되는 **플러그인들을 미리 모아 놓은 것**이 바로 **프리셋**이다.<br/>
바벨이 제공하는 공식 바벨 프리셋은 다음과 같다.<br/>

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

<br/>

이 중에서 제일 많이 사용되는 프리셋은 **@babel/preset-env**으로,<br/>
필요한 플러그인들을 프로젝트 지원 환경에 맞게 동적으로 결정하는 설정도 지원해준다.

## 프리셋 사용해보기
### 1. 패키지 설치
```shell
$ npm install @babel/preset-env -D
```

### 2. babel 설정 파일 수정
```diff:title=babel.config.js
module.exports = {
+   presets: ["@babel/preset-env"],
-   plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-classes"]
}
```
### 3. build 후 결과 확인하기
빌드한 결과물은 아래와 같다.

```javascript:title=dist/Animal.js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal(name, age) {
  _classCallCheck(this, Animal);

  this.name = name;
  this.age = age;
};

exports.Animal = Animal;
```
```javascript:title=dist/app.js
"use strict";

var _Animal = require("./Animal");

var dog = new _Animal.Animal('dubu', 2);
var cat = new _Animal.Animal('kitty', 5);
var rabbit = new _Animal.Animal('bunny', 3);
var animals = new Array(dog, cat, rabbit);
var sumOfAge = animals.reduce(function (acc, cur) {
  return acc + cur.age;
}, 0);
console.log(sumOfAge);
```

<br/>

app.js 파일을 실행해보면 정상적으로 결과가 출력된다
```shell
$ node dist/app.js

10
```

하지만 이건 Node.js 환경에서 동작한 것이고 바벨이 모듈을 트랜스파일링 한 것도 Node.js가 기본 지원하는 CommonJS 방식의 모듈 로딩 시스템에 따른 것이다. 브라우저는 CommonJS 방식의 require 함수를 지원하지 않으므로 브라우저에서 이 파일을 실행하면 에러가 발생한다.<br/>
브라우저에서 지원하는 ESM 방식으로 설정할 수도 있지만, [웹팩(Webpack) 개념 잡기]에서 살펴보았듯이 ESM을 사용하는 것도 문제가 된다.<br/><br/>

이를 해결하기 위해 웹팩을 사용한다. 웹팩에 바벨을 적용하면 js 파일은 원하는대로 ES5 문법으로 트랜스 파일링 할 수 있고,<br/>
하나의 js 파일로 여러 모듈을 번들링해주기 때문에 별도의 모듈 로더가 필요하지 않다.

# 웹팩에 바벨 적용하기
### 1. 패키지 설치
```shell
$ npm install webpack webpack-cli babel-loader -D
```

### 2. script 수정
```json:title=package.json
"scripts": {
  "build": "webpack"
}
```

### 3. 웹팩 설정 추가
```javascript:title=webpack.config.js 
const path = require('path');

module.exports = {
    module : {
        rules : [
            {
                test : /\.js$/g, 
                exclude: /node_modules/, 
                use : ['babel-loader']
            }
        ]
    }
}
```
node_modules 디렉토리에 있는 패키지들은 이미 최적화가 되어있는 코드이므로 바벨 대상에서 제외시켜준다.

### 4. build 후 결과 확인하기
ES5 사양의 소스 코드로 변환과 소스 코드 번들링이 정상적으로 수행되었다.

```javascript:title=dist/main.bundle.js
(() => { // webpackBootstrap
    // ........... 중략 ...........
    var Animal = function Animal(name, age) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.age = age;
    };

    // ........... 중략 ...........

    var dog = new _Animal__WEBPACK_IMPORTED_MODULE_0__.Animal('dubu', 2);
    var cat = new _Animal__WEBPACK_IMPORTED_MODULE_0__.Animal('kitty', 5);
    var rabbit = new _Animal__WEBPACK_IMPORTED_MODULE_0__.Animal('bunny', 3);
    var animals = new Array(dog, cat, rabbit);
    var sumOfAge = animals.reduce(function (acc, cur) {
        return acc + cur.age;
    }, 0);
    console.log(sumOfAge);
    })();
    // ........... 중략 ...........
)();
```

# 폴리필(Polyfill)
바벨을 사용해 ES6+/ES.NEXT 사양의 소스 코드를 ES5 사양의 소스 코드로 트랜스파일링 해도 브라우저가 지원하지 않는 코드가 남아있을 수 있다.<br/>
예를 들어 Promise는 **ES5 사양의 코드로 대체 할 수 없다.** 이를 지원해주는 것이 **폴리필**이다.<br/>
폴리필을 적용하는 방법은 다양하지만 그 중 **@babel/preset-env 프리셋**을 이용하는 방법이 있다.<br/>
@babel/preset-env은 옵션 값에 따라 **타깃 브라우저를 정하면 그에 맞게 플러그인을 설정**하고, **원하는 방법으로 core-js 모듈을 삽입**해준다.<br/>
- ``core-js`` : 다양한 폴리필을 제공해주는 라이브러리

### 1. 바벨 설정 파일 수정
```javascript:title=babel.config.js
module.exports = {
    presets: [
        ["@babel/preset-env", {"useBuiltIns" : "usage", "corejs" : 2}]
    ],
}
```
- ``useBuiltIns`` : 폴리필 삽입 방식을 설정하는 옵션으로, 'usage', 'entry', 'false' 값이 있다.<br/>
   'usage'은 실제 사용하는 폴리필만 삽입한다.
- ``corejs`` : core-js 버전 설정

### 2. 적용 확인하기
```shell
$ npx babel src/app.js 

"use strict";

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

Promise.resolve([1, 2, 3]).then(console.log);
```
Promise 문법을 사용한 소스 코드를 바벨로 트랜스 파일링 한 결과
실제 사용된 core-js 모듈만 정상적으로 삽입 됨을 알 수 있다.


# Reference
- [김정환님의 프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
- [모던 자바스크립트 Deep Dive](http://www.yes24.com/Product/Goods/92742567)