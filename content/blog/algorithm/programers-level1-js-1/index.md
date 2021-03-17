---
category: Coding Test
title: "[JS] Level1 문제 풀기 - 1"
date: "2020-07-22"
tags: ["Programers", "Coding Test", "Javascript"]
featuredImage: thumbnail.png
---

# 두 개 뽑아서 더하기

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/68644)

### 나의 풀이

```javascript
function solution(numbers) {
    const set = numbers.reduce((acc, cur, i, arr) => {
        for (let j = i + 1; j < arr.length; j++) {
            acc.add(cur + arr[j]);
        }

        return acc;
    }, new Set());

    return [...set].sort((a, b) => a - b);
}
```

인수로 전달되는 numbers 배열을 reduce 함수를 이용해 순회하면서 서로 다른 index에 있는 값과 더하고, 그 값의 중복을 피해기 위해 Set 객체에 넣어주었습니다.
그리고 디스트럭처링 할당 문법으로 Set 객체를 배열로 변환한 후, sort 메서드를 사용해 오름차순을 정렬하도록 코드를 작성하였습니다.

-   sort 메서드는 배열의 요소를 일시적으로 문자열로 반환한 후 유니코드 코드 포인트의 순서를 기준으로 정렬합니다. 그렇기 때문에 콜백 함수로 정렬 순서를 정의하는 비교 함수를 전달해야 제대로 된 정렬이 이뤄집니다.

# 완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/42576)

### 나의 풀이

```javascript
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((v, i) => v !== completion[i]);
}
```

participant 배열과 completion 배열을 모두 오름차순으로 정렬한 후, participant 배열을 순회하면서 completion 배열과 동일한 위치에 값이 다른 요소를 하나라도 존재한다면 그 값을 리턴하도록 코드를 작성하였습니다.

<!-- # K번째수

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/42748)

### 나의 풀이

```javascript
function solution(array, commands) {
    return commands.map(v => {
        const [i, j, k] = v;
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    });
}
```

> 작성중! -->

<!-- # 2016년
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12901)

### 나의 풀이
```javascript
function solution(a, b) {
  const day = new Date(2016, a - 1, b);
  const dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  return dayNames[day.getDay()];
}
```
> 작성중! -->

<!-- # 가운데 글자 가져오기
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12903)

### 나의 풀이
```javascript
function solution(s) {
  const mid = s.length / 2;
  return s.length % 2 ? s[Math.floor(mid)] : s[mid - 1] + s[mid];
}
```
> 작성중!

# 같은 숫자는 싫어
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12906)

### 나의 풀이
```javascript
function solution(arr) {
    if(arr.length > 1000000) return null;

    return arr.reduce((prev, cur, i, arr) => {
      if(arr[i - 1] !== cur) {
        prev.push(cur)
      }
      return prev;
    }, [])
}
```
> 작성중!


# 나누어 떨어지는 숫자 배열
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12910)

### 나의 풀이
```javascript
function solution(arr, divisor) {
  return arr.reduce((prev, cur, i) => {
    if(cur % divisor === 0) {
      prev.push(cur);
    }

    if(i + 1 === arr.length && prev.length === 0) {
      prev.push(-1);
    }

    return prev;
  }, []).sort((a, b) => a - b);
}
```
> 작성중!


# 두 정수 사이의 합
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12912)

### 나의 풀이
```javascript
function solution(a, b) {
  if(a === b) return a;

  let min = Math.min(a,b);
  let max = Math.max(a,b);
  let sum = 0;
  for(let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
```
> 작성중!


# 문자열 내 마음대로 정렬하기
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12915)

### 나의 풀이
```javascript
function solution(strings, n) {
  return strings.sort((a, b) => {
    if(a[n] === b[n]) {
      return a > b ? 1 : -1;
    }
    return a[n].charCodeAt() - b[n].charCodeAt();
  })
}
```
> 작성중!

# 문자열 내 p와 y의 개수
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12916)

### 나의 풀이
```javascript
function solution(s){
  let pCnt = s.split('').filter(v => v.toUpperCase() === 'P').length;
  let yCnt = s.split('').filter(v => v.toUpperCase() === 'Y').length;
  return pCnt === yCnt;
}
```
> 작성중!

# 문자열 내림차순으로 배치하기
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12917)

### 나의 풀이
```javascript
function solution(s) {
    return s.split('').sort().reverse().join('');
}
```
> 작성중


# 서울에서 김서방 찾기
String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12919)

### 나의 풀이
```javascript
function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}
```
> 작성중 -->

<!-- # x만큼 간격이 있는 n개의 숫자
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.<br/>
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12954)

### 나의 풀이
```javascript
function solution(x, n) {
    return Array.from({length : n}, (_, k) => x * (k + 1));
}
```

사이즈가 n인 배열을 생성하고 fill 메서드를 사용해 값을 채워도 되지만 fill 메서드는 모든 요소가 하나의 값으로만 채워지기 때문에 map 함수를 추가로 사용해야 합니다.<br/>
Array.from 메서드는 유사 배열 객체를 전달받아 배열로 변환해주는 Array 빌트인 객체의 정적 메서드입니다.<br/>
Array.from 메서드를 이용해 첫번째 인수로 유사 배열 객체를 객체를 전달하고, n의 배수 값을 반환하는 콜백 함수를 전달하여 배열을 채우도록 코드를 작성했습니다.


# 휴대폰 번호 가리기
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

[문제 자세히 보기 →](https://programmers.co.kr/learn/courses/30/lessons/12954)

### 나의 풀이
```javascript
function solution(phone_number) {
  return '*'.repeat(phone_number.length).replace(/\*{4}$/, phone_number.slice(-4))
}
```
'*' 문자를 phone\_number 길이 만큼 반복 시킨 문자열을 생성하고,
끝에 4자리를 실제 phone_number 값으로 변경 시키도록 코드를 작성했습니다.

### 다른 사람 풀이
```javascript
function solution(phone_number) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
``` -->
