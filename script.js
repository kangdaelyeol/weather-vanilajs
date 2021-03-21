// const v = document.getElementsByClassName("turtle");
// v[0].style.fontSize='50px';
// v[1].style.color="#abc3d3";
// const a = document.querySelector(".turtle");
// a.style.color="#afdfc2";

// function asd(){
//     a.style.color="teal";
// }

//     a.addEventListener("click", function(){
//         if(a.style.position == "fixed"){
//             a.style.position = "absolute";
//         }else{
//             a.style.position = "fixed";
//         }
//         console.log("position = "+a.style.position);
//         console.log("offsetParent = "+a.offsetParent);
//         console.log("offsetLeft = "+a.offsetLeft);
//         console.log("offsetTop = "+a.offsetTop);
//     })

//     // offsetParent
//     // offsetLeft / Top
//     // parentElement
//     // parentNode
//     const bt = document.getElementById("btn");
//     const bt2 = document.querySelector("#btn2");

//         bt.addEventListener("click", function(e){
//                 console.log(e);
//                 if(bt.className == ""){
//                     bt.className = "hello";
//                 } else {
//                     bt.className = "";
//                 }
//             });
    
//         bt2.addEventListener("click", function(){
//             console.log(bt2.classList);


//             if(!bt2.classList.contains("ex4")){
//                 bt2.classList.add("ex4");
//             } else {
//                 bt2.classList.remove("ex4");
//             }

//             bt2.classList.toggle("ex4");
//         })
            

//     const ms = document.getElementsByClassName("event");

//     ms[0].addEventListener("click", function(e){
//         console.log("pageX:"+e.pageX+" pageY:"+e.pageY);
//         console.log("offsetX:"+e.offsetX+" offsetY:"+e.offsetY);
//         console.log(a);
//     });

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// let man1 = new Person("dae" , 13);
// console.log(man1.name);

// let man2 = new Person.prototype.constructor("daniel", 20);
// console.log(man2);

// function Person2(){
//     let arg = Array.prototype.slice.apply(arguments);
//     for (let i in arg){
//         console.log(i, arg[i]);
//     }     
// }

// Person2('i', 'like', 'you', 1, 2, 3);


const clockContaier = document.querySelector(".js-clock"),
 clockTime = clockContaier.querySelector(".js-timer");

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    clockTime.innerText = `${hour<10 ? `0${hour}` : hour
    }:${min<10 ? `0${min}` : min 
    }:${sec<10 ? `0${sec}` : sec }`
}
 function init(){
    setInterval(getTime, 1000);
 }

 init();