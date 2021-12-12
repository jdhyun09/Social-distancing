
var social_distancing = "단계적 일상회복 1단계 + (12월 6일부터 4주간 추가 방역조치)";
var time = ["24시까지(24시~05시까지 영업제한)","제한없음"];
var people = ["6명","8명"];
var pass = ["접종완료자만", "접종완료자 + PCR음성확인자"];
var where = ["식당","카페","헬스장","유흥시설","PC방","영화관","노래연습장","스포츠관람장","공연장"];
var myloc = ["서울","경기","인천","강원","충북","세종","충남","경북","대전","대구","전북","울산","경남","전남","광주","부산","제주"];

var url = document.location.href;
var nowValue = parseInt(url.substr(url.length - 2,2));//url 문자열에서 마지막 두 문자를 떼와서 int로 형변환
var initinfo = false;

function info_show(){
    document.getElementById("informationSpace").style.display = "block";
}
function info_hide(){
    document.getElementById("informationSpace").style.display = "none";
}

function searchWhere(){
    var myname = document.getElementById("search_text").value;
    var check = where.indexOf(myname);
    if(check != -1){
        load_info(check);
        info_show();
    }
    else{
        alert("정보를 제공하지 않는 시설입니다.");
    }
}

function load_info(num){
    if(initinfo == false){
        initinfo = true;
        document.getElementById("current_SD").innerText = social_distancing;
    }

    if(nowValue < 3){
        document.getElementById("people").innerText = people[0];
    }
    else{
        document.getElementById("people").innerText = people[1];
    }

    switch(num){
        case 0://식당
            document.getElementById("title").innerText = myloc[nowValue] + "의 식당은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "사적모임 범위 내에서 미접종자 1명까지는 예외 인정";
            break;
        case 1://카페
            document.getElementById("title").innerText = myloc[nowValue] + "의 카페는?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "사적모임 범위 내에서 미접종자 1명까지는 예외 인정";
            break;
        case 2://헬스장
            document.getElementById("title").innerText = myloc[nowValue] + "의 헬스장은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "";
            break;
        case 3://유흥시설
            document.getElementById("title").innerText = myloc[nowValue] + "의 유흥시설은?";
            document.getElementById("time").innerText = time[0];
            document.getElementById("pass").innerText = pass[0];
            document.getElementById("extra").innerText = "";
            break;
        case 4://PC방
            document.getElementById("title").innerText = myloc[nowValue] + "의 PC방은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "";
            break;
        case 5://영화관
            document.getElementById("title").innerText = myloc[nowValue] + "의 영화관은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "";
            break;
        case 6://노래연습장
            document.getElementById("title").innerText = myloc[nowValue] + "의 노래연습장은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "";
            break;
        case 7://스포츠관람장
            document.getElementById("title").innerText = myloc[nowValue] + "의 스포츠관람장은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "실외 스포츠관람장은 방역패스 예외";
            break;
        case 8://공연장
            document.getElementById("title").innerText = myloc[nowValue] + "의 공연장은?";
            document.getElementById("time").innerText = time[1];
            document.getElementById("pass").innerText = pass[1];
            document.getElementById("extra").innerText = "";
            break;        
    }
}

window.onkeydown = function() {//esc키를 누르면 다중시설 거리두기 정보창 안보이도록
    if(event.keyCode == 27){
        document.getElementById("informationSpace").style.display = "none";
    }
};