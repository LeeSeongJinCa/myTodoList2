/*
! 기능 개요
* 1. 리스트 추가
* 2. 리스트에 완료기능, 삭제기능, 수정기능 추가
* 3. Axios로 서버 통신기능 추가
*/

/*
*1번 기능 시작*/
let obj = [];
let main = document.getElementById('main');
let input = document.getElementById('input');
let cnt = Object.keys(obj).length;

const createList = function () {
    if (obj[cnt]["status"] == false) {
        return;
    }
    makeList();
    listOption();
    runRendering();
    // storeList();
}
const rendering = function() {
    var list_text = document.getElementsByClassName('list_title');
    for (var i = 0; i < obj.length; i++) {
        if (obj[i]["status"] == false) {
            continue;
        } else {
            list_text[i].innerHTML = obj[i].text;
        }
    }
}
const runRendering = function() {
    try {
        rendering();
    } catch (error) {
        console.log(error);
    }
}


const makeList = function() {
    let list = document.createElement('ul');
    list.setAttribute('class', 'list');
    let circle = document.createElement('li');
    circle.setAttribute('class', 'circle');
    let in_circle = document.createElement('div');
    in_circle.setAttribute('class', 'in_circle');
    circle.appendChild(in_circle);
    let list_title = document.createElement('li');
    list_title.setAttribute('class', 'list_title');
    list_title.innerHTML = obj[cnt]["text"];
    let edit = document.createElement('li');
    edit.setAttribute('class', 'edit');
    edit.setAttribute('id', `${cnt}`);
    let edit_img = document.createElement('img');
    edit_img.setAttribute('src', 'img/edit.svg');
    edit_img.setAttribute('class', 'edit_img');
    edit.appendChild(edit_img);
    let trash = document.createElement('li');
    trash.setAttribute('class', 'trash');
    trash.setAttribute('id', `${cnt}`);
    let trash_img = document.createElement('img');
    trash_img.setAttribute('src', 'img/delete.svg');
    trash_img.setAttribute('class', 'trash_img');
    trash.appendChild(trash_img);
    list.appendChild(circle);
    list.appendChild(list_title);
    list.appendChild(edit);
    list.appendChild(trash);
    main.appendChild(list);
}
const userInput = function () {
    var value = document.getElementById('input').value;
    if (value.trim() == "") {
        alert('Please input enything');
    } else {
        obj[cnt] = { "text": value, "status": true };
        createList();
        cnt++;
    }
    document.getElementById('input').value = "";
    document.getElementById('input').focus();
}

let add = document.getElementById('add');
add.addEventListener('click', userInput);
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
    var a = document.querySelectorAll('.list');
    var b = document.querySelectorAll('.trash');
    var c = document.querySelectorAll('.edit');
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener('click', circle_toggle);
        b[i].addEventListener('click', removeList);
        c[i].addEventListener('click', edit);
    }
}
function circle_toggle() {
    this.classList.toggle('circle_bg');
}
function removeList() {
    var p = this.parentElement;
    var pp = p.parentElement;
    pp.removeChild(p);
    statusObj(this);
}
function statusObj(el) {
    var id = el.getAttribute('id');
    obj[id].status = false;
}
// * 수정기능 => 사용자에게 수정한 키를 받아옴 
// * -> obj의 "text"값을 변경 -> rendering() 실행
function edit() {
    console.log('edit 실행');
    var id = this.getAttribute('id');
    var p = this.parentElement;
}


/*
*2번 기능 끝*/

/*
*3번 기능 시작*/
// let server = 'http://api.teamrequin.kro.kr';

// function storeList() {
//     axios.post(server, obj).then((data) => {
//         alert('로그인 되었습니다');
//         obj = data;

//     }).catch(() => {
//         console.log('계정이 일치하지 않습니다.');
//     });
// }







