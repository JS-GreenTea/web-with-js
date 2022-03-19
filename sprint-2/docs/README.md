<h1 align="middle"><strong>[Mission 2]</strong> 🛠&nbsp;커스텀 Reduce 함수</h1>



## ✅ 요구사항

### 🛠 기능

- [x] 커스텀 Reduce 함수를 구현한다.

  - Reduce 함수는 다음과 같이 동작한다.

  ```javascript
  const list = [1, 2, 3, 4, 5];
  const sum = list.reduce((acc, cur) => acc + cur);
  console.log(sum);	// 15
  ```

- [x] 커스텀 Reduce 함수를 사용하여 명령 입력기를 구현한다.

  - 명령에는 `count`, `add` 가 존재한다.

  - [x] `count`

    - 연달아 오는 값들의 개수를 구한다.

    - 값 : 숫자, 문자

  - [x] `add`

    - 연달아 오는 값들의 합을 구한다.

    - 값 : 숫자

### 🔍 입력

- [ ] 사용자 입력은 따로 구현하지 않는다.
  - [ ] `명령어`와 `연달아 오는 값들`을 모두 공백으로 구분하여 입력받는다.
- [ ] 예외 처리는 구현하지 않아도 된다.

- 입력 예시

  ```javascript
  count 1 2 3 4 5
  add 35 23
  ```

### 💻 출력

- [ ] 출력 기능은 `log.js`의 `Log` 클래스가 담당한다.
- [ ] `node main.js`의 `main` 함수를 실행시키면 올바른 결과를 출력한다.

- 출력 예시

  ```javascript
  count: 5
  add: 58
  ```





