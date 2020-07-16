---
menu : DEV
category : Network
title: 네트워크 1
date: "2020-07-14"
tags : ["Network"]
featuredImage: ./thumbnail.png
---

# 제목
이 글을 테스트 글 입니다. ```안녕하세요.```

*italic_star*
_italic_underbar_

**strong_star**
__strong_underbar__

~~delete~~
**_strong_italic_underbar_**

* Star
	+ Plus
		- Minus

[Google](https://google.com)

`print("Hello world")`

-----------------------
***********************
<hr/>

> sssss

## 소제목
```java
class Apple {
  public String toString() { return "I am an apple."; }
}

class Orange {
  public String toString() { return "I am an orange."; }
}

// 다음 상자는 사과도 오렌지도 담을 수 있음
class Box { // 무엇이든 저장하고 꺼낼 수 있는 상자
	private Object ob;

	private void set(Object o) { ob = o;}
	private Object get() {return ob;}
}

class FruitAndBox {
	public static void main(String[] args) {
		Box aBox = new Box();
		Box oBox = new Box();
		
		aBox.set(new Apple());
		oBox.set(new Orange());

		Apple ap = (Apple)aBox.get();
		Orange og = (Orange)oBox.get(); 
	}
}
```

### 소소제목
```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

#### 소소소 제목
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```


```shell
$ yarn add gatsby
```
