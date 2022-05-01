const clock = document.querySelector("h2#clock");

function getClock() {
  //[quiz] 'Date() 생성자'에 대하여 검색하기 
  const date = new Date(); // 날짜 객체 생성 
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //[quiz] 값 추가 : 'innerText' vs 'innerHTML' 차이점 찾아보기
  //단순히 text 형태로 넣는지 html 태그 형태로 넣는지 ㅇㅇ
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
