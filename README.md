# <div align="center">cafenual</div>

### <div align="center">카페 매장 운영 및 레시피 관리 웹앱 💁</div>

<br />
<br />

## 프로젝트 설명

카페에는 여러 음료와 커피를 팔고 있습니다. 카페에서 일하는 직원(또는 알바)는 이 많은 커피, 음료의 레시피를 외워야 합니다.

물론 A4용지의 레시피가 적혀있거나, 커피 머신에 포스트잇이 붙어 있습니다.

이러한 레시피를 단순 A4용지, 포스트잇이 아닌 웹앱 서비스에서 관리하게 된다면, 수정 사항이 생겼을 때 유지 보수도 쉬워지고, 직원들 입장에서도 언제 어디서든 레시피를 볼 수 있어서 직원 교육에도 많이 편해집니다.

**이러한 사항을 개선하기 위해 카페 레시피 관리 웹앱을 만들기로 했습니다**

<br />

_2021년 7월 19일 추가_

팀 프로젝트로 진행했던 [Albalog](https://github.com/AlbalogTeam/AlbalogClient) 의 기능을 추가해보면 좋을 거 같아서 기능을 추가하기로 했습니다.

단순 카페 레시피 관리 웹이었던 cafenual에 업무 매뉴얼, 전달사항, 직원관리, 스케줄 기능, 공지사항 기능을 추가하여 , 카페 매장 운영 시스템으로 변경 하였습니다.

UI는 기존 Albalog에서 가져오기로 하였습니다.

<br />

## 구현이 완료 된 기능

- 회원가입, 로그인, 로그아웃
- 공지사항 작성 , 수정, 삭제
- 메뉴 레시피 (카테고리: 생성, 수정, 삭제, 레시피: 생성, 수정, 삭제 )

<br />

## 기술 스택

### Front-End

- React
- Typescript
- React-router
- Redux
- Redux-toolkit
- SCSS

### Back-End

- Nodejs
- Typescript
- Expressjs
- mongoDB
- mongoose

<br/>

## UI Screen (이미지를 클릭하시면 크게 보실 수 있습니다 !)

<img src="https://user-images.githubusercontent.com/64634992/128808215-d8b4524c-27b3-44bd-9b89-1de6e4f22e09.PNG" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128808218-0afc2078-4974-4a04-9c6b-710bf0e86548.PNG" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128808221-0abbca7a-921f-4c7d-a38e-02ab19a6ce71.PNG" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128808222-6ffab6af-91c6-45e7-941d-1f5b8ceb3c0f.PNG" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128808223-53be9cef-c719-4249-8e05-1ea911835532.PNG" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128808225-c52a9bbe-f326-4718-b6a6-ca69748374fe.PNG" width="48%" />

<br />
<br />

## 프로젝트 실행 방법

### 필수 구성 요소

- Node.js
- MongoDB

<br />

### 설치

1. 프로젝트 클론

```
$ git clone "https://github.com/cafenual/cafenual-do.git"
```

2. 패키지 설치

코드 에디터(ide) 로 프로젝트 폴더 실행 후 터미널 실행

```
$ cd client
$ npm install
```

새 터미널 실행

```
$ cd server
$ npm install

```

3. `env` 설정 server 폴더 안에 .env 파일 생성 후 아래 내용 추가

```
PORT=4000
DBURL="몽고디비 주소 입력"
JWT_SECRET=cafenual
```

4. 서버 실행

server

```
$ cd server
$ npm run dev
```

client

```
$ cd client
$ npm start
```

<br />
<br />

## 프로젝트를 통해 배운점

- 댓글(작성, 수정, 삭제) 기능을 구현하기 위해 다양한 시도를 하였고, 시도 끝에 잘 구현할 수 있게 되었습니다. 특히 댓글 수정 부분에서 수정 버튼을 클릭하면 해당 댓글이 활성화되는 과정이 많이 어려웠습니다.

  _클릭한 댓글의 \_id 값이랑 일치하는 댓글의 태그를 input으로 바꿔주는 단순한 작업이었는데, 그 당시에는 너무 어렵게 느껴졌었네요 ㅋㅋ ㅠ_

- 이미지 업로드를 처음 구현해 본 프로젝트 였습니다. 인터넷 강의를 통해서 multer의 사용법은 알았지만, 응용을 하지 못해서 multer의 문서를 열심히 읽었습니다. 덕분에 다음 프로젝트에서는 이미지 업로드는 쉽게 구현할 수 있게 되었습니다
- node , express, mongoDB, mongoose를 javascript에서 typescript로 세팅부터 적용, 구현까지 해봤습니다. 처음 typescript를 공부할 땐, 이걸 사람들이 왜 쓰지 ??라는 생각을 했지만, 프로젝트가 커지고 계속 사용하다 보니 앞으로는 javascript보단 typescript를 사용할 거 같습니다. type을 이용하여 해당 메서드나 변수를 쉽게 확인할 수 있고,잘못 짠 코드를 typescript가 바로 알려주기 때문에 버그를 많이 피할 수 있었습니다

  (_예시 :이 변수를 출력하려고 하는데, 이 변수는 항상 undefined 입니다_ )
