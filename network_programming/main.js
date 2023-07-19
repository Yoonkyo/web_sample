let cadet_num = [7513200,7513216,7513252,7513254,7513266,7513273,7513343,7513391,7513400,7513407,7513410,7513414];
let cadet_score = [60,91,75,83,90,67,91,83,88,70,65,70];
let cadet_name = ['고민우', '김민우', '남민혁', '남호진', '박도근', '박성원', '이창민', '태건민', '허훈', '황서윤', '황지현', '바오중']

// 중복서브밋 방지
var doubleSubmitFlag = false;
function doubleSubmitCheck(){
    if(doubleSubmitFlag){
        return doubleSubmitFlag;
    }else{
        doubleSubmitFlag = true;
        return false;
    }
}

function init() {
    let signupForm = document.querySelector('form');
    signupForm.addEventListener('submit', event => {
    event.preventDefault();
        let nameInput = event.target['name'];
        let num = parseInt(nameInput.value);
        let loc = cadet_num.findIndex(v => v == num);
        let score = cadet_score[loc]
        let who = cadet_name[loc]
        if (nameInput.value == "이미정"){
            alert(`사랑해요 라인 여신♥‿♥`);
        }
        else if(score == null){
            alert(`교번을 다시 입력하세요!`);
        }
        else{
            alert(`${who} 생도의 기말고사 점수는 ${score}점 입니다.`);
        }
    });
}