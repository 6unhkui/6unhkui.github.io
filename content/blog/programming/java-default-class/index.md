---
category : Java
title: "기본 클래스"
date: "2020-07-05"
tags : ["Java"]
featuredImage: thumbnail.png
---

# Object 클래스
Object 클래스는 모든 자바 클래스의 최상위 클래스이다. 즉, **모든 클래스는 Object 클래스를 상속받는다.** <br/>
코드를 작성하지 않지만 클래스를 선언할 때 컴파일러에 의해 ``extends Object`` 코드가 자동으로 추가된다.<br/>
Object 클래스에 의해 상속 받는 여러 메소드 중에서 몇가지를 알아보자.

### toString 메소드
toString 메소드는 **인스턴스의 정보를 문자열로 반환하는 메소드**이다.<br/>
이 메소드의 원형은 생성된 인스턴스의 클래스 이름과 주소 값을 보여주는 형태다.
```java
getClass().getName() + "@" + Integer.toHexString(hashCode());
```
``System.out.println()``으로 시스템 로그를 출력할 때도 toString 메소드가 호출된다.<br/>
이 정보를 변경하고 싶으면 toString 메소드를 오버라이딩해준다.
```java
class Animal implements Cloneable{
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "이름은 " + name + " 나이는 " + age + "살";
    }
}

public class ObjectClassTest {
    public static void main(String[] args) {
        Animal budu = new Animal("dubu", 3);
        System.out.println(budu);
    }
}

/*
이름은 dubu 나이는 3살
*/
```


### equals 메소드
equals 메소드는 **두 인스턴스가 동일한지 여부를 반환**한다. 오버라이딩하여 논리적으로 동일한 인스턴스임을 정의할 수 있다.<br/>
- String 클래스는 이미 equals 메소드가 오버라이딩 되어있는 상태이다.

```java
class Animal {
    // ..... 멤버 변수 선언, 생성자, getter, setter 생략 .....

    @Override
    public boolean equals(Object o) {
        Animal animal = (Animal) o;
        return this.age == animal.age && this.name.equals(animal.getName());
    }
}

public class ObjectClassTest {
    public static void main(String[] args) {
        Animal budu = new Animal("dubu", 3);
        Animal kitty = new Animal("kitty", 2);
        boolean isSame = budu.equals(kitty);

        System.out.printf(
            "%s와 %s는 서로 %s 동물이다.", 
            budu.getName(), kitty.getName(), isSame ? "같은" : "다른");
    }
}

/*
dubu와 kitty는 서로 다른 동물이다.
*/
```

### clone 메소드
객체를 복제하여 **동일한 멤버 변수 값을 가진 새로운 인스턴스를 생성 할 때 사용**한다.<br/>
clone 메소드 자체는 모든 메소드가 가지고 있긴 하지만, 인스턴스의 복사는 주의를 요구하기 때문에 복사를 허용한다는 의미로 **Cloneable 인터페이스를 구현**해야 한다.<br/>
Cloneable 인터페이스는 구현해야 할 추상 메소드가 없는 **마커 인터페이스**이다.
```java
class Animal implements Cloneable{
    // ..... 멤버 변수 선언, 생성자, getter, setter 생략 .....

    // 접근 제어자를 public으로 바꿔줌
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone(); // Object의 clone 메소드 호출
    }

    // ..... equals 메소드 생략 .....
}

public class ObjectClassTest {
    public static void main(String[] args) throws CloneNotSupportedException {
        Animal budu = new Animal("dubu", 3);
        Animal cloneBudu = (Animal)budu.clone();
        boolean isSame = budu.equals(cloneBudu);

        System.out.printf(
                "%s와 %s는 서로 %s 동물이다.",
                budu.getName(), cloneBudu.getName(), isSame ? "같은" : "다른");
    }
}

/*
dubu와 dubu는 서로 같은 동물이다.
*/
```
clone 메소드는 기능적으로 하는 일이 없어보인다. <br/>
그럼에도 불구하고 오버라이딩을 하는 이유는 **Object 클래스의 clone 메소드에 선언된 접근 제어자가 protected**이기 때문이다.<br/>
이를 어디서든 접근 가능한 **public으로 바꿔주는 작업**이 필요하다. (Object 클래스는 java.lang 패키지므로 protectd면 접근 할 수 없음)
- 오버라이딩에서 접근 제어자 변경은 **제어 수준을 넓히는 것만 가능**하다.


