const kmInput=document.getElementById("km");
const etaInput=document.getElementById("eta");
const buttonGenera=document.getElementById("genera");
const nameInput=document.getElementById("name-input");
buttonGenera.addEventListener('click',
    function(){
            const namVal=nameInput.value;
            const knVal = kmInput.value;
            const etaVal = etaInput.value;
            const prezzoAkm = 0.21;
            const prezzoBiglietto= prezzoAkm * knVal
            console.log('km input: '+ knVal);
            console.log('il prezzo è: '+prezzoBiglietto);
            document.getElementById("second-title").innerHTML="il prezzo del biglietto";
            if(etaVal=="minorenne"){
                console.log(prezzoBiglietto)
                const prezzoBigliettoMinorenni= prezzoBiglietto/100*20;
                console.log( "sconto 20%:",prezzoBigliettoMinorenni);
                const prezzoScontato=prezzoBiglietto-prezzoBigliettoMinorenni;
                console.log("lo sconto è di:", prezzoScontato);
                prezzoScontato.toFixed(2);
                document.getElementById("nome-utente").innerHTML= "il nome del passeggero è :"+ namVal
                document.getElementById('eta-utente').innerHTML = "l'età del passeggero è: "+etaVal;
                document.getElementById("prezzo-utente").innerHTML="il prezzo è di:"+ prezzoScontato
                
            }
            else if(etaVal=="over65"){
                
                console.log(prezzoBiglietto)
                const prezzoBigliettoOver =(prezzoBiglietto/100*40);
                console.log( "sconto 40%:",prezzoBigliettoOver);
                const bigliettoScontatoOver=prezzoBiglietto-prezzoBigliettoOver;
                console.log("lo sconto è di:",bigliettoScontatoOver);
                bigliettoScontatoOver.toFixed(2);
                document.getElementById("nome-utente").innerHTML= "il nome del passeggero è :"+ namVal
                document.getElementById('eta-utente').innerHTML = "l'età del passeggero è: "+etaVal;
                document.getElementById("prezzo-utente").innerHTML="il prezzo è di:"+ bigliettoScontatoOver
            }    
            
            else if(etaVal=="maggiorenne") {
                document.getElementById("nome-utente").innerHTML= "il nome del passeggero è :"+ namVal
                document.getElementById('eta-utente').innerHTML = "l'età del passeggero è: "+etaVal;
                document.getElementById("prezzo-utente").innerHTML="il prezzo è di:"+ prezzoBiglietto
                prezzoBiglietto.toFixed(2);
            }
           
    }
)