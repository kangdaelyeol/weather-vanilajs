const tdform = document.querySelector(".js-todoform"),
 tdinput = tdform.querySelector(".js-todoinput"),
 tdlist = document.querySelector(".js-todolist");

const TODO_LS = "todo";
let tdids = 0;
let tds = [];

function saveArrayToLS(){
    const localtds = JSON.stringify(tds);
    localStorage.setItem(TODO_LS, localtds);
}

function delitem(e){
    const bt = e.target;
    const btList = bt.parentNode;
    btList.parentNode.removeChild(btList);
    const newtds = tds.filter(function(item){
        return item.id !== parseInt(btList.id);
    })
    console.log(newtds);
    tds = newtds;
    saveArrayToLS();
}

function createList(text){
    const doli = document.createElement("li");
    const dospan = document.createElement("span");
    const delbtn = document.createElement("button");
    const tdid = tdids; tdids+=1;
    delbtn.addEventListener("click", delitem);
    dospan.innerText = text;
    delbtn.innerText = "Delete";
    doli.id = tdid;
    doli.appendChild(dospan);
    doli.appendChild(delbtn);
    tdlist.appendChild(doli);
    const tdObj = {
        text: text,
        id : tdid
    }
    tds.push(tdObj);
    saveArrayToLS();
}

function handleList(e){
    e.preventDefault();
    const doValue = tdinput.value;
    if(doValue !== ""){
        createList(doValue);
        tdinput.value = "";
    }

}

function loadLS(){
    const Lsdata = localStorage.getItem(TODO_LS);
    if(Lsdata){
        const tdData = JSON.parse(Lsdata);
        console.log(tdData);
        tdData.forEach(function(item){
            createList(item.text);
        })
    }
}

function init(){
    loadLS();
    tdform.addEventListener("submit", handleList);
}

init();