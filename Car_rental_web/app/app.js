const mainPg = document.querySelector(".mainPg"); // 메인 페이지
const useChoicePg = document.querySelector(".useChoicePg"); // 사용목적 페이지
const roadMap = document.querySelector(".roadMap"); // 지도맵
const detailInfo = document.querySelector(".detailInfo"); // 상세 설문지
const carInfoArea = document.querySelector(".car_InfoArea");


function Do_Reservation() {
    mainPg.style.display = "none";
    useChoicePg.style.display = "block";
}

function followRoadMap() {
    mainPg.style.display = "none";
    roadMap.style.display = "block";
}

function tripClick() {
    useChoicePg.style.display = "none";
    detailInfo.style.display = "block";
}

function dailyClick() {
    useChoicePg.style.display = "none";
    detailInfo.style.display = "block";
}

function commendClick() {
    detailInfo.style.display = "none"
    carInfoArea.style.display = "block"
}

function resultClick() {
    alert("예약이 완료 되었습니다 !");
    window.location.reload();
}

let selectData = {
    using: null,
    size: null,
    person: null
}

function onClickItemUsing(element, key) {
    if (selectData[key] === element.id) {
        element.style.backgroundColor = '#fff';
    } else {
        selectData = {
            ...selectData,
            [key]: element.id
        }

        for (let index = 0; index < document.querySelectorAll("#using")[0].children.length; index++) {
            const tags = document.querySelectorAll("#using")[0].children[index];

            tags.style.backgroundColor = "#fff"

        }

        element.style.backgroundColor = 'rgba(63, 142, 252, 0.85)'

    }
}

function onClickItemSizing(element, key) {
    if (selectData[key] === element.id) {
        element.style.backgroundColor = '#fff';
    } else {
        selectData = {
            ...selectData,
            [key]: element.id
        }

        for (let index = 0; index < document.querySelectorAll("#sizing")[0].children.length; index++) {
            const tags = document.querySelectorAll("#sizing")[0].children[index];

            tags.style.backgroundColor = "#fff"

        }

        element.style.backgroundColor = 'rgba(63, 142, 252, 0.85)'

    }
}

function onClickItemGrouping(element, key) {
    if (selectData[key] === element.id) { 
        element.style.backgroundColor = '#fff';
    } else {
        selectData = {
            ...selectData,
            [key]: element.id
        }

        for (let index = 0; index < document.querySelectorAll("#grouping")[0].children.length; index++) {
            const tags = document.querySelectorAll("#grouping")[0].children[index];

            tags.style.backgroundColor = "#fff"

        }

        element.style.backgroundColor = 'rgba(63, 142, 252, 0.85)'

    }
}