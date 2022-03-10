let convertNum = document.getElementById("convert-num").textContent = 20



let meterToFeet = (convertNum*3.2808).toFixed(3)
let feetToMeter = (convertNum*0.3048).toFixed(3)
let literToGallon = (convertNum*0.000264172).toFixed(3)
let gallonToLiter = (convertNum*3.78541).toFixed(3)
let kilosToPounds = (convertNum*2.20462).toFixed(3)
let poundsToKilos = (convertNum*0.453592).toFixed(3)

let convertLen = document.getElementById("convert-len")
let convertVol = document.getElementById("convert-vol")
let convertMass = document.getElementById("convert-mass")

function convert() {

    convertLen.textContent = convertNum + " meters = " + meterToFeet + " feet" + " | " + convertNum + " feet = " + feetToMeter + " meters"
    convertVol.textContent = convertNum + " leters = " + literToGallon + " gallons" + " | " + convertNum + " gallons = " + gallonToLiter + " liters"
    convertMass.textContent = convertNum + " kilos = " + kilosToPounds + " pounds" + " | " + convertNum + " pounds = " + poundsToKilos + " kilos"
}

convert()
