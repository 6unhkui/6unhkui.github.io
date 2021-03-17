---
category : Javascript
title: "var, let, const 키워드의 차이점"
date: "2020-12-03"
tags : ["Javascript", "Book"]
featuredImage: thumbnail.png
---

> [모던 자바스크립트 Deep Dive](http://www.yes24.com/Product/Goods/92742567)를 읽고 학습한 내용을 간략하게 정리한 글입니다.<br/>
> 자바스크립트 기본 개념과 동작 원리를 잘 다루고 있는 책입니다. 상세한 내용은 책을 참고해주세요.

변수 선언에 사용되는 var키워드와 var 키워드의 단점을 극복하기 위해 ES6 이후에 등장한 let, const 키워드의 차이점에 대해 알아보자

# var
## 1. 중복 선언 가능
var 키워드로 선언된 변수는 **중복 선언이 가능**하다.<br/>
이로 인해 먼저 선언하여 사용되던 변수가 의도치 않게 중복 선언이 되도 에러가 발생하지 않는 것이다.
```javascript
var name = 'Jane';
// ...
var name = 'Serina'; // 이미 선언된 변수의 중복 선언이 가능하다
```

## 2. 스코프 : 함수 레벨
var 키워드의 스코프[^fn1]는 **함수 레벨**로 규정된다.
```javascript
var score = 100;
if(true) {
  var score = 20;
}

console.log(score); // 20
// 함수 레벨 스코프를 따르기 때문에 if문 블록에서 score 변수에 값을 할당할 경우 블록 밖의 변수로 재선언된다.
```

## 3. 변수 호이스팅
변수를 선언하고 사용하기 위해서는 3가지 단계를 거친다.
1. 선언 단계
2. 초기화 단계
3. 할당 단계 
<br/><br/>

변수를 포함한 모든 식별자는 자바스크립트 엔진에 의해 런타임 이전에 평가 단계에서 먼저 선언된다.([^fn2]호이스팅)<br/>
이때, var 키워드로 선언한 변수는 선언과 동시에 **undefined로 암묵적인 초기화**가 일어난다.<br/>
코드가 한줄씩 실행되는 런타임 시에 실제 선언문 코드 이전에 변수를 참조할 수 있는 이유 역시 이때문이다.<br/>
```javascript
console.log(name); // undefined
var name;
console.log(name); // undefined

name = 'Jane';
console.log(name); // 'Jane'
```


# let
## 1. 변수의 중복 선언 금지
let 키워드는 동일한 이름의 **변수가 중복 선언될 경우 문법 에러가 발생**한다.
```javascript
let name = 'Jane';
let name = 'Serina'; // SyntaxError: Identifier 'name' has already been declared
```

## 2. 스코프 : 블록 레벨
let 키워드는 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 **블록 레벨 스코프**를 따른다.
```javascript
let score = 100;
if(true) {
  let score = 20;
  console.log(score); // 20
}

console.log(score); // 100
```

## 3. 변수 호이스팅
let, const 키워드 역시 **호이스팅으로 인해 런타임 이전의 소스 코드 평가 단계에서 변수의 선언문이 먼저 실행**되어 실행 컨텍스트의 렉시컬 환경에 등록된다.<br/>
하지만 var 키워드와는 달리 선언과 초기화가 동시에 일어나지 않는다. **초기화는 런타임에 진행**된다.<br/>
그렇기 때문에 **선언문 코드 이전에 변수를 참조할 경우 참조 에러가 발생**하는 것이다.<br/>
마치 **호이스팅이 발생하지 않는 것처럼 보이지만, 변수(식별자)는 이미 실행 컨텍스트에 등록된 상태**다.<br/>
```javascript
// 아직 name 변수는 선언만 진행된 상태
console.log(name); //  ReferenceError: Cannot access 'name' before initialization

// 실제 선언문 코드에 도달했을 때 초기화가 진행된다.
let name; // 변수 선언문에서 초기화가 진행됨
console.log(name); // undefined

name = 'Jane'; // 할당
console.log(name); // 'Jane'
```
이렇듯 스코프 시작 지점 ~ 변수의 초기화가 이뤄지는 변수 선언문까지<br/>
변수가 실행 컨텍스트에 존재하나 참조할 수 없는 이 구간을 **일시적 사각 지대(Temporal Dead Zone, TDZ)**라고 한다.
```javascript
console.log(name); // ---
                   //  |
                   // TDZ
                   //  |
                   // ---
let name;
```
이는 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있도록 해준다.


# const
const 키워드는 let 키워드와 동일한 특징을 가지고 있지만 const 키워드만의 특징도 가지고 있다.

## 1. 선언과 초기화
const 키워드는 **반드시 선언과 동시에 초기화를 진행**해야 한다.
```javascript
const age; // SyntaxError: Missing initializer in const declaration
// const age = 20; // 선언과 초기화가 같이 되어야 한다
```


## 2. 재할당 금지
재할당이 자유로운 var, let 키워드와 달리 **const 키워드는 재할당 할 수 없다.**
```javascript
const age = 20;
age = 10; //TypeError: Assignment to constant variable.
```

## 3. 상수
상수는 **재할당이 금지된 변수**를 말한다.<br/>
여기서 주의해야 할 것은 **값의 불변을 의미하는 것이 아니라는 점**이다.<br/>
원시 타입의 값은 재할당을 통해 값의 변경이 이뤄지기 때문에, const 키워드로 선언할 경우 값을 변경 할 수 없다.<br/>
반면 **객체 타입 값은 재할당 없이도 프로퍼티의 추가, 수정, 삭제 모두 가능**하다.<br/>
재할당 없이는 값의 변경이 불가능한 원시 타입과는 달리, **객체 타입은 프로퍼티 값의 변경이 발생해도 참조 값이 변경되지 않기 때문**이다.<br/>
```javascript
const person = {name : 'Jane', age : 20};
delete person.age;
person.name = 'Serina';

console.log(person); // {name: "Serina"}
```

# 정리
1. ES6를 사용한다면 var 키워드를 사용하지 않는다.
2. 값의 재할당이 필요하다면 let 키워드, 재할당이 필요하지 않다면 const 키워드를 사용한다.

[^fn1]:
  식별자를 다른 코드가 참조 할 수 있는 식별자의 유효 범위
[^fn2]:
  스코프 내부에서 변수의 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트의 고유한 특성
