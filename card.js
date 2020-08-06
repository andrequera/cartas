window.onload = () => {
    aleatoria();
    aleatoria1();

}

function aleatoria (){
    var med= Math.floor(Math.random() *(13)+1);
    
    let num = document.querySelector(".num");
    if (med ==1){
        num.innerHTML="A";
    }
    else if (med ==11){
        num.innerHTML="J";
    }
    else if (med ==12){
        num.innerHTML="Q";
    }
    else if (med ==13){
        num.innerHTML="K";
    }
    else if(num !==null){       
        num.innerHTML=med;
    
    } 
    return aleatoria1;
}

function aleatoria1 (){
    var sup= Math.floor(Math.random() *(4)+1);
    var inf = sup;
    
    let dib = document.querySelector(".dib");
    let dibabajo = document.querySelector(".dibabajo");
    if (sup ==1){
        dib.innerHTML= "\u2665";
        dibabajo.innerHTML= "\u2665";
    }
    else if (sup ==2){
        dib.innerHTML="\u2660";
        dibabajo.innerHTML="\u2660";
    }
    else if (sup ==3){
        dib.innerHTML="\u2663";
        dibabajo.innerHTML="\u2663";
    }
    else if (sup ==4){
        dib.innerHTML="\u2666";
        dibabajo.innerHTML="\u2666";
    } 
    return aleatoria2;
}
