var counter = 0;
var plus_buttonEL = document.getElementById("plus_button");
var minus_buttonEL = document.getElementById("minus_button");
var rest_buttonEL= document.getElementById("reset_button");
var display = document.getElementById("result_display")

plus_buttonEL.addEventListener('click', function(){   
    counter += 1;
    if( counter >= 100){
        alert("wrong value!")
        counter -=1;
    }
    display.innerHTML = counter;
})

minus_buttonEL.addEventListener('click', function(){  
    counter -= 1;
    if( counter < 0){
        alert("wrong value!")
        counter+=1;
    }
    display.innerHTML = counter;
})

rest_buttonEL.addEventListener('click', function(){
    counter = 0;
    display.innerHTML = counter;
})
