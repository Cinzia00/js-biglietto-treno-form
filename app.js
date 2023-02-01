console.log('ciao')

const prezzoAlKm = 0.21

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const kmElement = document.querySelector('#form input[type="text"]')
const prezzoBigliettoBase = prezzoAlKm * kmElement
let scontoDaApplicare = document.querySelector('#form select[name="sconti"]')
const btnElement = document.querySelector('input[type="button"]')
console.log(kmElement, scontoDaApplicare)

//Applicare sconto del 20% per i minorenni
let scontoMinorenni = prezzoBigliettoBase * 0.2
//Applicare sconto del 40% per gli over 65
let scontoOver65 = prezzoBigliettoBase * 0.4

btnElement.addEventListener('click', function () {
    console.log('applica modifiche al box')
    let sconti = scontoDaApplicare.value

	switch (sconti) {
		case '1':
			scontoDaApplicare = scontoMinorenni
			break
		case '2':
			scontoDaApplicare = scontoOver65
			break
		case '3':
			scontoDaApplicare = 'nessuno conto'
			break
            document.getElementById('costo-biglietto').innerHTML += scontoDaApplicare
	}
})


