# unit 02

es6 의 새로운 문법과 알아두면 좋은 기능을 알아보자아~

**각 예제는 _파일명_.js를 통해 확인한다.**

## `forEach()`

기존 배열, 객체를 조회 할때 for문을 통해 조건문에 맞춰 값 조회&처리를 하였는데.. 이를 더 단순하게 사용할수 있는 forEach() 함수를 지원함으로서 객체조회를 효율적으로 할 수 있게 되었다.

- for문과 동일한 결과 출력
- 결과를 담을 유동객체변수가 필요하다. (ex: `let result=[]`, `let result2 = {}`)

## `map()`

`map()`은 `forEach()`와 동일하게 객체내용을 순회하며 처리한다. `forEach()`와 다른점은. `map()`의 결과를 배열의 index에 담아 반환함으로 결과를 담는 **유동객체변수**를 필요치 않는다.

- ex: `const result = arr.map(data => { value : data })`

## `reduce()`

reduce()는 객체의 누적 값을 리턴하게 된다.

## `Promise`

resolve, reject를 반환한다.

## 디바운스와 스로틀

디바운스와 스로틀은 es6문법은 아니지만 지연처리를 효율적으로 할 수 있도록 한다. 두 개념은 서버의 데이터를 요청하는 등의 작업에서 생긱는 부하를 줄여준다.

### 디바운스(debounce)

검색창에 내용을 입력하다 오래동안 검색어를 완성하지 않고 대기상태(**지연시간**)로 있으면 마지막으로 입력된 내용까지로 서버에 요청하는 방식을 말한다.대표적으로 **연관검색어창** 예로 한다.

### 스로틀(throttle)
디바운스와 비슷한 개념이지만, **입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다**는 점이 다르다. 
- 대표 예 : **무한스크롤 기능**
- 화면의 y offset에 대한 이해, 스크롤 위치에 대한 이해가 필요함
- 
