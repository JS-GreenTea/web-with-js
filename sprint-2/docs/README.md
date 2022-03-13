# 스프린트 2주차 과제
### 문제 조건
- count 명령
    - 연달아 오는 값이 숫자든 문자든 카운트 한다.(공백으로 구분 되는 개체)
- add 명령
    - 연달아 오는 값들의 합을 구한다.
    - 연달아 오는 값이 숫자여야 한다.
- ~~set 명령~~
    - ~~문제에 명시되지 않음.~~
- Error 처리는 구현할 필요가 없다.
    - 문제 조건에서 Error처리에 관한 구현은 필요없다 했으므로, 입력이 항상 올바르게 입력되고, reduce 함수의 콜백 중 Error도 구현하지 않음.
    - ~~구현해도 좋다.~~


## reduce 요구사항

### Array.prototype.reduce()
#### 구문

`arr.reduce(callback[, initialValue])`

#### 매개변수

- `callback` : 배열의 각 요소에 대해 실행할 함수. 다음의 4가지 인수를 받는다.
    - `accumulator` : 콜백의 반환값을 누적한다. 콜백의 첫번째 호출이면서 initialValue를 제공한 경우 initialValue의 값임.
    - `currentValue` : 처리할 현재 요소
    - `currentIndex(optional)` : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작한다.
    - `array(optional)` : reduce()를 호출한 배열
- `initialValue(optional)` : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫번째 요소를 사용.

#### 반환 값

누적 계산의 결과 값

#### 세부 로직

빈 요소를 제외하고 배열 내에 존재하는 **각 요소** 에 대해 callback **함수를 한 번씩** 실행한다.

**콜백의 최초호출**

`accumulator` 와 `currentValue`는 다음 두 가지 값 중 하나를 가질 수 있다.

- initalValue를 제공한 경우
    - accumulator 는 initialValue와 같다.
    - currentValue 는 배열의 첫 번째 값과 같다.
- initalValue를 제공하지 않은 경우
    - accumulator 는 배열의 첫 번째 값과 같다.
    - currentValue 는 배열의 두 번째 값과 같다.
- 배열이 비어있는데 initialValue를 제공한 경우
    - TypeError 발생.
- initialValue는 주어졌으나 배열이 1개일 경우 & 배열의 요소가 1개 지만, initialValue를 제공하지 않은 경우
    - 단독 값을 callback 호출없이 반환

### 각 클래스 설명

commander.js : 입력 명령어를 파싱, 콜백함수 및 명령옵션 추출을 담당하는 클래스

array.js : customReduce를 구현한 모듈

log.js : 결과를 print 하는 모듈

