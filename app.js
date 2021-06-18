// setInterval(function(){
//     console.log("running..")
// },1000)

// setTimeout(function(){
//     console.log("running..")
// },3000)




// var count = 0;
// var inter;
// function timer(){
//     count++
//     console.log(count)
// }
// inter = setInterval(timer, 1000)

// setTimeout(function(){
//    clearInterval(inter)
// },6000)



// STOP WATCH

// var min = 0;
// var sec = 0;
// var mili = 0;
// var minheadiny = document.getElementById("min")
// var secheadiny = document.getElementById("sec")
// var miliheadiny = document.getElementById("mili")

// var inter ;
// function timer(){
//     mili++
//     miliheadiny.innerHTML= mili
//     if(mili >= 100){
//        sec++
//        secheadiny.innerHTML=sec
//        mili = 0
//     }else if(sec >= 60){
//         min++
//         minheadiny.innerHTML= min
//         sec=0
//     }
// }
// function start(){
// inter = setInterval(timer,10)
// }
// function stop(){
//     clearInterval(inter)
// }
// function reset(){
//     min =0
//     sec = 0
//     mili = 0
//     minheadiny.innerHTML=min
//     secheadiny.innerHTML=sec
//     miliheadiny.innerHTML=mili
//     stop()
// }

                    //  xxx---xxx---xxx




// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1]) 

// var a = document.getElementById("pappa")
// console.log(a.childNodes[1])

// var a = document.getElementById("pappa")
// console.log(a.nextSibling)

// var a = document.getElementById("pappa")
// console.log(a.lastChild)

// var a = document.getElementById("firstson")
// console.log(a.parentNode)

// var a = document.getElementById("firstson")
// console.log(a.nodeType)

// var a = document.getElementById("firstson")
// console.log(a.childNodes[0].nodeType)

// var a = document.getElementById("firstson")
// console.log(a.nodeName)

// var a = document.getElementById("pappa")
// console.log(a.childNodes[0].nodeValue)

// var a = document.getElementById("pappa")
// console.log(a.childNodes)