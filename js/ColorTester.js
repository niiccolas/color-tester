/*
1) Fonction remplissage du tbody
2) Ajouter les boutons dans les cellules (valeurs + classes)
3) Fonctions modifications des valeurs en RGB
*/

/* Variables Globales */
(function () {
  tablePopulator()
  classPopulator()
  
})()
/* Global variables */
let redColor = 0x00
let greenColor = 0x00
let blueColor = 0x00
let opacityRange = document.getElementById('Alpha')
let colorDisplayer = document.getElementById('hex-display')
let rgbaDisplayer = document.getElementById('rgba-display')
const cellsOfRedCol = document.querySelectorAll('.col-red')
const cellsOfGreenCol = document.querySelectorAll('.col-green')
const cellsOfBlueCol = document.querySelectorAll('.col-blue')
const allCol = [cellsOfRedCol, cellsOfGreenCol, cellsOfBlueCol]
let rInput = document.getElementById("r-input")
let gInput = document.getElementById("g-input")
let bInput = document.getElementById("b-input")
let aInput = document.getElementById("a-input")
let reset = document.getElementById("reset")

/* Init function */
// eslint-disable-next-line space-before-function-paren
//console.log(allCol)

/*Handle all colors functions */
function colorChanger() {
  allCol.forEach(col => {
    col.forEach(cell => {
      cell.addEventListener('click', function () {
        let cellClassList = cell.classList
        if (cellClassList.contains('col-red')) {
          let cellVal = cell.innerHTML
          changeRed(cellVal)
        } else if (cellClassList.contains('col-green')) {
          let cellVal = cell.innerHTML
          changeGreen(cellVal)
        } else if (cellClassList.contains('col-blue')) {
          let cellVal = cell.innerHTML
          changeBlue(cellVal)
        }
      })
    })
  })
}
/* Populates table with rows and cells  */
function tablePopulator() {
  const buttonValues = ['+10', 'FF', 'CC', '99', '66', '33', '00', '-10']
  let bodyTable = document.getElementById('body-table')

  for (let i = 0; i < buttonValues.length; i++) {
    let newRow = document.createElement('tr')
    bodyTable.appendChild(newRow)

    for (let j = 0; j <= 2; j++) {
      let newCell = document.createElement('td')
      let newButton = document.createElement('button')
      const hexValue = buttonValues[i]

      newCell.append(newButton)
      newRow.append(newCell)

      newButton.innerHTML = hexValue
      if (i > 0 && i < buttonValues.length - 1) {
        let backgroundColor
        switch (j) {
          case 0:
            backgroundColor = `#${hexValue}0000`
            break
          case 1:
            backgroundColor = `#00${hexValue}00`
            break
          case 2:
            backgroundColor = `#0000${hexValue}`
            break
          default:
            break
        }
        newButton.style.backgroundColor = backgroundColor
      }
      else
      {
        newButton.classList.add('btn-color-modifier')
      }
    }
  }
}

/* Adds color classes to the buttons */
function classPopulator() {

  let colorClasses = ['col-red', 'col-green', 'col-blue'];
  for (let i = 0; i <= colorClasses.length; i++) {
    document.querySelectorAll('#body-table tr td:nth-child(' + (i + 1) + ') button').forEach(cell => {
      cell.classList.add(colorClasses[i])
    })
  }
}
/* Applique la couleur sélectionnée au DOM */
function colorValidator() {
  /* Récupère la chaîne Hexa des couleurs sélectionnées */
  let hexaRed = redColor.toString(16).toUpperCase()
  let hexaGreen = greenColor.toString(16).toUpperCase()
  let hexaBlue = blueColor.toString(16).toUpperCase()
  let HexaAlpha = Math.round((255 - opacityRange.value)).toString(16).toUpperCase()
  /* Affiche la valeur sur 2 digits */
  if (redColor < 16) {
    hexaRed = '0' + hexaRed
  } /* End If hexaRed */
  if (greenColor < 16) {
    hexaGreen = '0' + hexaGreen
  } /* End If hexaGreen */
  if (blueColor < 16) {
    hexaBlue = '0' + hexaBlue
  } /* End If hexaBlue */
  if (HexaAlpha.length < 2) {
    HexaAlpha = '0' + HexaAlpha
  }
  /* Concatène la chaîne Hexa des trois couleurs */
  let hexaColor = '#' + hexaRed + hexaGreen + hexaBlue + HexaAlpha
  /* Transmet la chaîne Hexa au Background du DOM */
  colorDisplayer.style.backgroundColor = hexaColor
  /* Transmet la chaîne Hexa à l'élément Output du DOM */
  let Output = document.getElementById('Output')
  Output.innerHTML = 'Couleur sélectionnée : ' + hexaColor
} // end of function


