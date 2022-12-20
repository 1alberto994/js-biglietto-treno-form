const prezzoAkm=0.21;
const ageUno=18;
const ageDue=65
// km =km.isNaN(km);
// age = km.isNaN(age)
// const prezzoBiglietto=prezzoAkm*km;
// console.log("il prezzo pieno è di:",prezzoBiglietto);
// if(km==true || age==true){
//     console.log("non valido ti prego di aggiornare la pagina");
const kmInput=document.getElementById("km");
const etaInput=document.getElementById("eta");
const buttonGenera=document.getElementById("genera")
buttonGenera.addEventListener('click',
    function(){
        if(etaInput=="minorenne"){
            const prezzoBigliettoMinorenni= Math.floor(prezzoBiglietto*20/100);
            console.log( "sconto 20%:",prezzoBigliettoMinorenni);
            const prezzoScontato=prezzoBiglietto-prezzoBigliettoMinorenni;
            console.log("lo sconto è di:", prezzoScontato);
            const finalPrice = prezzoScontato.toFixed(2);
            
        }
        else if(etaInput=="over65"){
            const prezzoBigliettoOver =Math.floor(prezzoBiglietto*40/100);
            console.log( "sconto 40%:",prezzoBigliettoOver);
            const bigliettoScontatoOver=prezzoBiglietto-prezzoBigliettoOver;
            console.log("lo sconto è di:",bigliettoScontatoOver);
            const finalPriceOver=bigliettoScontatoOver.toFixed(2);
            alert("il prezzo finale è di€:",finalPriceOver);
            }    
        
        else if(etaInput=="maggiorenne") {
            
             prezzoBiglietto.toFixed(2);
             alert("il prezzo finale è di€:",prezzoBiglietto.toFixed(2));
        }
        
        
    }
)

   






