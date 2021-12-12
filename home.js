
var social_distancing = "단계적 일상회복 1단계 + (12월 6일부터 4주간 추가 방역조치)";
var time = ["24시까지(24시~05시까지 영업제한)","제한없음"];
var people = ["6명","8명"];
var pass = ["접종완료자만", "접종완료자 + PCR음성확인자"];
var whereis = ["식당","카페","헬스장","유흥시설","PC방","영화관","노래연습장","스포츠관람장","공연장"];
var myloc = ["서울","경기","인천","강원","충북","세종","충남","경북","대전","대구","전북","울산","경남","전남","광주","부산","제주"];

var url = document.location.href;//현재 url값 문자열로 저장
var nowValue = parseInt(url.substr(url.length - 2,2));//url 문자열에서 마지막 두 문자를 떼와서 int로 형변환
var initinfo = false;//함수호출 여부 판별

function info_show(){//거리두기 정보 제공 박스 보이기
    document.getElementById("informationSpace").style.display = "block";
}
function info_hide(){//거리두기 정보 제공 박스 가리기 
    document.getElementById("informationSpace").style.display = "none";
}

function searchWhere(){//검색한 시설이 존재하면 거리두기 정보 제공 박스 보이기
    var myname = document.getElementById("search_text").value;
    var check = whereis.indexOf(myname);//시설이 배열에 존재하지 않으면 -1 반환

    if(check != -1){//-1이 아닐때 거리두기 정보 제공 박스 보이기
        load_info(check);
        info_show();
    }
    else{//-1이면 없는 정보라는 경고 다이얼로그 출력
        alert("정보를 제공하지 않는 시설입니다.");
    }
}

function load_info(num){//거리두기 정보 가져와서 보여주는 함수
    
    if(initinfo == false){//함수호출 처음이면 거리두기 단계 가져오기
        initinfo = true;
        document.getElementById("current_SD").innerText = social_distancing;
    }

    if(nowValue < 3){//수도권이면 사적모임 허용 people[0]까지 제한
        document.getElementById("people").innerText = people[0];
    }
    else{//비수도권이면 사적모임 허용 people[1]까지 제한
        document.getElementById("people").innerText = people[1];
    }

    switch(num){//이벤트로 같이 넘어온 파라미터로 어느 시설 정보 가져올지 switch문으로 판별
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