# Wrapper 클래스
**기본 자료형의 값을 감싸는 클래스**이다. **기본 자료형을 인스턴스화 시키기 위해** 사용한다.

## Wrapper 클래스의 종류
모든 기본 자료형을 대상으로 래퍼 클래스가 정의되어있다.

| 기본 자료형 | Wrapper 클래스 |
|:---:|:---:|
| boolean | Boolean | 
| byte | Byte |
| char | Character | 
| short | Short | 
| int | Integer | 
| long | Long | 
| float | Float | 
| double | Double | 

## 박싱과 언박싱
```
기본 자료형  -- Boxing --> Wrapper 클래스
+-------+               +---------+
| byte  | <-----------> | Byte    |
| short | <-----------> | Short   |
| int   | <-----------> | Integer |
| ...   | <-----------> | ...     |
+-------+               +---------+
         <-- Unboxing --
```

### 박싱(Boxing)
**기본형을 객체형으로 바꾸는 것**을 **박싱**이라 한다.
```java
Integer iObj = new Integer(100);
Double dObj = new Double(3.14);
```

### 언박싱(Unboxing)
**객체형을 기본형으로 꺼내는 것**을 **언박싱**이라 한다. (Wrapper 클래스에서 따로 메소드를 제공한다.)
```java
int num1 = iObj.intValue();
double num2 = dObj.doubleValue();
```

<br/>

자바5부터는 박싱과 언박싱이 필요한 상황에서 이를 자동으로 처리하는 오토 박싱(Auto Boxing)과 오토 언박싱(Auto Unboxing)을 제공한다.

## Wrapper 클래스의 다양한 static 메소드

### 인스턴스 생성
**valueOf 메소드**를 통해 **생성자를 사용하지 않고 Wrapper 클래스의 인스턴스를 생성** 할 수 있다.
```java
Integer n1 = Integer.valueOf(999); // new Integer(999);와 같음
Integer n2 = Integer.valueOf("1024"); // 문자열 기반 Integer 인스턴스 생성
```

### 대소 비교와 합 계산
#### 최대값 계산
```java
Integer.max(10, 100); // 100
```
#### 최소값 계산
```java
Integer.min(10, 100); // 10
```
#### 합 계산
```java
Integer.sum(10, 100); // 110
```

### 진법 변환
#### 10진수 -> 2진수
```java
Integer.toBinaryString(10); // 1010
```

#### 10진수 -> 8진수
```java
Integer.toOctalString(10); // 12
```

#### 10진수 -> 16진수
```java
Integer.toHaxString(10); // a
```


# Math 클래스
Math 클래스는 기능의 제공이 목적이므로 **모든 메소드가 static으로 정의**되어 있다. (인스턴스 생성 목적이 아니다.)
```java
// 원주율
Math.PI;

// 2의 제곱근
Math.sqrt(2);

// 파이에 대한 Degree
Math.toDegrees(Math.PI);

// 2 파이에 대한 Degree
Math.toDegrees(2.0 * Math.PI)

// 라디안으로 변환
double radian45 = Math.radians(45);

// 싸인 45
Math.sin(radian45);

// 코싸인 45
Math.cos(radian45);

// 탄젠트 45
Math.tan(radian45);

// 로그 24
Math.log(25);

// 2의 16승
Math.pow(2, 16);
```

## 난수 생성
난수는 **무작위로 생성된 값**을 말한다.<br/>
컴퓨터는 주어진 명령을 실행하는 기계이기 때문에 이론적으로 **난수를 생성할 수 없다.**<br/>
컴퓨터에서 난수를 생성하기 위해서는 **특정 알고리즘에 시드(seed) 값을 전달**하여 그 알고리즘에 의해 난수를 만들어 내야한다.<br/>
이런 형태로 만들어진 난수를 유사 난수라고 한다. 시드 값이 동일하면 동일한 난수를 만든다.<br/><br/>

자바에서는 난수의 생성을 위한 **Random 클래스**를 제공한다.<br/>
Random 클래스의 생성자에 별도의 시드 값을 넣어주지 않으면, **시드 값으로 현재 시간을 넣어 난수를 생성**한다.
```java
Random rand = new Random();
rand.nextInt(1000); // 0 이상 1000 미만 범위의 int형 난수 반환
```

