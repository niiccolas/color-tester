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

let Rouge = 0x00
let Vert = 0x00
let Bleu = 0x00
let opacityRange = document.getElementById('Alpha')
let colorDisplayer = document.getElementById('color-displayer')
const cellsOfRedCol = document.querySelectorAll('.col-red')
const cellsOfGreenCol = document.querySelectorAll('.col-green')
const cellsOfBlueCol = document.querySelectorAll('.col-blue')
const allCol = [cellsOfRedCol, cellsOfGreenCol, cellsOfBlueCol]
/* Init function */
// eslint-disable-next-line space-before-function-paren
//console.log(allCol)
function colorChanger() {
    allCol.forEach(col => {
      col.forEach(cell => {
        cell.addEventListener('click', function () {
          let cellClass = cell.getAttribute('class')
          if (cellClass === 'col-red') {
            let cellVal = cell.innerHTML
            ChangeRouge(cellVal)
          } else if (cellClass === 'col-green') {
            let cellVal = cell.innerHTML
            ChangeVert(cellVal)
          } else if (cellClass === 'col-blue') {
            let cellVal = cell.innerHTML
            ChangeBleu(cellVal)
          }
        })
      })
    })
}
colorChanger()

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
};

/* Adds color classes to the buttons */
function classPopulator() {

  let colorClasses = ['col-red', 'col-green', 'col-blue'];
  for (let i = 0; i <= colorClasses.length; i++) {
    document.querySelectorAll('#body-table tr td:nth-child(' + (i + 1) + ') button').forEach(cell => {
      cell.classList.add(colorClasses[i])
    })
  }
}

opacityRange.addEventListener('input', ValideCouleurHTML)
/* Applique la couleur sélectionnée au DOM */
function ValideCouleurHTML() {
  /* Récupère la chaîne Hexa des couleurs sélectionnées */
  let HexaRouge = Rouge.toString(16).toUpperCase()
  let HexaVert = Vert.toString(16).toUpperCase()
  let HexaBleu = Bleu.toString(16).toUpperCase()
  let HexaAlpha = Math.round((255 - opacityRange.value)).toString(16).toUpperCase()

  /* Affiche la valeur sur 2 digits */
  if (Rouge < 16) {
    HexaRouge = '0' + HexaRouge
  } /* End If HexaRouge */
  if (Vert < 16) {
    HexaVert = '0' + HexaVert
  } /* End If HexaVert */
  if (Bleu < 16) {
    HexaBleu = '0' + HexaBleu
  } /* End If HexaBleu */
  if (HexaAlpha.length < 2) {
    HexaAlpha = '0' + HexaAlpha
  }
  /* Concatène la chaîne Hexa des trois couleurs */
  let hexaColor = '#' + HexaRouge + HexaVert + HexaBleu + HexaAlpha
  /* Transmet la chaîne Hexa au Background du DOM */
  colorDisplayer.style.backgroundColor = hexaColor

  console.log(hexaColor)

  /* Transmet la chaîne Hexa à l'élément Output du DOM */
  let Output = document.getElementById('Output')
  Output.innerHTML = 'Couleur sélectionnée : ' + hexaColor
} // end of function


function ChangeRouge(Butee) {
  // Controle Incrementation - Décrémentation
  if (Butee === "+10") {
    Butee = 10
    Rouge += Butee
  } else if (Butee === "-10") {
    Butee = 10
    Rouge -= Butee
  } else {
    Rouge = parseInt(Butee, 16)
  }


  if (Rouge > 255) {
    Rouge = 255
  } /* End Id Rouge */
  if (Rouge < 0) {
    Rouge = 0
  } /* End If Rouge */
  ValideCouleurHTML()
} /* Fin Function */

function ChangeVert(Butee) {
  // Controle Incrementation - Décrémentation
  if (Butee === "+10") {
    Butee = 10
    Vert += Butee
  } else if (Butee === "-10") {
    Butee = 10
    Vert -= Butee
  } else {
    Vert = parseInt(Butee, 16)
  }


  if (Vert > 255) {
    Vert = 255
  } /* End Id Rouge */
  if (Vert < 0) {
    Vert = 0
  } /* End If Rouge */
  ValideCouleurHTML()
}

function ChangeBleu(Butee) {
  // Controle Incrementation - Décrémentation
  // Controle Incrementation - Décrémentation
  if (Butee === "+10") {
    Butee = 10
    Bleu += Butee
  } else if (Butee === "-10") {
    Butee = 10
    Bleu -= Butee
  } else {
    Bleu = parseInt(Butee, 16)
  }


  if (Bleu > 255) {
    Bleu = 255
  } /* End Id Rouge */
  if (Bleu < 0) {
    Bleu = 0
  } /* End If Rouge */
  ValideCouleurHTML()
}

function ValideVert(Valeur) {
  Vert = Valeur
  ValideCouleurHTML()
}

ValideCouleurHTML()