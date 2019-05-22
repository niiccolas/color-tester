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

let redColor = 0x00
let greenColor = 0x00
let blueColor = 0x00
let opacityRange = document.getElementById('Alpha')
let colorDisplayer = document.getElementById('color-displayer')
const cellsOfRedCol = document.querySelectorAll('.col-red')
const cellsOfGreenCol = document.querySelectorAll('.col-green')
const cellsOfBlueCol = document.querySelectorAll('.col-blue')
const allCol = [cellsOfRedCol, cellsOfGreenCol, cellsOfBlueCol]
/* Init function */
// eslint-disable-next-line space-before-function-paren
//console.log(allCol)

/*Handle all colors functions */
function colorChanger() {
  allCol.forEach(col => {
    col.forEach(cell => {
      cell.addEventListener('click', function () {
        let cellClass = cell.getAttribute('class')
        if (cellClass === 'col-red') {
          let cellVal = cell.innerHTML
          changeRed(cellVal)
        } else if (cellClass === 'col-green') {
          let cellVal = cell.innerHTML
          changeGreen(cellVal)
        } else if (cellClass === 'col-blue') {
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
      newCell.append(newButton)
      newRow.append(newCell)
      newButton.innerHTML = buttonValues[i]
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

opacityRange.addEventListener('input', colorValidator)
colorChanger()
colorValidator()