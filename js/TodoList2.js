/*
! 기능 개요
* 1. 리스트 추가
* 2. 리스트에 완료기능, 삭제기능, 수정기능 추가
*/

/*
*1번 기능 시작*/
let obj = [];
let main = document.getElementById('main');
let input = document.getElementById('input');
let cnt = Object.keys(obj).length;

const createList = () => {
    if (obj[cnt]["status"] == false) {
        return;
    }
    makeList();
    listOption();
}
const rendering = () => {
    var list_text = document.getElementsByClassName('list_title_inner');
    list_text[i].innerHTML = obj[i].text;
}
const makeList = () => {
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
const userInput = () => {
    var value = document.getElementById('input').value;
    if (value.trim() == "") {
        alert('Please input enything');
    } else {
        addTodoInObj(value);
        createList();
        cnt++;
    }
    document.getElementById('input').value = "";
    document.getElementById('input').focus();
}
const addTodoInObj = (v) => {
    obj[cnt] = { "text": v };
}
input.addEventListener('click', inputOnKeyUp);
const inputOnKeyUp = (el) => {
    el.onkeyup = () => {
        if (window.event.keyCode == 13) {
            userInput();
        }
    }
}

/*
*1번 기능 끝*/

/*
*2번 기능 시작*/
const listOption = () => {
    let circle = document.querySelectorAll('.circle');
    let trash = document.querySelectorAll('.trash');
    let listTitle = document.querySelectorAll('.list_title');
    for (var i = 0; i < obj.length; i++) {
        circle[i].addEventListener('click', circleToggle);
        trash[i].addEventListener('click', removeList);
        listTitle[i].addEventListener('dblclick', focusIn);
        listTitle[i].addEventListener('focusout', focusOut);
    }
}
const circleToggle = () => {
    this.classList.toggle('circle_bg');
}
const removeList = () => {
    var p = this.parentElement;
    var pp = p.parentElement;
    pp.removeChild(p);
    statusObj(this);
}
const statusObj = (el) => {
    var id = el.getAttribute('id');
    obj.splice(id, 1);
}
const focusIn = () => {
    var list_title_inner = document.querySelectorAll('.list_title_inner');
    var id = this.getAttribute('id');
    list_title_inner[id].parentElement.classList.add("editing");
    list_title_inner[id].removeAttribute("readOnly");

    editOnKeyUp(list_title_inner, id);
}
const editOnKeyUp = (el, tag, id) => {
    el.onkeyup = () => {
        if (window.event.keyCode == 13) {
            tag[id].parentElement.classList.remove("editing");
            tag[id].readOnly = "true";
        }
    }
}
const focusOut = () => {
    var list_title_inner = document.querySelectorAll('.list_title_inner');
    var id = this.getAttribute('id');
    list_title_inner[id].parentElement.classList.remove("editing");
    list_title_inner[id].readOnly = "true";
}
/*
*2번 기능 끝*/