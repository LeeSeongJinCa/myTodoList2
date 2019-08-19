/*
! 기능 개요
* 1. 리스트 추가
* 2. 리스트에 완료기능, 삭제기능 추가
* 3. Axios로 서버 통신기능 추가
*/

/*
*1번 기능 시작*/
let obj = {
    list: {}
};
let main = document.getElementById('main');
let input = document.getElementById('input');
let cnt = Object.keys(obj).length;

const createList = function (text) {
    obj.list[`text${cnt}`] = text;
    checkOut(text);

    let list = document.createElement('ul');
    list.setAttribute('class', 'list');
    let circle = document.createElement('li');
    circle.setAttribute('class', 'circle');
    let in_circle = document.createElement('div');
    in_circle.setAttribute('class', 'in_circle');
    circle.appendChild(in_circle);
    let list_title = document.createElement('li');
    list_title.setAttribute('class', 'list_title');
    list_title.innerHTML = obj.list[`text${cnt}`];
    cnt++;
    let trash = document.createElement('li');
    trash.setAttribute('class', 'trash');
    let trash_img = document.createElement('img');
    trash_img.setAttribute('src', 'img/delete.svg');
    trash_img.setAttribute('class', 'trash_img');
    trash.appendChild(trash_img);
    list.appendChild(circle);
    list.appendChild(list_title);
    list.appendChild(trash);
    main.appendChild(list);

    listOption();
    // storeList();
}

const userInput = function () {
    var value = document.getElementById('input').value;
    if (value.trim() == "") {
        alert('Please input enything');
    } else {
        createList(value);
    }
    document.getElementById('input').value = "";
    document.getElementById('input').focus();
}

const checkOut = function (check) {
    for (var i = 0; i < Object.keys(obj).length - 1; i++) {
        console.log('1');
    }
    // for (var i in obj.list) {
    //     console.log('1');
    //     if(check == obj.list[i]) {
    //         console.log('1');
    //     }
    //     console.log(obj.list[i]);
    //     if (obj.list[i] === obj.list.values) {
    //         obj.list.splice();
    //         animals.splice(animals.indexOf("walrus"), 1);
    //     }
    // }
    console.log('end');
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
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener('click', circle_toggle);
        b[i].addEventListener('click', removeList);
    }
}
function circle_toggle() {
    this.classList.toggle('circle_bg');
}
function removeList() {
    var p = this.parentElement;
    var pp = p.parentElement;
    pp.removeChild(p);
}
function remove() {

}


/*
*2번 기능 끝*/

/*
*3번 기능 시작*/
// let server = 'http://api.teamrequin.kro.kr';

// function storeList() {
//     axios.post(server, obj.list).then(() => {
//         alert('로그인 되었습니다');
//     }).catch(() => {
//          console.log('계정이 일치하지 않습니다.');
//     });
// }







