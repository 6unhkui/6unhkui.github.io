---
category : Gatsby Blog
title: 기능 추가하기
date: "2020-07-28"
tags : ["Gatsby", "React", "Blog"]
featuredImage: thumbnail.png
---
> 🔒 작성중

> ``Gatsby``에서는 많은 플러그인을 제공해준다. <br/>
> 그 중 내가 블로그를 만들면서 적용한 기능들의 구현 방법에 대해 정리하려 한다. <br/>

#  각주에 번호 달기
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


# 마크다운 외부 링크에 속성 추가하기
마크다운에서 html로 변환된 컨텐츠의 외부 링크를 클릭하면 현재창에서 바로 페이지가 이동한다.<br/>
새창으로 오픈하기 위해서는 변환 과정에서 ``a``태그에 ``target="_blank"`` 속성 값을 추가하는 과정이 필요하다.

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
+                 rel: "noreferrer"
+              }
+           }
+         ],
        },
      },
    ],
 };
```
#### 3) 사용하기
```markdown
[my blog](https://6unhkui.github.io/)
```
```html
<a href="https://6unhkui.github.io/" target="_blank" rel="noreferrer">my blog</a>
```

# 다크모드
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

#### 3) 사용하기
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

# 참고
- [gatsby.org](https://www.gatsbyjs.org/)