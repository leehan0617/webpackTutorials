<h2> Tutorial1 </h2>

참고 : npm 및 babel에 대한 사전지식이 있어야 이해할 수 있습니다. 모른다면 npm 및 babel을 먼저 공부하는걸 추천 <br>

1. 설치해야할 패키지 목록들 <br>
npm install webpack -g <br>
npm install webpack --save-dev <br>
npm install webpack-dev-server --save-dev <br>
npm install -g live-server (브라우저 테스트 용) <br>

2. 실행 및 결과확인 <br>
다 설치하고 root directory에서 webpack만 실행하면 끝.(public 디렉토리에 bundle.js가 최종 결과물이다.)

3. webpack 분석 <br>
webpack을 분석을 하려면 webpack.config.js를 먼저 확인해야 한다. <br>
간단히 요약을 한다면.. <br>
webpack만으로 번들링이 되는 이유는 webpack.config.js가 디폴트 파일명이기 떄문이다. 파일명을 다르게 한다면 webpack '수정한 파일명'을 하면 된다. <br>
webpack.config.js파일을 대략 보면 <br>
entry : 파일을 번들링(합치기)를 할 시작점 파일을 작성해주면된다. <br>
output : 결과물이 만들어질 디렉토리 위치를 작성하면된다. <br>

__dirname은 node.js에서 지정한 전역변수명이다.(현재 실행중인 스크립트가 포함된 디렉토리 이름을 나타내는 변수)
