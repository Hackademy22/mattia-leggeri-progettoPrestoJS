let numero1 = document.querySelector("#numero1")
let numero2 = document.querySelector("#numero2")
let numero3 = document.querySelector("#numero3")

let counter = 0;


function incrementaNumeri (element, maxNumber, time){
    
    let intervallo = setInterval( () =>{
        if(counter < maxNumber){
            counter++
            element.innerHTML = counter
        } else {
            clearInterval(intervallo)
        }
    }, time )
}


/*
quando dobbiamo far si che un elemento tipo i numeri che incrementano iniziano quando la pagina del browser è in quel punto bisogna creare una funzione con il metodo IntersectionObserver()
*/

// creiamo una variabile... P.S il metodo davanti ha bisogno del new

let osserva = new IntersectionObserver( (entries) => {
// definiamo una funzione di callback
// questa funzione riceve un paramentro che serve per individuare gli elementi visibili
// questi elementi vengono gestiti dal metodo all interno di un array
// per questo usiamo forEach()
    entries.forEach((entry) => {
        // isIntersecting è una proprietà che restituisce true quando l elemento è visibile e viceversa
        if (entry.isIntersecting){
            incrementaNumeri (numero1, 200, 19)
            incrementaNumeri (numero2, 1200, 19)
            incrementaNumeri (numero3, 400, 19)
        }
    });
} )


// richiamiamo la variabile con .observe è un metodo che ha bisogno di ricevere come parametro il nome di un elemento html da osservare
osserva.observe(numero3)


const swiper = new Swiper('.swiper', {

    

    navigation : {
        nextEl : ".swiper.button-next",
        prevEl : ".swiper.button-prev"
    }
  });