const data = {
  cristal: 0,
  star: 1,
  classe: 1,
  age: 1,
  sex: 'male',

  life: {
    current: 12,
    max: 12,
  },
  sanity: {
    current: 62,
    max: 62,
  },

  weapons: [
    
  ],
  attributes: [
    {
      type: 'P.Mágico',
      amount: 10,
    },
    {
      type: 'Constituição',
      amount: 10,
    },
    {
      type: 'Destreza',
      amount: 10,
    },
    {
      type: 'Sabedoria',
      amount: 10,
    },
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Inteligência',
      amount: 10,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Sorte',
      amount: 10,
    },
    {
      type: 'Sanidade',
      amount: 10,
    },
  ],
}


data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#cristal').val(data.cristal)
$('#classe').val(data.classe)
$('#star').val(data.star)
$('#age').val(data.age)
$('#sex').val(data.sex)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)


const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}
function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}
function leiaMais1() {
    const tresPontos1 = document.getElementById('tresPontos1');
    const mostrarMais1 = document.getElementById('mostrarMais1');
    const btnLeiaMais1 = document.getElementById('btnLeiaMais1');

    if (tresPontos1.style.display === 'none') {
        tresPontos1.style.display = 'inline';
        mostrarMais1.style.display = 'none';
        btnLeiaMais1.innerHTML = 'Nome';
    } else {
        tresPontos1.style.display = 'none';
        mostrarMais1.style.display = 'inline';
        btnLeiaMais1.innerHTML = 'Nome';
    }
}
function leiaMais2() {
  const tresPontos2 = document.getElementById('tresPontos2');
  const mostrarMais2 = document.getElementById('mostrarMais2');
  const btnLeiaMais2 = document.getElementById('btnLeiaMais2');

  if (tresPontos2.style.display === 'none') {
      tresPontos2.style.display = 'inline';
      mostrarMais2.style.display = 'none';
      btnLeiaMais2.innerHTML = 'Nome';
  } else {
      tresPontos2.style.display = 'none';
      mostrarMais2.style.display = 'inline';
      btnLeiaMais2.innerHTML = 'Nome';
  }
}