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

incrementaNumeri (numero1, 200, 19)
incrementaNumeri (numero2, 1200, 19)
incrementaNumeri (numero3, 400, 19)