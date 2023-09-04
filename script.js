var timer = 60;
var score = 0 ;
var hitrn = 0;

var b = ``

function setscore(){
    
    score+=10;
    document.querySelector('#setval').textContent=score;

}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
    
    
    
}
function runtimer(){

    var timerval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer').textContent=timer;

        }
        else{
            var h = `<h1 >Your Score will we ${score}</h1>`;
            clearInterval(timerval);
            document.querySelector('#pbtm').innerHTML=h;
        }

    },1000)
}
function makebubble(){
    var clutter = '';
    for(var i = 1;i<=120;i++){
        var rn = Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${rn}</div>`
    }


    document.querySelector("#pbtm").innerHTML=clutter
    
}

function increasescore(){
    document.querySelector('#pbtm').addEventListener('click',function(dets){
        var a = Number(dets.target.textContent);
        if(a === hitrn ){
            setscore();
            makebubble();
            getnewhit();
            
        }
        
    });
    
}
runtimer();
makebubble();

getnewhit();
// setscore();
increasescore();