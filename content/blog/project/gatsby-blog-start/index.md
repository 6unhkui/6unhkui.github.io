---
category : Gatsby Blog
title: Gatsby로 블로그 만들기
date: "2020-07-29"
tags : ["Gatsby", "React", "Blog"]
featuredImage: thumbnail.png
---
> 🔒 작성중

# Gatsby란
Gatsby는 ``React`` 기반의 정적 페이지 생성기이다. <br/>
빌드 시점에 ``GraphQL``을 사용하여 데이터 소스(e.g. markdown file)의 데이터를 가져와 정적 페이지로 만들어준다. <br/>
정적 페이지 생성기로 ``Jekyll``이나 ``hexo``도 많이 사용되지만, 개발 속도와 확장성을 고려하여 내가 잘 다룰 수 있는 React 기반의 ``Gatsby``로 블로그를 만들기로 결정하였다.<br/>

# 기본 프로젝트 생성 및 실행
## 1. Gatsby CLI 설치
```shell
yarn global add gatsby-cli
# 혹은
npm install —g gatsby-cli
```

## 2. 프로젝트 생성
```shell
gatsby new ${PROJECT_NAME} https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## 3. 서버 실행 (개발 모드)
```shell
gatsby develop
```
서버가 정상적으로 실행되면 ```localhost:8000```로 접속 할 수 있다. <br/>
또한 ``localhost:8000/___graphql``로 접속하면 GraphiQL을 통해 GraphQL을 쉽게 작성 할 수 있다.

 
# 참고
- [Gatsby.org](https://www.gatsbyjs.org/) 