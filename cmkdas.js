
var sayi = Math.floor(Math.random()*10)
alert(sayi)
while (true) {

    var tahmin = window.prompt("1 ile 10 arasında sayı tahmin et");
    if(tahmin>sayi){
        alert("biraz düşür")
      
    }
    else if(tahmin == sayi){
        alert("tebrikler sayıyı buldunuz")

     break;
    }  
    else{
            alert("biraz yükselt")   
         
    }
  
}



