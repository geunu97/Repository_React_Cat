<h1 align="center">고양이 사진관</h1>
<p align="center">바닐라 자바스크립트와 리액트의 차이를 직접 경험해보고 싶어서</p>
<p align="center"><a href="https://github.com/geunu97/Repository_VanillaJS_Cat">VanillaJS 고양이 사진관</a>을 React로 전환하여 개발하였습니다.</p>
<p align="center"><a href="https://geunu-react-cat.netlify.app" title="고양이 사진관">확인하러 가기!</a></p>

## 내부 전환

|                                                   **바닐라 자바스크립트**                                                    |                                                          **리액트**                                                          |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| <img width=100% src="https://user-images.githubusercontent.com/73439375/181865088-37b1e311-ae49-4bee-ac7e-dd6a01105616.png"> | <img width=100% src="https://user-images.githubusercontent.com/73439375/181865093-abc572a7-c7db-4ee2-b514-062f206b7a2b.png"> |

#### 작업 내용

- 검색 및 렌더링
- 검색어 저장
- Web Storage
- 모바일뷰
- 폰트
- 다크모드
- 모달창
- 디바운싱

## 추가 작업

|                                                   **바닐라 자바스크립트**                                                    |                                                          **리액트**                                                          |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| <img width=100% src="https://user-images.githubusercontent.com/73439375/182106600-1fe0179e-dbc2-4df1-a899-50bd1cda15de.png"> | <img width=100% src="https://user-images.githubusercontent.com/73439375/182107132-660be67d-3370-4e8f-b0e7-b850b3bc8632.png"> |

#### 작업 내용

- 공백 입력 시 오류 해결
- 네트워크 요청 실패시 로딩 오류 해결
- 검색어 저장 오류 해결
- 페이지네이션
- UI 개선

## 기록

- <a href="https://geunu97-9.notion.site/440902f10d1642c1a3c27e584ba56f4c">개발 및 문제해결 과정을 기록했습니다.</a>
- <a href="https://geunu97.tistory.com/74">useState 비동기 작동과 불변 메서드로 발생한 문제 해결 과정</a>

## 참고 자료

- <a href="https://geunu97-6.notion.site/Javascript-JS-6c3e9a89885246e99ca33438609b6fd3">자바스크립트</a>
- <a href="https://geunu97-6.notion.site/React-48a04ad2c3a141bfb23bfe11e6c20b4c">리액트</a>

## 작업 방식

- 개인 브랜치 작업 -> dev 브랜치로 merge -> 최종 master 브랜치로 merge
- 최대한 오류를 줄이고자 각 단계를 거치게 했습니다.

## 좋았던 점

- 리액트의 쉽고 간편한 JSX문법을 사용하여 컴포넌트를 개발하였더니 <a href="https://github.com/geunu97/Repository_VanillaJS_Cat">VanillaJS 고양이 사진관</a>보다 작업 속도가 2주 정도 향상됐습니다.
- <a href="https://github.com/geunu97/Repository_VanillaJS_Cat">VanillaJS 고양이 사진관</a>에서 class로 개발했던 것을, 리액트에서는 함수로 개발하였는데 더 쉽고 간편하다고 느꼈습니다.
- 기본적으로 state와 props를 지원해주므로, 상태관리 작업이 편리했습니다.
- 전체적인 오류를 확인할 기회가 생겼습니다.
  - 기존에 네트워크 요청의 실패에 대한 처리를 안해줘서 발생한 오류를 발견하여 처리를 했습니다.
  - Input 공백 입력 시 발생한 오류를 발견하여 처리를 했습니다.
- 기존에 아쉬웠던 UI를 조금 더 이쁘게 다루는 기회가 됐습니다.

## 나빴던 점

- 성능 측정 도구인 Profiler를 사용하여 바닐라 자바스크립트와 리액트의 렌더링, 리렌더링 속도 수치를 비교하고 싶었지만, Profiler는 리액트만 지원해줘서 아쉬웠습니다.