function changeRed(nodeValue) {
  // Controle Incrementation - Décrémentation
  if (nodeValue === "+10") {
    nodeValue = 10
    redColor += nodeValue
  } else if (nodeValue === "-10") {
    nodeValue = 10
    redColor -= nodeValue
  } else {
    redColor = parseInt(nodeValue, 16)
  } /* End If redColor */
  if (redColor > 255) {
    redColor = 255
  } /* End Id redColor */
  if (redColor < 0) {
    redColor = 0
  } /* End If redColor */
  colorValidator()
} /* Fin Function */

function changeGreen(nodeValue) {
  // Controle Incrementation - Décrémentation
  if (nodeValue === "+10") {
    nodeValue = 10
    greenColor += nodeValue
  } else if (nodeValue === "-10") {
    nodeValue = 10
    greenColor -= nodeValue
  } else {
    greenColor = parseInt(nodeValue, 16)
  }


  if (greenColor > 255) {
    greenColor = 255
  } /* End Id redColor */
  if (greenColor < 0) {
    greenColor = 0
  } /* End If redColor */
  colorValidator()
}

function changeBlue(nodeValue) {
  // Controle Incrementation - Décrémentation
  // Controle Incrementation - Décrémentation
  if (nodeValue === "+10") {
    nodeValue = 10
    blueColor += nodeValue
  } else if (nodeValue === "-10") {
    nodeValue = 10
    blueColor -= nodeValue
  } else {
    blueColor = parseInt(nodeValue, 16)
  }

  if (blueColor > 255) {
    blueColor = 255
  } /* End Id redColor */
  if (blueColor < 0) {
    blueColor = 0
  } /* End If redColor */
  colorValidator()
}

function rgbaChanger() {

  let hexaRed = (parseInt(rInput.value)).toString(16).toUpperCase()
  let hexaGreen = (parseInt(gInput.value)).toString(16).toUpperCase()
  let hexaBlue =  (parseInt(bInput.value)).toString(16).toUpperCase()
  let HexaAlpha = Math.round((255 - aInput.value)).toString(16).toUpperCase()
  if (rInput.value < 16) {
    hexaRed = '0' + hexaRed
  } /* End If hexaRed */
  if (gInput.value < 16) {
    hexaGreen = '0' + hexaGreen
  } /* End If hexaGreen */
  if (bInput.value < 16) {
    hexaBlue = '0' + hexaBlue
  } /* End If hexaBlue */
  if (HexaAlpha.length < 2) {
    HexaAlpha = '0' + HexaAlpha
  }
  console.log(hexaRed)
  let hexaColor = '#' + hexaRed + hexaGreen + hexaBlue + HexaAlpha
  /* Transmet la chaîne Hexa au Background du DOM */
  console.log(hexaColor)
  rgbaDisplayer.style.backgroundColor = hexaColor
}
// Events //
rInput.addEventListener("input", rgbaChanger)
gInput.addEventListener("input", rgbaChanger)
bInput.addEventListener("input", rgbaChanger)
aInput.addEventListener("input", rgbaChanger)
console.log(reset)
/* Reset Function */
reset.addEventListener("click", ()=>{
  rInput.value = 0
  gInput.value = 0
  bInput.value = 0
  aInput.value = 0
  rgbaChanger()
})
opacityRange.addEventListener('input', colorValidator)
colorChanger()
colorValidator()
rgbaChanger()
