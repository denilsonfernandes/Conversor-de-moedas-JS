const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value") 

    

    console.log(currencySelect1.value)
    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.27




    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday )
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)
    

    if(currencySelect1.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*dolarToday)
    }

    if(currencySelect1.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*euroToday )
    }

    if(currencySelect1.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*libraToday)
    }


    currencySelect1.value.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    /*console.log(convertedValue)*/
}

function changeCurrencyConvert (){
const currencyName1 = document.getElementById("currency-name1")
const currencyImage1 = document.querySelector(".currency-img1")

if(currencySelect1.value == "dolar") {
    currencyName1.innerHTML = "Dólar Americano"
    currencyImage1.src = "./assets/dolar.png"
}

if(currencySelect1.value == "euro") {
    currencyName1.innerHTML = "Euro"
    currencyImage1.src = "./assets/euro.png"
}

if(currencySelect1.value == "libra") {
    currencyName1.innerHTML = "Libra"
    currencyImage1.src = "./assets/libra 1.png"
}

if(currencySelect1.value == "real") {
    currencyName1.innerHTML = "Real Brasileiro"
    currencyImage1.src = "./assets/real.png"
}

convertValues()

}

function changeCurrency (){
const currencyName = document.getElementById("currency-name")
const currancyImage = document.querySelector(".currency-img")

if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currancyImage.src = "./assets/dolar.png"
}

if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currancyImage.src = "./assets/euro.png"
}

if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currancyImage.src = "./assets/libra 1.png"
}

if(currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro"
    currancyImage.src = "./assets/real.png"
}

convertValues()
 
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues )
currencySelect1.addEventListener("change", changeCurrencyConvert )