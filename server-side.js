/*
 * "문서" vs app server 와 서로 통신하는 방법 "AJAX"
 * 1. XMLHttpRequest : 클래식한 방법이자 server의 response 응답패텅닝 비슷하다.
 * 2. fetch : Promise 기반의 선언형 통신 방법, Promise의 장점을 살리면서도 간략하다.
 * 대표적인 두 가지 방법이 '사람을 대신해' 서버와의 요청응답을 처리한다.
 */

function getCurrentDate() {
  const xhr = new XMLHttpRequest();
  //xhr 은 'new' 키워드를 사용하였기에 어떠한 생성자 함수로부터 인스턴스로
  //"객체"를 생성한 행위이다. 즉 xhr는 객체다.
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      //예제의 가독성 측면을 고려해 아래에서 식별함
      const root = document.getElementById("root");
      root.innerHTML = this.responseText;
      //일련의 text 데이터가 innerHTML 객체에 할당되는 것을 알 수 있다.
    }
  });
  /* 
    1. 위의 코드를 보았을 때 문서는 어떤 데이터를 받아와 문서에 새기는 동작이다. 
    2. status === 200 은 서버가 정상적으로 응답했다는 의미이다. 
    3. readyState === 4 는 서버가 응답을 완료했다는 의미이다.
    3-1. readyState 값은 말그대로 '준비상태'를 이야기 한다.
    3-2. 숫자 4는 서버가 응답을 해서 어떤 데이터를 가져왔다는 이야기이고, 준비 '절차'는 약속이다.
    3-3. 0부터 4까지의 숫자는 각각의 준비상태를 의미한다.

    0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE <== 4번이 위 코드에 해당
  */
  xhr.open("GET", "/date");
  // 1. GET 방식으로 서버에 요청을 보낸다.
  // 2. '/date', GET 요청이므로 URL querystring 에 해당한다.
  // 3. 서버의 request 로 url을 감지하여 그에 맞는 response를 보내준다.
  xhr.send();
  // 4. 보내는 동작
}

setInterval(getCurrentDate, 1000);
/*
 * ? setInterval()을 설명하는 보통의 예제는
 * setInterval(function() {
 *  console.log('hello)
 * }, 1000)
 * 형태로 setInterval()을 작성할때 함수를 매개변수 자리에서 선언하는 패턴이 많지만
 * 위의 getCurrentDate()함수를 '호출' 하는 것이 아닌 '참조' 하는 방식이다.
 * setInterval() 호출부에서 getCurrentDate() 함수를 호출하는 것이 아니라
 * getCurrentDate() 함수 자체를 setInterval()에 전달하는 것이다.
 */
