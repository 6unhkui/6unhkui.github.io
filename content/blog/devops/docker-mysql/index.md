---
menu : devops
category : Docker
title: mysql 컨테이너 생성하기
date: "2020-07-27"
tags : ["Docker", "mysql"]
featuredImage: thumbnail.png
---
## 1. mysql 컨테이너 생성 및 실행
``docker run`` 명령어를 통해 컨테이너의 생성과 실행을 동시에 진행한다.
```shell
$ docker run -d -p ${호스트에서 접근 할 포트}:3306 --name ${컨테이너 이름} -e MYSQL_ROOT_PASSWORD=${PASSWORD} -v ${로컬 호스트의 저장소 경로}:/var/lib/mysql mysql
# e.g. docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=password -v /Users/inkyung/datadir:/var/lib/mysql mysql
```
#### 옵션
- **-d** <br/>
    데몬 프로세스로 실행한다.
- **-p ${호스트에서 접근 할 포트}:${컨테이너의 포트}** <br/>
    호스트에서 ${호스트에서 접근 할 포트}로 접근하면 ${컨테이너의 포트}의 컨테이너로 접근하게 된다.
- **-e MYSQL_ROOT_PASSWORD=${PASSWORD}** <br/>
    MYSQL_ROOT_PASSWORD 이름으로 환경 변수 값을 지정한다.
- **-v ${로컬 호스트의 저장소 경로}:/var/lib/mysql** <br/>
   데이터 볼륨 옵션으로, ${로컬 호스트의 저장소 경로}를 mysql의 저장소 경로에 마운트 하도록 설정한다. <br/>
   이 옵션을 설정하지 않으면 데이터 디렉토리가 컨테이너 내부에 생성되어 컨테이너 삭제시 저장소도 함께 지워지게 된다.


## 2. 컨테이너 접속
```shell
$ docker exec -it ${CONTAINER_NAME} bash
# docker exec -it mysql-db bash
```
- 패스워드는 위 컨테이너 생성 및 실행 명령어에서 지정한 ``MYSQL_ROOT_PASSWORD``환경 변수 값을 입력한다.

## 3. mysql 서버 접속
```shell
$ mysql -u root -p 
```

## 4. mysql 기본 설정
### 유저 생성
```sql
create user '${USER_NAME}'@'${HOST}' identified by '${USER_PASSWORD}';
// e.g. create user 'inkyung'@'%' identified by 'password';
```
### 유저 권한 부여
```sql
create user '${USER_NAME}'@'${HOST}' identified by '${USER_PASSWORD}';
// e.g. create user 'inkyung'@'%' identified by 'password';
```
### 데이터베이스 생성
```sql
create database ${DB_NAME} default character set utf8;
```

<br/>

## 참고
- [Docker를 통한 MySQL 설치하기 by 기억하기 위한 개발노트](http://jmlim.github.io/docker/2019/07/30/docker-mysql-setup/)
- [DOCKER 에 VOLUMES 추가 하기 by Voyager of Linux](https://linux.systemv.pe.kr/docker-%EC%97%90-volumes-%EC%B6%94%EA%B0%80-%ED%95%98%EA%B8%B0/)