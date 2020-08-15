---
category : Python
title: 파이썬 기본 문법
date: "2020-07-29"
tags : ["Python"]
featuredImage: thumbnail.png
---
> 🔒 작성중

# 변수
```python
_myname = '길동'
my_name = '홍길동'
MyName = 'Hong gil-dong'
​
count = 1
Count = 2
```
- 첫 문자는 언더스코어 혹은 영문자로 시작해야 한다.
- 변수명의 대소문자를 구분한다. (count와 Count는 서로 다른 변수)
- 예약어와 자체적으로 내장된 함수의 이름은 사용 할 수 없다
    - 예약어 목록 확인하기
        ```python
        import keyword
        keyword.kwlist
        ```

## 변수에 값 대입하기
```python
number1 = 1
pi = 3.14
flag = True
char = 'a'
​
chars = 'Python' # 문자열
# 변수에 다시 값을 대입하면 자료형도 자동으로 변경
chars = 1 # 정수형 자료
```

- 자료형을 명시하지 않아도 된다.
- 자료형은 변수 값이 대입되는 시점에서 자동으로 변경된다.

# 주석
```python
# 주석입니다.

"""
삼중 따옴표를 사용해보자
주석 블럭 만들기
number = 2
print(number)
"""
```

# 기본 자료형
```python
int_data = 1 # 정수
float_data = 3.14 # 실수
complex_data = 1+5j; # 복소수
str_data = 'python' # 문자열(홀따옴표)
str_data2 = "Hello World" # 문자열(쌍따옴표)
list_data = [1,2,3] # 리스트
tuple_data = (1, 2, 3) # 튜플 -- 리스트와 비슷하지만 튜플은 값을 변경 할 수 없음
dict_data = {0 : 'False', 1: 'True'} # 시전

print(int_data) # 1
print(float_data) # 3.14
print(complex_data) # (1+5j)
print(str_data) # python
print(str_data2) # Hello World
print(list_data[0]) # 1
print(tuple_data[1]) # 2
print(dict_data[1]) # True
print(dict_data) # {0: 'False', 1: 'True'}
```

# if문
```python
# if 조건 :
#    실행코드 1
# else 조건 :
#    실행코드 2
​
listdata = ['a', 'b', 'c']
if 'a' in listdata : 
    print("a가 들어있다")
    print(listdata)
else : print("a가 listdat에 존재하지 않는다")
    
# 혹은
if 'a' in listdata : print("a가 들어있다 22")
```
- 실행 결과
```
a가 들어있다
['a', 'b', 'c']
a가 들어있다 22
```

```python
# if 조건 :
#    실행코드 1
# elif 조건 :
#    실행코드 2
# else 조건 :
#    실행코드 3
​
x = 1
y = 2
if x > y :
    print("x가 y보다 크다")
elif x < y :
    print("x가 y보다 작다")
else : print("x와 y는 같다")
```
- 실행 결과
```
x가 y보다 작다
```

# for문
```python
# for 변수 in 범위 :
#    반복적으로 실행할 코드
​
# 리스트
scope = [1, 2, 3, 4, 5]
for x in scope:
    print(x)
​
# 문자열
str = 'abcde'
for c in str:
    print(c)
​
# 사전
ascii_codes = {'a' : 97, 'b' : 98, 'c' : 99}
for a in ascii_codes:
    print(a)
​
# rnage() 함수
for c in range(10) :
    print(c)
```

```python
# for 변수 in 범위 :
#     ...
#     continue # 다음 반복문 수행
#     ...
#     break # for문 탈출

scope = [1, 2, 3, 4, 5]
for x in scope:
    print(x)
    if x < 3 :
        continue
    else :
        break
```

```python
# 반복문을 완전히 수행 했을 때만 실행하는 부분
# for 변수 in 범위 :
#    반복적으로 실행할 코드
# else :
#    for문이 모두 실행 된 후에 실행할 코드
​
scope = [1, 2, 3, 4, 5]
for x in scope:
    print(x)
else : print("finish")
```

# while문
```python
x = 0
while x < 10:
    x = x+1
    if x < 3 :
        continue
    print(x)
    if x > 7 :
        break
```

# None
아무것도 없다는 의미의 상수이다.
```python
val = None
condition = 1
if condition == 1 :
    val = [1,2,3]
else : val = 'Hello World'
    
print(val) # [1, 2, 3]
```
 
# 참고
- [초보자를 위한 파이썬 200제](http://www.yes24.com/Product/Goods/36836557) 