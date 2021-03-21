const bgbody = document.querySelector("body");

const IMG_NUM = 3;

function getNum(){
    const ran = Math.ceil(Math.random() * IMG_NUM);
    return ran;
}

function paintImg(imgNum){
    const bgimg = new Image();
    bgimg.src = `img/${imgNum}.PNG`;document.createElement
    bgimg.classList.add("bgs");
    bgbody.appendChild(bgimg);
}

function init(){
    const imgNum = getNum();
    paintImg(imgNum);
}

init();