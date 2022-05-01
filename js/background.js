const images = ["0.jpeg", "1.jpeg", "2.jpeg"];


// chosenImage에 이미지를 랜덤 선언
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//[quiz] 'append()' vs 'appendChild()' 둘 다 시도해보기
document.body.append(bgImage);

//appendChild 는 DOM 메서드, 생성되어 있는 요소 하나만 (그것도 노드 객체만)
//append는 js 함수, 문자도 추가 가능 근데 반환 값이 없음, 여러개 가능 ㅇㅇ 