# Arrays 클래스
java.util.Arrays는 여러 배열 조작에 도움을 주는 메소드를 제공한다.

## 배열 복사 메소드
### 배열 복제
Arrays 클래스의 정적 메소드 **copyOf()**을 사용해 **배열을 복제** 할 수 있다.
```java:title=java.util.Arrays
// original에 전달된 배열을 첫 번째 요소부터 newLength의 길이만큼 복제
public static int[] copyOf(int[] origianl, int newLength) 
```
```java
String[] src = {"자바", "기본 클래스", "공부중"};
String[] dest = Arrays.copyOf(src, src.length);

for(String s : dest) {
    System.out.println(s);
}
/*
자바
기본 클래스
공부중
*/
```

### 배열 복사
System 클래스의 정적 메소드 **arraycopy()**를 이용하면 **배열을 복사** 할 수 있다.
```java:title=java.lang.System
// 배열 src의 srcPos에서 배열 dest의 destPos로 length 길이만큼 복사
public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
```
```java
String[] src = {"자바", "기본 클래스", "공부중"};
String[] dest = new String[3];

System.arraycopy(src, 0, dest, 0, dest.length);

for(String s : dest) {
    System.out.println(s);
}

/*
자바
기본 클래스
공부중
*/
```

## 배열 요소 비교
Arrays 클래스의 정적 메소드 **equals()**를 통해 **배열의 요소를 비교** 할 수 있다.<br/>
```java:title=java.util.Arrays
// 매개변수 a와 a2로 전달된 배열의 내용을 비교하여 true 또는 false를 반환
public static boolean equals(Object[] a, Object[] a2)
```

이때 요소가 객체인 경우, Object 클래스의 **equals 메소드를 호출하여 인스턴스를 비교**하므로 equals 메소드가 오버라이딩 되어 있어야 한다.
```java
class Animal {
    // ..... 멤버 변수 선언, 생성자, getter, setter 생략 .....
    @Override
    public boolean equals(Object o) {
        Animal animal = (Animal) o;
        return this.age == animal.age && this.name.equals(animal.getName());
    }
}

public class ArraysClass {
    public static void main(String[] args) {
        Animal budu = new Animal("dubu", 3);
        Animal kitty = new Animal("kitty", 2);

        Animal[] src = {budu, kitty};
        Animal[] dest = Arrays.copyOf(src, src.length);

        System.out.printf("src와 dest는 서로 %s 배열입니다.", 
            Arrays.equals(src, dest) ? "같은" : "다른");
    }
}

/*
src와 dest는 서로 같은 배열입니다.
*/
```

## 배열 정렬
Arrays 클래스의 정적 메소드 **sort()**를 통해 **배열의 요소를 정렬** 할 수 있다.<br/>
```java:title=java.util.Arrays
public static void sort(Object[] a);
```

이때 요소가 객체인 경우, **Comparable 인터페이스의 compareTo() 메소드가 구현** 되어 있어야 한다.
```java:title=java.lang.Comparable
int compareTo(Object o);
/*
- 인자로 전달된 o가 작다면 양의 정수 반환
- 인자로 전달된 o가 크다면 음의 정수 반환
- 인자로 전달된 o와 같다면 0 반환
*/
```

```java
class Animal implements Comparable {
    // ..... 멤버 변수 선언, 생성자, getter, setter 생략 .....
    @Override
    public int compareTo(Object o) {
        Animal animal = (Animal)o;
        return this.age - animal.getAge();
    }
    // ..... toString 메소드 생략 .....
}

public class EqualsInstance {
    public static void main(String[] args) {
        Animal budu = new Animal("dubu", 3);
        Animal kitty = new Animal("kitty", 2);
        Animal bunny = new Animal("bunny", 5);

        Animal[] src = {budu, kitty, bunny};

        // 배열 정렬
        Arrays.sort(src);

        for(Animal a : src) {
            System.out.println(a);
        }
    }
}

/*
이름은 kitty 나이는 2살
이름은 dubu 나이는 3살
이름은 bunny 나이는 5살
*/
```

# Reference
- [윤성우의 열혈 Java 프로그래밍](http://www.yes24.com/Product/Goods/43755519?OzSrank=1)
- [Do it! 자바 프로그래밍 입문](http://www.yes24.com/Product/Goods/62281686?OzSrank=7)