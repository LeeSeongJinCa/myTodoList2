/*
! 기능 개요
* 1. 리스트 추가
* 2. 리스트에 완료기능, 삭제기능, 수정기능 추가
* 3. 남은 리스트 개수, 전체 리스트 삭제기능 추가
*/

/*
*1번 기능 시작*/
let obj = [];
let checkObj = [];
let main = document.getElementById('main');
let input = document.getElementById('input');
let cnt = Object.keys(obj).length;
let circleCnt = 0;

const createList = function () {
    if (obj[cnt]["status"] == false) {
        return;
    }
    makeList();
    listOption();
}
const makeList = function () {
    let main = document.getElementById('main');
    let list = `<ul class="list" id="${cnt}">
        <li class="circle">
            <div class="in_circle"></div>
        </li>
        <li class="list_title" id="${cnt}">
            <input readOnly type="text" class="list_title_inner" value="${obj[cnt]["text"]}">
        </li>
        <li class="trash" id="${cnt}">
            <img src="img/delete.svg" class="trash_img">
        </li>
    </ul>`
    main.insertAdjacentHTML("beforeend", list);
}
const userInput = function () {
    var value = document.getElementById('input').value;
    if (value.trim() == "") {
        alert('Please input enything');
    } else {
        addTodoInObj(value);
        createList();
        cnt++;
        itemLeftCheck();
    }
    document.getElementById('input').value = "";
    document.getElementById('input').focus();
}
const addTodoInObj = (v) => {
    obj[cnt] = { "text": v };
}
input.onkeyup = () => {
    //* 키 코드 받아오는 방법 -> https://cofs.tistory.com/12
    if (window.event.keyCode == 13) {
        userInput();
    }
}
/*
*1번 기능 끝*/

/*
*2번 기능 시작*/
function listOption() {
    let circle = document.querySelectorAll('.circle');
    let trash = document.querySelectorAll('.trash');
    let listTitle = document.querySelectorAll('.list_title');
    for (var i = 0; i < obj.length; i++) {
        circle[i].addEventListener('click', circleToggle);
        circle[i].addEventListener('click', itemDoneCheck);
        trash[i].addEventListener('click', removeList);
        listTitle[i].addEventListener('dblclick', focusIn);
        listTitle[i].addEventListener('focusout', focusOut);
    }
}
function circleToggle() {
    this.classList.toggle('circle_bg');
}
function removeList() {
    let p = this.parentElement;
    let pp = p.parentElement;
    pp.removeChild(p);
    statusObj(this);
    itemLeftCheck();
}
function statusObj(el) {
    let id = el.getAttribute('id');
    obj.splice(id, 1);
    cnt--;
    updateId();
}
function updateId() {
    let list_title_inner = document.querySelectorAll('.list_title_inner');
    let list_title = document.querySelectorAll('.list_title');
    let trash = document.querySelectorAll('.trash');
    for (var i = obj.length - 1, j = 0; i >= 0; i-- , j++) {
        list_title_inner[j].parentElement.setAttribute('id', j);
        list_title[j].parentElement.setAttribute('id', j);
        trash[j].setAttribute('id', j);
    }
}
function focusIn() {
    let list_title_inner = document.querySelectorAll('.list_title_inner');
    let id = this.getAttribute('id');
    list_title_inner[id].parentElement.classList.add("editing");
    list_title_inner[id].removeAttribute("readOnly");
    list_title_inner[id].addEventListener('keyup', () => {
        if (window.event.keyCode == 13) {
            list_title_inner[id].parentElement.classList.remove("editing");
            list_title_inner[id].readOnly = "true";
        }
    })
}
function focusOut() {
    let list_title_inner = document.querySelectorAll('.list_title_inner');
    let id = this.getAttribute('id');
    list_title_inner[id].parentElement.classList.remove("editing");
    list_title_inner[id].readOnly = "true";
}
function changeListCheck() {
    let list_title_inner = document.querySelectorAll('.list_title_inner');
    for (var i = 0; i < list_title_inner.length; i++) {
        checkObj[i] = list_title_inner[i].value;
        obj[i]["text"] = checkObj[i];
    }
}
/*
*2번 기능 끝*/

/*
*3번 기능 시작*/
function itemLeftCheck() {
    let itemLeft = document.getElementById('item_left_number');
    itemLeft.innerHTML = cnt;
}
function itemDoneCheck() {
    let itemDone = document.getElementById('item_done_number');
    let circleBgLength = document.getElementsByClassName('circle_bg').length;
    itemDone.innerHTML = circleBgLength;
}
document.getElementById('clear_list').onclick = () => {
    if (confirm('Are you sure?')) {
        main.innerHTML = "";
        cnt = 0;
        obj = [];
        itemLeftCheck();
        itemDoneCheck();
    } else {
        return;
    }
}
/*
*3번 기능 끝*/