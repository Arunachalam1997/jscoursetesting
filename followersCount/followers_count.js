let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountvalue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
} 

function checkCountvalue(){
    if(count === 10){
     alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}