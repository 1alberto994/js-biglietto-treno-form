const km=parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("I chilometri percorsi sono:", km);
const age=parseInt(prompt("Quanti anni hai?"));
console.log("L'utente ha :", age);
const prezzoAkm=0.21;
const ageUno=18;
const ageDue=65
// km =km.isNaN(km);
// age = km.isNaN(age)
const prezzoBiglietto=prezzoAkm*km;
console.log("il prezzo pieno è di:",prezzoBiglietto);
if(km==true || age==true){
    console.log("non valido ti prego di aggiornare la pagina");
   
    if(age<ageUno){
        const prezzoBigliettoMinorenni= (prezzoBiglietto*20/100);
        console.log( "sconto 20%:",prezzoBigliettoMinorenni);
        const prezzoScontato=prezzoBiglietto-prezzoBigliettoMinorenni;
        console.log("lo sconto è di:", prezzoScontato);
        prezzoScontato= prezzoScontato.toFixed(2);
        alert("il prezzo finale è di€:", prezzoScontato.toFixed(2));
    }
    else if(age>ageDue){
        const prezzoBigliettoOver =(prezzoBiglietto*40)/100;
        console.log( "sconto 40%:",prezzoBigliettoOver);
        const bigliettoScontatoOver=prezzoBiglietto-prezzoBigliettoOver;
        console.log("lo sconto è di:",bigliettoScontatoOver);
        bigliettoScontatoOver= bigliettoScontatoOver.toFixed(2);
        alert("il prezzo finale è di€:",bigliettoScontatoOver);
    }    
}
else{
    
     prezzoBiglietto.toFixed(2);
     alert("il prezzo finale è di€:",prezzoBiglietto.toFixed(2));
}





