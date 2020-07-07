# 리덕스

6장의 context api(이하 컨텍스트) 보다 더 체계적으로 데이터를 관리할때 사용, 컨텍스트와 달리 라이브러리로 추가 설치가 필요하다.

_리덕스와 컨텍스트 중 무엇으로 프로젝트를 진행해야 할까?_

- 서버에서 가져온데이터로 새로운 결과물을 만드는 경우 : **리덕스 사용**
- 컴포넌트를 통합 데이터를 관리하는 경우 : **컨텍스트 사용**

> 프로퍼티(props) : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기전용 데이터
> 상태값(state) : 컴포넌트에서 사용하는 데이터를 저장하는 변수
> 컨텍스트(context) : 부모 컴포넌트에서 생성 > 모든 자식에게 전달하는 데이터
> 리덕스(redux): 서버에서 받은 데이터를 앱 전체에 전달하거나 관리

## 동작방식

리덕스의 데이터가 변경되는 과정을 알아보자

> 스토어 -[`connect()`]- 컴포넌트 -[`dispatch()`]- 액션 - 리듀서 - 스토어

- 액션 : 리듀서에서 처리할 작업의 이름과 데이터가 객체형태로 들어있다. **여기는 데이터 정의**
- 리듀서 : 액션을 받아 스토어 변경작업을 진행 **여기서 데이터 변경**

## 리덕스 개발준비

### 1. 프로젝트에 모듈 추가

`yarn add redux react-redux` : 리덕스, 리덕스리액트 설치
`yarn redux-devtools-extension --dev` : 리덕스 데브툴 미들웨어 설치

### 2. 크롬 확장도구 설치

`리덕스 크롬 확장도구 chrome redux devtools` 설치

## 폴더구조

벨로퍼트는 아래와 같이 폴더구조를 이야기 하는데.. 복잡시럽다. 비추!

> src 내부에 아래 폴더를 생성한다.
>
> - actions : 액션타입, 액션생성자 파일 저장
> - components : **프리젠테이션 컴포넌트** 만 저장
> - containers : store에 접근이 닿는 **컨테이너 컴포넌트** 저장
> - reducers : 스토어의 기본상태와, 상태업데이트를 담당하는 리듀서파일 저장
> - utils : 일부 컴포넌트들에서 **공통 사용하는 컴포**, 파일저장

### 프레젠테이셔널 컴포넌트

**프레젠테이셔널 컴포넌트**는 store에 접근하지 않으며, 데이터 변경또한 하지 않는 **props를 통해 데이터를 전달받아 화면에 보여주기만 하는 역할**을 한다.

### 컨테이너 컴포넌트

**컨테이너 컴포넌트** 는 일반컴포, 프레젠테이셔널컴포를 관리한다. _스타일을 갖고 있지 않는다_. 말그대로 컴포넌트를 담는 상자일뿐 어떠한 기능도 갖지 않는다.

- 페이지
- 리스트
- 헤더
- 사이드바
- 내부컴포넌트 때문에 props가 여러 컴포넌트를 거처야 하는 경우

## 스토어 생성

스토어는 `src/index.js` 에 설정
`createStore(리듀서, state초기화, 미들웨어)`

```js
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
  reducer,
  preloadedState,
  compose(applyMidleware(...middleware))
);
```