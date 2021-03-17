---
category : Javascript
title: "함수"
date: "2020-12-02"
tags : ["Javascript", "Book"]
featuredImage: thumbnail.png
---

> [모던 자바스크립트 Deep Dive](http://www.yes24.com/Product/Goods/92742567)를 읽고 학습한 내용을 간략하게 정리한 글입니다.<br/>
> 자바스크립트 기본 개념과 동작 원리를 잘 다루고 있는 책입니다. 상세한 내용은 책을 참고해주세요.


# 함수 표현식
표현식은 값으로 평가될 수 있는 문을 말한다.<br/>
자바스크립트에서 함수는 **일급 객체이기 때문에 함수 리터럴로 생성한 함수 객체를 변수에 할당 할 수 있다.**
```javascript
const func = function() {
    // ...
}
```

# 함수 선언문
함수 선언문으로 함수를 생성하면 **함수 이름과 동일한 식별자를 생성해 함수 객체와 바인딩**한다.
```javascript
function func() {
    // ...
}
```

# 함수 표현식과 함수 선언문에서의 호이스팅 차이
### 함수 표현식
**함수 표현식**으로 함수를 생성할 경우 **변수 호이스팅**이 발생한다.
```javascript
console.log(prn); // undefined
prn('안녕'); // TypeError: prn is not a function

var prn = function(str) {
    console.log(str);
}
```
var 키워드로 선언한 변수는 평가 단계에서 선언과 동시에 undefined로 초기화된다.<br/>
**변수에 함수 객체를 할당하는 코드가 실행되기 이전에는 값이 undefined**이므로 함수를 호출할 경우 에러가 발생한다.

### 함수 선언문
**함수 선언문**으로 함수를 생성할 경우 **함수 호이스팅**이 발생한다.
```javascript
console.log(prn); // ƒ prn(str)
prn('안녕'); // '안녕'

function prn(str) {
    console.log(str);
}
```
함수 선언문은 **평가 단계에서 식별자를 실행 컨텍스트에 등록할 때 함수 객체로 값이 초기화**된다.<br/>
따라서 **선언문 이전에 함수를 호출 할 수 있다.**

# 참조에 의한 전달과 외부 상태의 변경
매개 변수에 값이 전달될 때, **원시 타입은 실제 값이 복사**되지만 **객체 타입은 참조 값이 복사**된다.<br/>
그러므로 함수 내부에서 객체 타입인 매개 변수의 값이 변경된다면 동일한 참조 값을 가지고 있는
**외부의 값도 함께 변경**될 여지가 있다. (= side effect, 부수 효과)
```javascript
let name = 'Jane';
let person = {name : 'Jane', age : 20};

function chageName(primitive, obj) {
    primitive = 'Serina';
    obj.name = 'Serina';
}

chageName(name, person);

console.log(name); // Jane
console.log(person.name); // Serina
```
이를 방지하기 위해서 객체를 **불변 객체로 만들어 사용**하고, 값의 변경이 필요한 경우에는 **값 자체를 복사하여 사용**한다.<br/>
이렇듯 **외부 상태를 변경하지 않고 외부 상태에 의존하지 않으며, 오로지 매개 변수의 값만 사용하여 반환 값을 만들어 부수 효과를 줄이는 함수**를 **순수 함수**라고 한다. 그리고 이러한 프로그래밍 기법을 **함수형 프로그래밍**이라 한다.


# 함수와 일급 객체
## 일급 객체
아래 조건을 만족하는 객체를 일급 객체라 한다.
```
1. 무명의 리터럴을 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열 등)에 저장 할 수 있다.
3. 함수의 매개변수에 전달 할 수 있다.
4. 함수의 반환 값으로 사용할 수 있다.
```

**자바스크립트에서 함수는 이 조건을 모두 만족하므로 일급 객체**이다.<br/>
함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면<br/>
어디서든 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다. 

## 함수 객체의 프로퍼티
함수도 객체이므로 자신만의 프로퍼티를 소유 할 수 있다. 자바스크립트의 함수 만이 가지고 있는 프로퍼티에 대해 알아보자

### 1. arguments 프로퍼티
함수 호출 시 **전달된 인자들의 정보를 담고있는 순회 가능한 유사 배열 객체**이다.<br/>
- **유사 배열 객체** : **length 프로퍼티를 가진 객체**로 **for문을 순회 할 수 있는 객체**

자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.<br/>
따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 함수가 동작하며 에러가 발생되지 않는다.
```javascript
function sum(x, y) {
    console.log(arguments); 
    // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    return x + y;
}

sum(1, 2, 3); // 2 
```

arguments 객체는 전달된 **인자 값을 프로퍼티 값으로 소유**하며, 프로퍼티 키는 인자의 순서를 나타낸다.<br/>
arguments 객체의 callee 프로퍼티는 호출되어 arguments 객체를 생성한 함수, 즉 함수 자신을 가리킨다.<br/><br/>

arguments 프로퍼티 값은 배열이 아닌 **유사 배열 객체이기 때문에 배열 메서드를 사용 할 수 없다.**<br/>
배열 메서드를 사용하기 위해서는 유사 배열 객체를 배열로 변환하는 과정을 거쳐야하는데, **ES6**에서는 이런 번거로운 과정 없이 바로 인수 배열을 받을 수 있도록 **Rest 파라미터를 도입**하였다.

```javascript
function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0)
}
```

### 2. caller 프로퍼티
ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이다.

### 3. length 프로퍼티
**매개변수의 수**를 가리킨다. <br/>
arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티 값은 다를 수 있다는 것을 주의해야 한다.<br/>
- arguments 객체의 length 프로퍼티 : 호출 시 전달된 인자의 개수
- 함수 객체의 length 프로퍼티 : 매개 변수의 개수

```javascript
function func(a, b) {
    return arguments.length;
}

func(1, 2, 3, 4); // 4
console.log(func.length); // 2
```

### 4. name 프로퍼티
**함수 객체의 식별자 명**을 나타낸다.

```javascript
function sayHello() {
    console.log('hello');
}

console.log(sayHello.name); // 'sayHello'
```

### 5. \__proto__ 접근자 프로퍼티
모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가진다. <br/>
[[Prototype]] 내부 슬롯은 객체 지향 프로그래밍의 **상속을 구현하는 프로토타입 객체**를 가리킨다.<br/>
\__proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 **프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티**이다.<br/>
\__proto__ 프로퍼티를 통해 객체가 상속받는 부모 객체에 접근 할 수 있다.
```javascript
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 이다.
console.log(obj.__proto__ === Object.prototype);

// hasOwnProperty는 Object.prototype의 메서드다.
// obj 객체는 Object.prototype을 상속 받고 있기 때문에 hasOwnProperty 메서드를 사용 할 수 있다.
obj.hasOwnProperty('a'); // true
```

### 6. prototype 프로퍼티
**생성자 함수로 호출 할 수 있는 객체(즉 constructor)만이 소유하는 프로퍼티**이다.<br/>
생성자 함수로 호출될 때 **생성자 함수가 생성할 인스턴스의 프로토타입 객체**를 가리킨다.<br/>
생성자 함수의 **prototype 프로퍼티에 바인딩되어 있는 객체**가 생성자 함수로 생성한 **인스턴스가 \__proto__ 프로퍼티를 통해 접근하는 부모 객체**인 것이다.<br/><br/>

일반 객체와 생성자 함수로 호출 할 수 없는 **non-constructor 에는 prototype 프로퍼티가 존재하지 않는다.**<br/>
```javascript
// 함수 선언문은 constructor 이기 때문에 prototype 객체를 소유한다
(function() {}).hasOwnProperty('prototype'); // true

// 화살표 함수는 non-constructor 이기 때문에 prototype 객체를 소유하지 않는다.
(() => {}).hasOwnProperty('prototype'); // false
```