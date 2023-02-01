console.log('ciao');

const prezzoAlKm = 0.21;

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)

const btnElement = document.getElementById('btn');

btnElement.addEventListener('click', function () {
    console.log(btnElement.value);
    let scontoDaApplicare = document.getElementById('sconti').value; 
    console.log('scontoDaApplicare', scontoDaApplicare);
    let sconti = 0;
    const kmElement = document.querySelector('#form input[type="text"]').value;
    console.log('kmElement', kmElement);
    const prezzoBigliettoBase = prezzoAlKm * parseFloat(kmElement);
    console.log('prezzoBigliettoBase', prezzoBigliettoBase);
    //Applicare sconto del 20% per i minorenni
    let scontoMinorenni = prezzoBigliettoBase * 0.2;
    console.log('scontoMinorenni', scontoMinorenni);
    //Applicare sconto del 40% per gli over 65
    let scontoOver65 = prezzoBigliettoBase * 0.4;
    console.log('scontoOver65', scontoOver65);
    console.log(kmElement);
    
    switch (scontoDaApplicare) {
        case '1':
            sconti = scontoMinorenni
            break
        case '2':
            sconti = scontoOver65
            break
        }

    let prezzoFinale = prezzoBigliettoBase - sconti;
    document.getElementById('costo-biglietto').innerHTML += prezzoFinale.toFixed(2);
})
