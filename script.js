var min = 45;
var sec = 0;

function timer(){
    
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=min+":"+sec;
        sec--;
        if (sec < 0) {
            min--
            sec = 59
        } else if (min < 0 && sec < 0){
          clearInterval(timer)
        }
    }, 1000);
}

function minus() {
  min--
}