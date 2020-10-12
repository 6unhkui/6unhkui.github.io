---
category : JPA
title: AttributeConverter를 이용해 데이터 타입을 변환하여 저장하기
date: "2020-08-09"
tags : ["Java", "JPA"]
featuredImage: thumbnail.png
---
# 서론
JPA의 entity class에 열거형으로 정의된 값을 `@Enumerated` 어노테이션을 사용하여 저장할 경우 옵션에 따른 선택지는 아래와 같다.
- `EnumType.ORDINAL` : 상수가 정의된 순서가 저장된다. enum의 값이 추가될 경우, 에러 발생의 가능성이 크므로 EnumType.STRING을 사용 하는 것이 좋다.
- `EnumType.STRING` : 상수 이름 그대로 문자열 컬럼에 저장된다

하지만 `EnumType.STRING` 역시도 상수의 이름이 변경되면 기존 DB 데이터와 매핑되지 않는 이슈가 발생된다.<br/>
또한 상수 값을 데이터베이스에 문자열 그대로 저장할 경우, 쓸데없는 데이터 공간의 낭비가 발생되므로 성능에 좋지 못한 방법이다.


# AttributeConverter 사용하기
JPA에서는 JDBC 타입을 자바 클래스에 쉽게 매핑 할 수 있도록 `AttributeConverter` 인터페이스를 제공해준다.

1. enum 생성

```java
public enum UserRole {
    USER(0), MANAGER(99);

    private final int value;

    UserRole(int value) {
        this.value = value;
    }

    public static UserRole findByValue(int value) { 
        return Arrays.stream(UserRole.values())
                     .filter(v -> v.getValue() == value)
                     .findAny().orElse(null);
    }

    public int getValue() {
        return this.value;
    }
}
```

2. AttributeConverter 인터페이스 구현

```java
@Convert
public class UserRoleConverter implements AttributeConverter<UserRole, Integer> {
    @Override
    public Integer convertToDatabaseColumn(UserRole attribute) {
        if(attribute == null) return null;
        return attribute.getValue();
    }

    @Override
    public UserRole convertToEntityAttribute(Integer dbData) {
        if(dbData == null) return null;
        return UserRole.findByValue(dbData);
    }
}
```

3. entity에서 사용하기

```java
@Entity 
@NoArgsConstructor(access = PROTECTED)
@Getter
public class User extends BaseEntity {
    ...
    @Convert(converter = UserRoleConverter.class)
    private UserRole role;
    ...
}
```

# 참고
- [Baeldung](https://www.baeldung.com/jpa-persisting-enums-in-jpa)