# unit 03. Components

## jsx?

javascript + xml의 줄임말. js 안에서 xml문법을 사용할수 있게된다. xml은 html의 확장 문법이기 때문에 js+html이 가능하단 말이 된다. 리액트엔진이 jsx를 xml구조를 분석하고 자바스크립트 코드로 변환한다.
이런 기술을 선언형화면(Declarative View)기술이라 한다.

## jsx 없이 컴포넌트 구성하기

- `React.createElement()` 를 통해 DOM을 각각 생성해야 한다. `React.createElement()`는 `document.createElement()` 를 사용하여 리액트가 객체 모델을 생성하게 된다.

## 컴포넌트는?

기존의 웹프레임워크는 MVC(model, view, controller)방식으로 구동되는대 이 방식이 코드관리는 효율적이나 재활용(한 기능 바꾸기)이 어려웠다. MVC형에서 view를 따로 때내 새로운 컴포넌트를 쉽게 만들수 있게 한다.

## 컴포넌트 불러오기

CRA(create-react-app)를 통해 프로젝트를 진행하면 이는 웹팩 코드검색확장자(webpack module resolve)기능으로 **js, jsx 확장자를 작성하지 않아도 자동으로 인식하도록 설정**되어 있다.
파일은 다음과 같은 순서로 검색된다.

- `파일명.지정확장자` 와 같이 확장자가 주어진 파일 먼저 임포트
- 주어진 `파일명.js` 먼저, `파일명.jsx` 다음으로 검색
- 지정경로에 해당 폴더에 없다면? **`파일명`과 동일 한 폴더로 이동하여 `index.js` 파일을 찾아 열게** 된다.

## 컴포넌트 구성요소

- 프로퍼티(props) : 상위 컴포에서 하위 컴포로 전달되는 **읽기 전용 데이터**
- 스테이트(state) : 컴포넌트의 상태값으로 **변경할 수 있는 데이터**
- 컨텍스트(contaxt) : 부모 컴포넌트에서 생성된 **모든 자식 컴포넌트에 전달하는 데이터** (리덕스 스토어 개념)
