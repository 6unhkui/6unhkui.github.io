---
category : Javascript
title: "생성자 함수"
date: "2020-12-04"
tags : ["Javascript", "Book"]
featuredImage: thumbnail.png
---

> [모던 자바스크립트 Deep Dive](http://www.yes24.com/Product/Goods/92742567)를 읽고 학습한 내용을 간략하게 정리한 글입니다.<br/>
> 자바스크립트 기본 개념과 동작 원리를 잘 다루고 있는 책입니다. 상세한 내용은 책을 참고해주세요.


# 생성자 함수
생성자 함수란 **new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수**를 말한다.<br/>
동일한 프로퍼티를 갖는 객체가 여러개일 경우, 매번 프로퍼티를 기술 하는 것은 비효율적이다.<br/>
```javascript
const jane = {name : 'Jane', age : 20};
const serina = {name : 'Serina', age : 10};
```

생성자 함수는 프로퍼티가 **동일한 인스턴스를 생성하기 위한 탬플릿으로서 동작**한다.<br/>
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jane = new Person('Jane', 20);
const serina = new Person('Serina', 10);
```

자바스크립트에서 생성자 함수는 일반 함수와 비교하여 특별한 형식이 정해져있지 않다. (생성자 함수 식별자의 첫번째 문자를 대문자로 표기한 것은 관례일 뿐이다.)<br/>
**new 연산자를 사용해 함수를 호출하면 생성자 함수로서 동작**하고, **붙이지 않고 호출하면 일반 함수로서 동작**한다.<br/>
(단, 함수 선언문, 함수 표현식, class에 한해)<br/><br/>

이러한 동작 원리를 이해 위해서는 우선 내부 슬롯과 내부 메서드에 대한 이해가 필요하다.

# 함수의 내부 슬롯과 내부 메서드
내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위한 ECMAScript 사양에서 사용되는
의사 프로퍼티(pseudo property)와 의사 메서드(pseudo method)다.<br/>
직접 접근하거나 호출할 수는 없지만 일부는 접근 수단을 제공한다.<br/>
함수도 객체이므로 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론이고 함수 객체만을 위한 [[Enviroment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]]과 [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.


## 내부 메서드 [[Call]]과 [[Construct]]
|  | [[Call]] | [[Construct]] |
|:---:|:---:|:---:|
| 갖고 있는 함수 객체 | 모든 함수 | 생성자 함수로서 호출 될 수 있는 함수<br/>(함수 선언문, 함수 표현식, class) |
| 실행 시점 | 일반 함수로서 호출 할 때 실행 | new 키워드와 함께 생성자 함수로서 호출 할 때 실행 |

모든 함수 객체는 [[Call]] 내부 메서드를 가지고 있지만, 모든 함수가 [[Construct]] 내부 메서드를 가지고 있는 것은 아니다.<br/><br/>
자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때, 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다. [[Construct]] 내부 메서드를 가지고 있는 함수는 constructor이며, 갖고 있지 않는 함수는 non-constructor다.
- constructor: 함수 선언문, 함수 표현식, class
- non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수

<br/>

함수를 **일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 실행**되고, **new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 실행**된다.

```javascript
function func() {};

// 일반적인 함수 호출 : [[Call]] 실행
func();
 
// 생성자 함수 호출 : [[Construct]] 실행
new func();
```
[[Construct]] 내부 메서드가 존재하지 않는 non-constructor 함수를 new 키워드와 함께 생성자 함수로서 호출하면 에러가 발생한다.
```javascript
const func = () => {};

new func(); // TypeError: func is not a constructor
```

# 생성자 함수의 인스턴스 생성 방식
생성자 함수의 역할은 **프로퍼티 구조가 동일한 인스턴스를 생성** 하기 위한 **탬플릿(클래스)**으로서 동작하여,<br/>
**인스턴스를 생성하는 것**과 **생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것** 이다.<br/>
생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화하는 것은 옵션이다.<br/><br/>

### 1. 인스턴스 생성과 this 바인딩
생성자 함수가 실행되면 암묵적으로 빈 객체가 생성된다. 이 빈 객체가 바로 암묵적으로 생성한 인스턴스다.<br/>
암묵적으로 생성된 빈 객체, 즉 인스턴스는 [^fn1]this에 [^fn2]바인딩 된다. <br/>
생성자 함수 내부의 this가 생성자 함수가 생성한 인스턴스를 가리키는 이유가 바로 이때문이다.
```javascript
function Person(name, age) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
  console.log(this); // Person {}

  this.name = name;
  this.age = age;
}
```

### 2. 인스턴스 초기화
this에 바인딩되어 있는 인스턴스를 초기화 한다.<br/>
즉 this에 바인딩 되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고, 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.
```javascript
function Person(name, age) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨된다.
  // this = {}

  // 2. 인스턴스 초기화
  this.name = name;
  this.age = age;
}
```

### 3. 인스턴스 반환
생성자 함수 내부의 모든 처리가 끝나면 인스턴스가 바인딩 된 this를 반환한다.
```javascript
function Person(name, age) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다
  // this = {}

  // 2. 인스턴스 초기화
  this.name = name;
  this.age = age;

  // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다
  // retrun this;
}
```
<br/>

이때 명시적으로 객체를 반환할 경우, 암묵적인 this 반환이 무시된다.
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  return {};
}

const jane = new Person('Jane', 20);
console.log(jane); // {}
```

반드시 생성자 함수에서는 return문을 생략해야 한다.



[^fn1]:
  자신이 속한 객체 또는 자신이 생성한 인스턴스를 가리키는 자기 참조 변수이다. 이 변수에 바인딩 될 값은 호출 시점에 결정된다.
[^fn2]:
  식별자와 메모리 공간을 연결하는 과정