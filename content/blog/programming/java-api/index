---
category : Java
title: "유용한 Java API"
date: "2020-07-22"
tags : ["Java"]
featuredImage: thumbnail.png
---
> 🔒 작성중
# String 클래스
String 클래스는 문자 배열, 문자 수를 나타내는 필드 등을 갖고있는 클래스이다. 단순히 문자열을 참고하고 있는 것이 아니라 문자열을 내부에 가지고 있으며 많은 생성자와 메서드를 제공한다.
(참고 : 문자열은 char형 배열에 저장된다.)

## 문자열 연결
String은 Immutable Object(불변 객체)[^fn1]이다. 문자열의 내용이 바뀔 때마다 새로운 String 인스턴스를 생성하므로 빈번한 문자열 추가가 이뤄질 경우 ``StringBuffer``의 ``append()``를 사용하는 것이 좋다.

[^fn1]: 생성 후 그 값을 변경 할 수 없는 객체 
#### concat() 메소드

```java
/**
 * public String concat(String str){...};
*/

String str = "Hello ";
String res = str.concat("World");
System.out.println(res); // Hello World
```

## 문자열의 일부 추출
#### substring() 메소드
시작 index부터 종료 index까지 문자열을 잘라서 반환한다.

```java
 /**
  * public String substring(int beginIndex);
  * public String substring(int beginIndex, int endIndex);
 */

 String str = "abcdefg";
 String res = str.substring(4);
 System.out.println(res); // efg

 res = str.substring(1, 3);
 System.out.println(res); // bc
```

#### charAt() 메소드
특정 index에 해당하는 문자를 반환한다.

```java
/**
 * public char charAt(int index);
*/

String str = "Melon";
System.out.println(str.charAt(1)); // e
```

## 문자열 내용 비교
#### equals() 메소드

```java
/**
 * public boolean equals(Object anObject);
*/

String str = "Apple";
System.out.println(str.equals("Apple")); // true
System.out.println(str.equals("Melon")); // false
```

### 사전 편찬 상의 순서 비교
#### compareTo() 메소드
호출된 인스턴스의 문자열과 인자로 전달된 문자열을 비교하여 사전 편찬 상 <br/>
- 일치하면 **0** 반환 (= 내용 일치)
- 앞서면 앞선 만큼의 **양수** 값 반환
- 뒤서면 뒤선 만큼의 **음수** 값 반환

```java
 /**
  * public int compareTo(String anotherString);
 */

 String str = "Melon";
 System.out.println(str.compareTo("Melon")); // 0
 System.out.println(str.compareTo("Apple")); // 12
 System.out.println(str.compareTo("Application")); // -3

 System.out.println(str.compareTo("melon")); // -32 
 // compareTo()는 대소문자를 구분하므로 대소문자 구분 없이 비교하고 싶으면 compareToIgnoreCase()을 사용한다.
 System.out.println(str.compareToIgnoreCase("melon")); // 0
```

## 기본 자료형 → 문자열로 변경 
```java
 /**
  * static String valueOf(boolean b);
  * static String valueOf(char c);
  * static String valueOf(double d);
  * static String valueOf(float f);
  * static String valueOf(int i);
  * static String valueOf(long l);
 */

 float f = 0.123f;
 String res = String.valueOf(f);

```

# Object 클래스

## 인스턴스의 비교
== 연산자는 참조변수의 참조 값을 비교한다. 서로 다른 두 인스턴스의 값을 비교하기 위해서는 Object 클래스의 equals 메소드를 오버라이딩 하여 사용한다.

```java
 class FruitBox implements Cloneable {
    private String name;
    private int count;

    public FruitBox(String name, int count){
        this.name = name;
        this.count = count;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FruitBox)) return false;
        FruitBox fruitBox = (FruitBox) o;
        return count == fruitBox.count &&
                Objects.equals(name, fruitBox.name);
    }
 }

 public class ObjectClone {
    public static void main(String[] args){
        FruitBox fb1 = new FruitBox("Apple", 10);
        FruitBox fb2 = new FruitBox("Apple", 20);
        FruitBox fb3 = new FruitBox("Apple", 10);

        System.out.println(fb1.equals(fb2)); // false
        System.out.println(fb1.equals(fb3)); // true
    }
 }
```

## 인스턴스 복사(복제)
모든 클래스는 Object 클래스로 부터 ``clone`` 메소드를 상속하고 있다. 하지만 이 메소드를 호출하기 위해서는 ``Cloneable`` 인터페이스를 구현하고 있어야 한다. <br/>
Cloneable 인터페이스는 구현해야 할 추상 메소드가 없는 마커 인터페이스로 clone 메소드의 호출을 허용하겠다는 의미만 가지고 있다.<br/>
Java에서는 Cloneable 인터페이스를 구현한 클래스의 인스턴스만이 clone 메소드를 호출 할 수 있도록 제약사항을 둔 것이다.

```java
 class FruitBox implements Cloneable { // 1. Cloneable 인터페이스를 구현하고
    private String name;
    private int count;

    public FruitBox(String name, int count){
        this.name = name;
        this.count = count;
    }

    @Override
    public String toString() {
        return "[" + name + "," + count + "]";
    }

    @Override
    public FruitBox clone() throws CloneNotSupportedException {
        return (FruitBox)super.clone();
        // 2. clone 메소드를 오버라이딩한다.
        // 또한 접근 제어자가 protected이므로 public으로 바꿔준다.
    }
 }

 public class ObjectClone {
    public static void main(String[] args) throws CloneNotSupportedException {
        FruitBox fb1 = new FruitBox("Apple", 10);
        FruitBox fb2 = fb1.clone();

        System.out.println(fb1.toString()); // [Apple,10]
        System.out.println(fb2.toString()); // [Apple,10]
    }
 }
```

# 참고
- [윤성우의 열혈 JAVA](http://www.yes24.com/Product/Goods/43755519)
- [TCP 스쿨](http://tcpschool.com/java/intro)
- [Do it! 자료구조와 함께 배우는 알고리즘 입문 자바편](http://www.yes24.com/Product/Goods/60547893)
