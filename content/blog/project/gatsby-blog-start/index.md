---
category : Gatsby Blog
title: Gatsby로 블로그 만들기
date: "2020-07-29"
tags : ["Gatsby", "React"]
featuredImage: thumbnail.png
---

# 🤔 Gatsby
Gatsby는 React 기반의 정적 페이지 생성기로, 빌드 시점에 GraphQL을 사용하여 데이터 소스(e.g. markdown file)의 데이터를 가져와 static 페이지를 생성한다. <br/>
이미 마크업이 완료된 HTML 페이지가 빌드 시점에 생성되었기 때문에 SEO도 수월하게 적용 할 수 있다.<br/>

이 외에도 정적 페이지 생성기로 ``Jekyll``이나 ``hexo``도 많이 사용된다.


# 💻 기본 프로젝트 생성 및 실행
## 1. Gatsby CLI 설치
gatsby 명령어 사용을 위해 gatsby-cli를 전역적으로 설치한다.
```shell
npm install —g gatsby-cli
```

## 2. 프로젝트 생성
gatsby 팀이 제공하는 starter로 프로젝트를 시작해해보자
```shell
gatsby new ${PROJECT_NAME} https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## 3. 서버 실행 (개발 모드)
```shell
gatsby develop
```
서버가 정상적으로 실행되면 ```localhost:8000```로 접속 할 수 있다. <br/>
또한 ``localhost:8000/___graphql``로 접속하면 GraphiQL을 통해 GraphQL을 GUI 환경에서 쉽게 작성하고 테스트 해볼 수 있다.

 
# 🗂 파일 살펴보기
## 설정 파일
gatsby 프로젝트를 생성하면 프로젝트 루트 경로에 기본으로 생성되어있는 gatsby-###.js 네이밍의 파일들이 눈에 띈다.<br/>
gatsby API를 사용하여 프로젝트에 대한 설정을 할 수 있는 파일이다. 각 역할 별로 분리가 되어있다.<br/>
- ``gatsby-browser.js``<br/>
    Gatsby Browser API를 사용해 클라이언트 사이드(브라우저)에서의 설정을 할 수 있다.
- ``gatsby-config.js``<br/>
    사이트의 metadata(title, description)를 정의하며, Gatsby plugin을 추가할 수 있는 설정 파일이다.
- ``gatsby-node.js``<br/>
    Gatsby Node API를 사용해 프로젝트 빌드 프로세스에 영향을 미치는 설정을 할 수 있다.<br/>
    이 파일에서 GraphQL을 사용해 markdown 데이터를 읽고 탬플릿까지 적용한 화면까지 생성 할 수 있다.
- ``gatsby-ssr.js``<br/>
    Gatsby Server Rendering API를 이용해 서버 사이드 렌더링에 대한 설정을 한다.
    

## Routing
Next.js와 비슷하게 pages 디렉토리 안에 있는 페이지를 라우팅 해준다.<br/>
js 파일을 생성하고 그 파일 명에 맞는 Path로 접속하면 된다.<br/>
만약 ``pages/hello.js``를 생성하면 ``localhost:8000/hello``로 접속 할 수 있다.


# 🔧 기능 확장하기
Gatsby에서는 많은 플러그인을 제공해준다. <br/>
그 중 내가 블로그를 만들면서 적용한 기능들의 구현 방법에 대해 정리하려 한다. <br/>

## 각주
> 첫번째 각주[^fn1] 두번째 각주[^fn2]
 
각주를 사용할 때, 위와 같이 각주 엘리먼트에 번호를 자동으로 달아주는 기능이다.

#### 1) 라이브러리 추가
```shell
yarn add gatsby-remark-numbered-footnotes
```

#### 2) 플러그인 추가
``` diff:title=gatsby-config.js
 module.exports = {
    plugins: [
      {
        resolve: 'gatsby-transformer-remark',
        options: {
+         plugins: [
+           'gatsby-remark-numbered-footnotes',
+         ],
        },
      },
    ],
 };
```
#### 3) 사용하기
이제 마크다운의 각주 문법을 사용 할 수 있다
```markdown
첫번째 각주[^fn1] 두번째 각주[^fn2]

[^fn1]:
  첫번째 각주 내용
[^fn2]:
  두번째 각주 내용
```


## 마크다운 외부 링크에 속성 추가하기
마크다운에서 html로 변환된 컨텐츠의 외부 링크를 클릭하면 현재창에서 바로 페이지가 이동한다.<br/>
html 변환 과정에서 ``a``태그에 ``target="_blank"`` 속성 값을 추가하여 새창으로 오픈되도록 설정하자

#### 1) 라이브러리 추가
```shell
yarn add gatsby-remark-external-links
```

#### 2) 플러그인 추가
``` diff:title=gatsby-config.js
 module.exports = {
    plugins: [
      {
        resolve: 'gatsby-transformer-remark',
        options: {
+         plugins: [
+           {
+              resolve: "gatsby-remark-external-links",
+              options: {
+                 target: "_blank",
+                 rel: "noreferrer noopener" 
+              }
+           }
+         ],
        },
      },
    ],
 };
```
- ``rel: "noreferrer noopener"`` : 새창에서 링크를 열때, window.opener 객체를 조작하지 못하도록 정보를 없애줘야 합니다.

#### 3) 사용하기
```markdown
[my blog](https://6unhkui.github.io/)
```

- 확인 
```html
<a href="https://6unhkui.github.io/" target="_blank" rel="noreferrer noopener">my blog</a>
```

## 다크모드
#### 1) 라이브러리 추가
```shell
yarn add gatsby-plugin-dark-mode
```
#### 2) 플러그인 추가
``` diff:title=gatsby-config.js
 module.exports = {
    plugins: [
+     'gatsby-plugin-dark-mode'
    ],
 };
```

#### 3) 적용하기
```javascript:title=components/darkModeToggle.tsx
 import React from 'react';
 import { ThemeToggler } from 'gatsby-plugin-dark-mode'
 ...

 export default function DarkmodeToggle() {
   return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
              <div className={"floating darkmode " + theme} onClick={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark')}}>
                  <img src={(theme === 'dark' ? Moon : Sun)}/>
              </div>
        )}
      </ThemeToggler>
   )
 }
```
이 플러그인은 body 태그의 class 명을 dark 혹은 light로 변경해준다.<br/>
그에 맞게 mode 별로 스타일을 적용해주면 된다.




# 참고
- [Gatsby.org](https://www.gatsbyjs.org/) 