//Skriv to globale variabler. 
//Den første hedder xAnswer og finder DOM elementet med id'et "xAnswer".
//Den anden hedder inputX og finder DOM elementet med id'et "x".

let xAnswer = document.getElementById('xAnswer');
let inputX = document.getElementById('x');




//Skriv to globale variabler. 
//Den første hedder yAnswer og finder DOM elementet med id'et "yAnswer".
//Den anden hedder inputY og finder DOM elementet med id'et "y".
let yAnswer = document.getElementById('yAnswer');
let inputY = document.getElementById('y');

//Skriv den globale variabel som hedder img og finder DOM elementet img.

let img = document.getElementById('img');


//Lav to globale variabler der hedder xvalue og yvalue, som gemmer x- og y-aksens værdier. De skal sættes til 0.
let xvalue = 0;
let yvalue = 0;



//Lav en eventListener for inputX, som "lytter" efter input. 
//Sæt xvalue til at være lig med inputX value (dette kan du gøre med event.target.value).
//BONUS: Hvis du vil kunne se hvor mange grader billedet bliver "skubbet" skal du sætte innerText i xAnswer til at være lig med xvalue.
//Sæt img's style til at lig med transform: skew. værdierne i skew sættes til xvalue og yvalue. HINT: brug en literal string : `transform: skew(${ }deg, ${ }deg);`.

inputX.addEventListener('input',(e) =>{
    xvalue = e.target.value;
        //console.log(xvalue);

        img.style = `transform: skew(${ xvalue}deg, ${ yvalue}deg);`;
        xAnswer.innerHTML = xvalue;
});
    
//Gentag samme eventListener bare for inputY
inputY.addEventListener('input',(e) =>{
    yvalue = e.target.value;
    //console.log(yvalue);
    img.style = `transform: skew(${ xvalue}deg, ${ yvalue}deg);`;
    yAnswer.innerHTML = yvalue;

})



