const data = {
  cristal: 500,
  star: 1,
  classe: 2,
  age: 27,
  sex: 'male',

  life: {
    current: 420,
    max: 14*10 *3,
  },
  sanity: {
    current: 360,
    max: 12*10*3,
  },

  weapons: [
    
  ],
  attributes: [
    {
      type: 'P.Mágico',
      amount: 15,
    },
    {
      type: 'Constituição',
      amount: 14,
    },
    {
      type: 'Destreza',
      amount: 16,
    },
    {
      type: 'Sabedoria',
      amount: 12,
    },
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Inteligência',
      amount: 12,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Sorte',
      amount: 16,
    },
    {
      type: 'Sanidade',
      amount: 11,
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
//botão da habilidade//
function leiaMais1() {
    const tresPontos1 = document.getElementById('tresPontos1');
    const mostrarMais1 = document.getElementById('mostrarMais1');
    const btnLeiaMais1 = document.getElementById('btnLeiaMais1');

    if (tresPontos1.style.display === 'none') {
        tresPontos1.style.display = 'inline';
        mostrarMais1.style.display = 'none';
        btnLeiaMais1.innerHTML = 'Primeiro selo';
    } else {
        tresPontos1.style.display = 'none';
        mostrarMais1.style.display = 'inline';
        btnLeiaMais1.innerHTML = 'Primeiro selo';
    }
}
function leiaMais2() {
  const tresPontos2 = document.getElementById('tresPontos2');
  const mostrarMais2 = document.getElementById('mostrarMais2');
  const btnLeiaMais2 = document.getElementById('btnLeiaMais2');

  if (tresPontos2.style.display === 'none') {
      tresPontos2.style.display = 'inline';
      mostrarMais2.style.display = 'none';
      btnLeiaMais2.innerHTML = 'Segundo selo';
  } else {
      tresPontos2.style.display = 'none';
      mostrarMais2.style.display = 'inline';
      btnLeiaMais2.innerHTML = 'Segundo selo';
  }
}
function leiaMais3() {
  const tresPontos3 = document.getElementById('tresPontos3');
  const mostrarMais3 = document.getElementById('mostrarMais3');
  const btnLeiaMais3 = document.getElementById('btnLeiaMais3');

  if (tresPontos3.style.display === 'none') {
      tresPontos3.style.display = 'inline';
      mostrarMais3.style.display = 'none';
      btnLeiaMais3.innerHTML = 'terceiro selo';
  } else {
      tresPontos3.style.display = 'none';
      mostrarMais3.style.display = 'inline';
      btnLeiaMais3.innerHTML = 'terceiro selo';
  }
}
function leiaMais4() {
  const tresPontos4 = document.getElementById('tresPontos4');
  const mostrarMais4 = document.getElementById('mostrarMais4');
  const btnLeiaMais4 = document.getElementById('btnLeiaMais4');

  if (tresPontos4.style.display === 'none') {
      tresPontos4.style.display = 'inline';
      mostrarMais4.style.display = 'none';
      btnLeiaMais4.innerHTML = 'Maldição da bomba';
  } else {
      tresPontos4.style.display = 'none';
      mostrarMais4.style.display = 'inline';
      btnLeiaMais4.innerHTML = 'Maldição da bomba';
  }
}
function leiaMais5() {
  const tresPontos5 = document.getElementById('tresPontos5');
  const mostrarMais5 = document.getElementById('mostrarMais5');
  const btnLeiaMais5 = document.getElementById('btnLeiaMais5');

  if (tresPontos5.style.display === 'none') {
      tresPontos5.style.display = 'inline';
      mostrarMais5.style.display = 'none';
      btnLeiaMais5.innerHTML = 'Tenga goken';
  } else {
      tresPontos5.style.display = 'none';
      mostrarMais5.style.display = 'inline';
      btnLeiaMais5.innerHTML = 'Tenga goken';
  }
}
function leiaMais6() {
  const tresPontos6 = document.getElementById('tresPontos6');
  const mostrarMais6 = document.getElementById('mostrarMais6');
  const btnLeiaMais6 = document.getElementById('btnLeiaMais6');

  if (tresPontos6.style.display === 'none') {
      tresPontos6.style.display = 'inline';
      mostrarMais6.style.display = 'none';
      btnLeiaMais6.innerHTML = 'Tenchi Kaimei';
  } else {
      tresPontos6.style.display = 'none';
      mostrarMais6.style.display = 'inline';
      btnLeiaMais6.innerHTML = 'Tenchi Kaimei';
  }
}
function leiaMais7() {
  const tresPontos7 = document.getElementById('tresPontos7');
  const mostrarMais7 = document.getElementById('mostrarMais7');
  const btnLeiaMais7 = document.getElementById('btnLeiaMais7');

  if (tresPontos7.style.display === 'none') {
      tresPontos7.style.display = 'inline';
      mostrarMais7.style.display = 'none';
      btnLeiaMais7.innerHTML = 'Devil slayer de gelo';
  } else {
      tresPontos7.style.display = 'none';
      mostrarMais7.style.display = 'inline';
      btnLeiaMais7.innerHTML = 'Devil slayer de gelo';
  }
}
function leiaMais8() {
  const tresPontos8 = document.getElementById('tresPontos8');
  const mostrarMais8 = document.getElementById('mostrarMais8');
  const btnLeiaMais8 = document.getElementById('btnLeiaMais8');

  if (tresPontos8.style.display === 'none') {
      tresPontos8.style.display = 'inline';
      mostrarMais8.style.display = 'none';
      btnLeiaMais8.innerHTML = 'Maldição dos espinhos';
  } else {
      tresPontos8.style.display = 'none';
      mostrarMais8.style.display = 'inline';
      btnLeiaMais8.innerHTML = 'Maldição dos espinhos';
  }
}
function leiaMais9() {
  const tresPontos9 = document.getElementById('tresPontos9');
  const mostrarMais9 = document.getElementById('mostrarMais9');
  const btnLeiaMais9 = document.getElementById('btnLeiaMais9');

  if (tresPontos9.style.display === 'none') {
      tresPontos9.style.display = 'inline';
      mostrarMais9.style.display = 'none';
      btnLeiaMais9.innerHTML = 'Absorption curse';
  } else {
      tresPontos9.style.display = 'none';
      mostrarMais9.style.display = 'inline';
      btnLeiaMais9.innerHTML = 'Absorption curse';
  }
}
function leiaMais10() {
  const tresPontos10 = document.getElementById('tresPontos10');
  const mostrarMais10 = document.getElementById('mostrarMais10');
  const btnLeiaMais10 = document.getElementById('btnLeiaMais10');

  if (tresPontos10.style.display === 'none') {
      tresPontos10.style.display = 'inline';
      mostrarMais10.style.display = 'none';
      btnLeiaMais10.innerHTML = 'Aprimoramento';
  } else {
      tresPontos10.style.display = 'none';
      mostrarMais10.style.display = 'inline';
      btnLeiaMais10.innerHTML = 'Aprimoramento';
  }
}
function leiaMais11() {
  const tresPontos11 = document.getElementById('tresPontos11');
  const mostrarMais11 = document.getElementById('mostrarMais11');
  const btnLeiaMais11 = document.getElementById('btnLeiaMais11');

  if (tresPontos11.style.display === 'none') {
      tresPontos11.style.display = 'inline';
      mostrarMais11.style.display = 'none';
      btnLeiaMais11.innerHTML = 'Calamity Curse';
  } else {
      tresPontos11.style.display = 'none';
      mostrarMais11.style.display = 'inline';
      btnLeiaMais11.innerHTML = 'Calamity Curse';
  }
}
function leiaMais12() {
  const tresPontos12 = document.getElementById('tresPontos12');
  const mostrarMais12 = document.getElementById('mostrarMais12');
  const btnLeiaMais12 = document.getElementById('btnLeiaMais12');

  if (tresPontos12.style.display === 'none') {
      tresPontos12.style.display = 'inline';
      mostrarMais12.style.display = 'none';
      btnLeiaMais12.innerHTML = 'Macro';
  } else {
      tresPontos12.style.display = 'none';
      mostrarMais12.style.display = 'inline';
      btnLeiaMais12.innerHTML = 'Macro';
  }
}
function leiaMais13() {
  const tresPontos13 = document.getElementById('tresPontos13');
  const mostrarMais13 = document.getElementById('mostrarMais13');
  const btnLeiaMais13 = document.getElementById('btnLeiaMais13');

  if (tresPontos13.style.display === 'none') {
      tresPontos13.style.display = 'inline';
      mostrarMais13.style.display = 'none';
      btnLeiaMais13.innerHTML = 'Conexão';
  } else {
      tresPontos13.style.display = 'none';
      mostrarMais13.style.display = 'inline';
      btnLeiaMais13.innerHTML = 'Conexão';
  }
}
function leiaMais14() {
  const tresPontos14 = document.getElementById('tresPontos14');
  const mostrarMais14 = document.getElementById('mostrarMais14');
  const btnLeiaMais14 = document.getElementById('btnLeiaMais14');

  if (tresPontos14.style.display === 'none') {
      tresPontos14.style.display = 'inline';
      mostrarMais14.style.display = 'none';
      btnLeiaMais14.innerHTML = 'Demon eyes';
  } else {
      tresPontos14.style.display = 'none';
      mostrarMais14.style.display = 'inline';
      btnLeiaMais14.innerHTML = 'Demon eyes';
  }
}
function leiaMais15() {
  const tresPontos15 = document.getElementById('tresPontos15');
  const mostrarMais15 = document.getElementById('mostrarMais15');
  const btnLeiaMais15 = document.getElementById('btnLeiaMais15');

  if (tresPontos15.style.display === 'none') {
      tresPontos15.style.display = 'inline';
      mostrarMais15.style.display = 'none';
      btnLeiaMais15.innerHTML = 'Necromancer';
  } else {
      tresPontos15.style.display = 'none';
      mostrarMais15.style.display = 'inline';
      btnLeiaMais15.innerHTML = 'Necromancer';
  }
}
function leiaMais16() {
  const tresPontos16 = document.getElementById('tresPontos16');
  const mostrarMais16 = document.getElementById('mostrarMais16');
  const btnLeiaMais16 = document.getElementById('btnLeiaMais16');

  if (tresPontos16.style.display === 'none') {
      tresPontos16.style.display = 'inline';
      mostrarMais16.style.display = 'none';
      btnLeiaMais16.innerHTML = 'Memento mori';
  } else {
      tresPontos16.style.display = 'none';
      mostrarMais16.style.display = 'inline';
      btnLeiaMais16.innerHTML = 'Memento mori';
  }
}
function leiaMais17() {
  const tresPontos17 = document.getElementById('tresPontos17');
  const mostrarMais17 = document.getElementById('mostrarMais17');
  const btnLeiaMais17 = document.getElementById('btnLeiaMais17');

  if (tresPontos17.style.display === 'none') {
      tresPontos17.style.display = 'inline';
      mostrarMais17.style.display = 'none';
      btnLeiaMais17.innerHTML = 'Telepatia';
  } else {
      tresPontos17.style.display = 'none';
      mostrarMais17.style.display = 'inline';
      btnLeiaMais17.innerHTML = 'Telepatia';
  }
}
function leiaMais18() {
  const tresPontos18 = document.getElementById('tresPontos18');
  const mostrarMais18 = document.getElementById('mostrarMais18');
  const btnLeiaMais18 = document.getElementById('btnLeiaMais18');

  if (tresPontos18.style.display === 'none') {
      tresPontos18.style.display = 'inline';
      mostrarMais18.style.display = 'none';
      btnLeiaMais18.innerHTML = 'Alegria';
  } else {
      tresPontos18.style.display = 'none';
      mostrarMais18.style.display = 'inline';
      btnLeiaMais18.innerHTML = 'Alegria';
  }
}
function leiaMais19() {
  const tresPontos19 = document.getElementById('tresPontos19');
  const mostrarMais19 = document.getElementById('mostrarMais19');
  const btnLeiaMais19 = document.getElementById('btnLeiaMais19');

  if (tresPontos19.style.display === 'none') {
      tresPontos19.style.display = 'inline';
      mostrarMais19.style.display = 'none';
      btnLeiaMais19.innerHTML = 'Flor da Prisão';
  } else {
      tresPontos19.style.display = 'none';
      mostrarMais19.style.display = 'inline';
      btnLeiaMais19.innerHTML = 'Flor da Prisão';
  }
}
function leiaMais20() {
  const tresPontos20 = document.getElementById('tresPontos20');
  const mostrarMais20 = document.getElementById('mostrarMais20');
  const btnLeiaMais20 = document.getElementById('btnLeiaMais20');

  if (tresPontos20.style.display === 'none') {
      tresPontos20.style.display = 'inline';
      mostrarMais20.style.display = 'none';
      btnLeiaMais20.innerHTML = 'Explosão';
  } else {
      tresPontos20.style.display = 'none';
      mostrarMais20.style.display = 'inline';
      btnLeiaMais20.innerHTML = 'Explosão';
  }
}
function leiaMais21() {
  const tresPontos21 = document.getElementById('tresPontos21');
  const mostrarMais21 = document.getElementById('mostrarMais21');
  const btnLeiaMais21 = document.getElementById('btnLeiaMais21');

  if (tresPontos21.style.display === 'none') {
      tresPontos21.style.display = 'inline';
      mostrarMais21.style.display = 'none';
      btnLeiaMais21.innerHTML = 'Dea Yggdrasil';
  } else {
      tresPontos21.style.display = 'none';
      mostrarMais21.style.display = 'inline';
      btnLeiaMais21.innerHTML = 'Dea Yggdrasil';
  }
}
function leiaMais22() {
  const tresPontos22 = document.getElementById('tresPontos22');
  const mostrarMais22 = document.getElementById('mostrarMais22');
  const btnLeiaMais22 = document.getElementById('btnLeiaMais22');

  if (tresPontos22.style.display === 'none') {
      tresPontos22.style.display = 'inline';
      mostrarMais22.style.display = 'none';
      btnLeiaMais22.innerHTML = 'Organic Link Magic';
  } else {
      tresPontos22.style.display = 'none';
      mostrarMais22.style.display = 'inline';
      btnLeiaMais22.innerHTML = 'Organic Link Magic';
  }
}
function leiaMais23() {
  const tresPontos23 = document.getElementById('tresPontos23');
  const mostrarMais23 = document.getElementById('mostrarMais23');
  const btnLeiaMais23 = document.getElementById('btnLeiaMais23');

  if (tresPontos23.style.display === 'none') {
      tresPontos23.style.display = 'inline';
      mostrarMais23.style.display = 'none';
      btnLeiaMais23.innerHTML = 'Aprimoramento por segundo';
  } else {
      tresPontos23.style.display = 'none';
      mostrarMais23.style.display = 'inline';
      btnLeiaMais23.innerHTML = 'Aprimoramento por segundo';
  }
}
function leiaMais24() {
  const tresPontos24 = document.getElementById('tresPontos24');
  const mostrarMais24 = document.getElementById('mostrarMais24');
  const btnLeiaMais24 = document.getElementById('btnLeiaMais24');

  if (tresPontos24.style.display === 'none') {
      tresPontos24.style.display = 'inline';
      mostrarMais24.style.display = 'none';
      btnLeiaMais24.innerHTML = 'Capture bomb';
  } else {
      tresPontos24.style.display = 'none';
      mostrarMais24.style.display = 'inline';
      btnLeiaMais24.innerHTML = 'Capture bomb';
  }
}
function leiaMais25() {
  const tresPontos25 = document.getElementById('tresPontos25');
  const mostrarMais25 = document.getElementById('mostrarMais25');
  const btnLeiaMais25 = document.getElementById('btnLeiaMais25');

  if (tresPontos25.style.display === 'none') {
      tresPontos25.style.display = 'inline';
      mostrarMais25.style.display = 'none';
      btnLeiaMais25.innerHTML = 'Revolução';
  } else {
      tresPontos25.style.display = 'none';
      mostrarMais25.style.display = 'inline';
      btnLeiaMais25.innerHTML = 'Revolução';
  }
}
function leiaMais26() {
  const tresPontos26 = document.getElementById('tresPontos26');
  const mostrarMais26 = document.getElementById('mostrarMais26');
  const btnLeiaMais26 = document.getElementById('btnLeiaMais26');

  if (tresPontos26.style.display === 'none') {
      tresPontos26.style.display = 'inline';
      mostrarMais26.style.display = 'none';
      btnLeiaMais26.innerHTML = 'Ejeção';
  } else {
      tresPontos26.style.display = 'none';
      mostrarMais26.style.display = 'inline';
      btnLeiaMais26.innerHTML = 'Ejeção';
  }
}

function leiaMais27() {
  const tresPontos27 = document.getElementById('tresPontos27');
  const mostrarMais27 = document.getElementById('mostrarMais27');
  const btnLeiaMais27 = document.getElementById('btnLeiaMais27');

  if (tresPontos27.style.display === 'none') {
      tresPontos27.style.display = 'inline';
      mostrarMais27.style.display = 'none';
      btnLeiaMais27.innerHTML = 'Transformação de Áries';
  } else {
      tresPontos27.style.display = 'none';
      mostrarMais27.style.display = 'inline';
      btnLeiaMais27.innerHTML = 'Transformação de Áries';
  }
}
function leiaMais28() {
  const tresPontos28 = document.getElementById('tresPontos28');
  const mostrarMais28 = document.getElementById('mostrarMais28');
  const btnLeiaMais28 = document.getElementById('btnLeiaMais28');

  if (tresPontos28.style.display === 'none') {
      tresPontos28.style.display = 'inline';
      mostrarMais28.style.display = 'none';
      btnLeiaMais28.innerHTML = 'Transformação de touro';
  } else {
      tresPontos28.style.display = 'none';
      mostrarMais28.style.display = 'inline';
      btnLeiaMais28.innerHTML = 'Transformação de touro';
  }
}
function leiaMais29() {
  const tresPontos29 = document.getElementById('tresPontos29');
  const mostrarMais29 = document.getElementById('mostrarMais29');
  const btnLeiaMais29 = document.getElementById('btnLeiaMais29');

  if (tresPontos29.style.display === 'none') {
      tresPontos29.style.display = 'inline';
      mostrarMais29.style.display = 'none';
      btnLeiaMais29.innerHTML = 'Transformação de hades';
  } else {
      tresPontos29.style.display = 'none';
      mostrarMais29.style.display = 'inline';
      btnLeiaMais29.innerHTML = 'Transformação de hades';
  }
}
function leiaMais30() {
  const tresPontos30 = document.getElementById('tresPontos30');
  const mostrarMais30 = document.getElementById('mostrarMais30');
  const btnLeiaMais30 = document.getElementById('btnLeiaMais30');

  if (tresPontos30.style.display === 'none') {
      tresPontos30.style.display = 'inline';
      mostrarMais30.style.display = 'none';
      btnLeiaMais30.innerHTML = 'Transformação do Modo Dragão de Fogo Relâmpago';
  } else {
      tresPontos30.style.display = 'none';
      mostrarMais30.style.display = 'inline';
      btnLeiaMais30.innerHTML = 'Transformação do Modo Dragão de Fogo Relâmpago';
  }
}
function leiaMais31() {
  const tresPontos31 = document.getElementById('tresPontos31');
  const mostrarMais31 = document.getElementById('mostrarMais31');
  const btnLeiaMais31 = document.getElementById('btnLeiaMais31');

  if (tresPontos31.style.display === 'none') {
      tresPontos31.style.display = 'inline';
      mostrarMais31.style.display = 'none';
      btnLeiaMais31.innerHTML = 'Inferno';
  } else {
      tresPontos31.style.display = 'none';
      mostrarMais31.style.display = 'inline';
      btnLeiaMais31.innerHTML = 'Inferno';
  }
}
function leiaMais32() {
  const tresPontos32 = document.getElementById('tresPontos32');
  const mostrarMais32 = document.getElementById('mostrarMais32');
  const btnLeiaMais32 = document.getElementById('btnLeiaMais32');

  if (tresPontos32.style.display === 'none') {
      tresPontos32.style.display = 'inline';
      mostrarMais32.style.display = 'none';
      btnLeiaMais32.innerHTML = 'Demonic Eye Unleashed';
  } else {
      tresPontos32.style.display = 'none';
      mostrarMais32.style.display = 'inline';
      btnLeiaMais32.innerHTML = 'Demonic Eye Unleashed';
  }
}
function leiaMais33() {
  const tresPontos33 = document.getElementById('tresPontos33');
  const mostrarMais33 = document.getElementById('mostrarMais33');
  const btnLeiaMais33 = document.getElementById('btnLeiaMais33');

  if (tresPontos33.style.display === 'none') {
      tresPontos33.style.display = 'inline';
      mostrarMais33.style.display = 'none';
      btnLeiaMais33.innerHTML = 'Self explosion';
  } else {
      tresPontos33.style.display = 'none';
      mostrarMais33.style.display = 'inline';
      btnLeiaMais33.innerHTML = 'Self explosion';
  }
}
function leiaMais34() {
  const tresPontos34 = document.getElementById('tresPontos34');
  const mostrarMais34 = document.getElementById('mostrarMais34');
  const btnLeiaMais34 = document.getElementById('btnLeiaMais34');

  if (tresPontos34.style.display === 'none') {
      tresPontos34.style.display = 'inline';
      mostrarMais34.style.display = 'none';
      btnLeiaMais34.innerHTML = 'Julgamento da Estrela Maléfica';
  } else {
      tresPontos34.style.display = 'none';
      mostrarMais34.style.display = 'inline';
      btnLeiaMais34.innerHTML = 'Julgamento da Estrela Maléfica';
  }
}
function leiaMais35() {
  const tresPontos35 = document.getElementById('tresPontos35');
  const mostrarMais35 = document.getElementById('mostrarMais35');
  const btnLeiaMais35 = document.getElementById('btnLeiaMais35');

  if (tresPontos35.style.display === 'none') {
      tresPontos35.style.display = 'inline';
      mostrarMais35.style.display = 'none';
      btnLeiaMais35.innerHTML = 'Portão Defeituoso';
  } else {
      tresPontos35.style.display = 'none';
      mostrarMais35.style.display = 'inline';
      btnLeiaMais35.innerHTML = 'Portão Defeituoso';
  }
}
function leiaMais36() {
  const tresPontos36 = document.getElementById('tresPontos36');
  const mostrarMais36 = document.getElementById('mostrarMais36');
  const btnLeiaMais36 = document.getElementById('btnLeiaMais36');

  if (tresPontos36.style.display === 'none') {
      tresPontos36.style.display = 'inline';
      mostrarMais36.style.display = 'none';
      btnLeiaMais36.innerHTML = 'Pseudo Espírito de Afinidade';
  } else {
      tresPontos36.style.display = 'none';
      mostrarMais36.style.display = 'inline';
      btnLeiaMais36.innerHTML = 'Pseudo Espírito de Afinidade';
  }
}
  function leiaMais37() {
    const tresPontos37 = document.getElementById('tresPontos37');
    const mostrarMais37 = document.getElementById('mostrarMais37');
    const btnLeiaMais37 = document.getElementById('btnLeiaMais37');
  
    if (tresPontos32a7.style.display === 'none') {
        tresPontos37.style.display = 'inline';
        mostrarMais37.style.display = 'none';
        btnLeiaMais37.innerHTML = 'F.Rashomon';
    } else {
        tresPontos37.style.display = 'none';
        mostrarMais37.style.display = 'inline';
        btnLeiaMais37.innerHTML = 'F.Rashomon';
    }
}
//bençãos//
function leiaMais1a() {
  const tresPontos1a = document.getElementById('tresPontos1a');
  const mostrarMais1a = document.getElementById('mostrarMais1a');
  const btnLeiaMais1a = document.getElementById('btnLeiaMais1a');

  if (tresPontos1a.style.display === 'none') {
      tresPontos1a.style.display = 'inline';
      mostrarMais1a.style.display = 'none';
      btnLeiaMais1a.innerHTML = 'Evitar Flecha';
  } else {
      tresPontos1a.style.display = 'none';
      mostrarMais1a.style.display = 'inline';
      btnLeiaMais1a.innerHTML = 'Evitar Flecha';
  }
}
function leiaMais2a() {
const tresPontos2a = document.getElementById('tresPontos2a');
const mostrarMais2a = document.getElementById('mostrarMais2a');
const btnLeiaMais2a = document.getElementById('btnLeiaMais2a');

if (tresPontos2a.style.display === 'none') {
    tresPontos2a.style.display = 'inline';
    mostrarMais2a.style.display = 'none';
    btnLeiaMais2a.innerHTML = 'Garantia de Flecha';
} else {
    tresPontos2a.style.display = 'none';
    mostrarMais2a.style.display = 'inline';
    btnLeiaMais2a.innerHTML = 'Garantia de Flecha';
}
}
function leiaMais3a() {
const tresPontos3a = document.getElementById('tresPontos3a');
const mostrarMais3a = document.getElementById('mostrarMais3a');
const btnLeiaMais3a = document.getElementById('btnLeiaMais3a');

if (tresPontos3a.style.display === 'none') {
    tresPontos3a.style.display = 'inline';
    mostrarMais3a.style.display = 'none';
    btnLeiaMais3a.innerHTML = 'Resistência a Mágica';
} else {
    tresPontos3a.style.display = 'none';
    mostrarMais3a.style.display = 'inline';
    btnLeiaMais3a.innerHTML = 'Resistência a Mágica';
}
}
function leiaMais4a() {
const tresPontos4a = document.getElementById('tresPontos4a');
const mostrarMais4a = document.getElementById('mostrarMais4a');
const btnLeiaMais4a = document.getElementById('btnLeiaMais4a');

if (tresPontos4a.style.display === 'none') {
    tresPontos4a.style.display = 'inline';
    mostrarMais4a.style.display = 'none';
    btnLeiaMais4a.innerHTML = 'Evitar Fogo';
} else {
    tresPontos4a.style.display = 'none';
    mostrarMais4a.style.display = 'inline';
    btnLeiaMais4a.innerHTML = 'Evitar Fogo';
}
}
function leiaMais5a() {
const tresPontos5a = document.getElementById('tresPontos5a');
const mostrarMais5a = document.getElementById('mostrarMais5a');
const btnLeiaMais5a = document.getElementById('btnLeiaMais5a');

if (tresPontos5a.style.display === 'none') {
    tresPontos5a.style.display = 'inline';
    mostrarMais5a.style.display = 'none';
    btnLeiaMais5a.innerHTML = 'Absorção de impacto';
} else {
    tresPontos5a.style.display = 'none';
    mostrarMais5a.style.display = 'inline';
    btnLeiaMais5a.innerHTML = 'Absorção de impacto';
}
}
function leiaMais6a() {
const tresPontos6a = document.getElementById('tresPontos6a');
const mostrarMais6a = document.getElementById('mostrarMais6a');
const btnLeiaMais6a = document.getElementById('btnLeiaMais6a');

if (tresPontos6a.style.display === 'none') {
    tresPontos6a.style.display = 'inline';
    mostrarMais6a.style.display = 'none';
    btnLeiaMais6a.innerHTML = 'Resistir a dano físico';
} else {
    tresPontos6a.style.display = 'none';
    mostrarMais6a.style.display = 'inline';
    btnLeiaMais6a.innerHTML = 'Resistir a dano físico';
}
}
function leiaMais7a() {
const tresPontos7a = document.getElementById('tresPontos7a');
const mostrarMais7a = document.getElementById('mostrarMais7a');
const btnLeiaMais7a = document.getElementById('btnLeiaMais7a');

if (tresPontos7a.style.display === 'none') {
    tresPontos7a.style.display = 'inline';
    mostrarMais7a.style.display = 'none';
    btnLeiaMais7a.innerHTML = 'Água Refletida';
} else {
    tresPontos7a.style.display = 'none';
    mostrarMais7a.style.display = 'inline';
    btnLeiaMais7a.innerHTML = 'Água Refletida';
}
}
function leiaMais8a() {
const tresPontos8a = document.getElementById('tresPontos8a');
const mostrarMais8a = document.getElementById('mostrarMais8a');
const btnLeiaMais8a = document.getElementById('btnLeiaMais8a');

if (tresPontos8a.style.display === 'none') {
    tresPontos8a.style.display = 'inline';
    mostrarMais8a.style.display = 'none';
    btnLeiaMais8a.innerHTML = 'Imunidade a Escuridão';
} else {
    tresPontos8a.style.display = 'none';
    mostrarMais8a.style.display = 'inline';
    btnLeiaMais8a.innerHTML = 'Imunidade a Escuridão';
}
}
function leiaMais9a() {
const tresPontos9a = document.getElementById('tresPontos9a');
const mostrarMais9a = document.getElementById('mostrarMais9a');
const btnLeiaMais9a = document.getElementById('btnLeiaMais9a');

if (tresPontos9a.style.display === 'none') {
    tresPontos9a.style.display = 'inline';
    mostrarMais9a.style.display = 'none';
    btnLeiaMais9a.innerHTML = 'Compartilhamento de Luz';
} else {
    tresPontos9a.style.display = 'none';
    mostrarMais9a.style.display = 'inline';
    btnLeiaMais9a.innerHTML = 'Compartilhamento de Luz';
}
}
function leiaMais10a() {
const tresPontos10a = document.getElementById('tresPontos10a');
const mostrarMais10a = document.getElementById('mostrarMais10a');
const btnLeiaMais10a = document.getElementById('btnLeiaMais10a');

if (tresPontos10a.style.display === 'none') {
    tresPontos10a.style.display = 'inline';
    mostrarMais10a.style.display = 'none';
    btnLeiaMais10a.innerHTML = 'Rapidez';
} else {
    tresPontos10a.style.display = 'none';
    mostrarMais10a.style.display = 'inline';
    btnLeiaMais10a.innerHTML = 'Rapidez';
}
}
function leiaMais11a() {
const tresPontos11a = document.getElementById('tresPontos11a');
const mostrarMais11a = document.getElementById('mostrarMais11a');
const btnLeiaMais11a = document.getElementById('btnLeiaMais11a');

if (tresPontos11a.style.display === 'none') {
    tresPontos11a.style.display = 'inline';
    mostrarMais11a.style.display = 'none';
    btnLeiaMais11a.innerHTML = 'Mestre em Montaria';
} else {
    tresPontos11a.style.display = 'none';
    mostrarMais11a.style.display = 'inline';
    btnLeiaMais11a.innerHTML = 'Mestre em Montaria';
}
}
function leiaMais12a() {
const tresPontos12a = document.getElementById('tresPontos12a');
const mostrarMais12a = document.getElementById('mostrarMais12a');
const btnLeiaMais12a = document.getElementById('btnLeiaMais12a');

if (tresPontos12a.style.display === 'none') {
    tresPontos12a.style.display = 'inline';
    mostrarMais12a.style.display = 'none';
    btnLeiaMais12a.innerHTML = 'Iniciativa';
} else {
    tresPontos12a.style.display = 'none';
    mostrarMais12a.style.display = 'inline';
    btnLeiaMais12a.innerHTML = 'Iniciativa';
}
}
function leiaMais13a() {
const tresPontos13a = document.getElementById('tresPontos13a');
const mostrarMais13a = document.getElementById('mostrarMais13a');
const btnLeiaMais13a = document.getElementById('btnLeiaMais13a');

if (tresPontos13a.style.display === 'none') {
    tresPontos13a.style.display = 'inline';
    mostrarMais13a.style.display = 'none';
    btnLeiaMais13a.innerHTML = 'Imunidade a Ataques Seguidos';
} else {
    tresPontos13a.style.display = 'none';
    mostrarMais13a.style.display = 'inline';
    btnLeiaMais13a.innerHTML = 'Imunidade a Ataques Seguidos';
}
}
function leiaMais14a() {
const tresPontos14a = document.getElementById('tresPontos14a');
const mostrarMais14a = document.getElementById('mostrarMais14a');
const btnLeiaMais14a = document.getElementById('btnLeiaMais14a');

if (tresPontos14a.style.display === 'none') {
    tresPontos14a.style.display = 'inline';
    mostrarMais14a.style.display = 'none';
    btnLeiaMais14a.innerHTML = 'Benção da Chuva';
} else {
    tresPontos14a.style.display = 'none';
    mostrarMais14a.style.display = 'inline';
    btnLeiaMais14a.innerHTML = 'Benção da Chuva';
}
}
function leiaMais15a() {
const tresPontos15a = document.getElementById('tresPontos15a');
const mostrarMais15a = document.getElementById('mostrarMais15a');
const btnLeiaMais15a = document.getElementById('btnLeiaMais15a');

if (tresPontos15a.style.display === 'none') {
    tresPontos15a.style.display = 'inline';
    mostrarMais15a.style.display = 'none';
    btnLeiaMais15a.innerHTML = 'Benção da Manhã';
} else {
    tresPontos15a.style.display = 'none';
    mostrarMais15a.style.display = 'inline';
    btnLeiaMais15a.innerHTML = 'Benção da Manhã';
}
}
function leiaMais16a() {
const tresPontos16a = document.getElementById('tresPontos16a');
const mostrarMais16a = document.getElementById('mostrarMais16a');
const btnLeiaMais16a = document.getElementById('btnLeiaMais16a');

if (tresPontos16a.style.display === 'none') {
    tresPontos16a.style.display = 'inline';
    mostrarMais16a.style.display = 'none';
    btnLeiaMais16a.innerHTML = 'Ler Mentes';
} else {
    tresPontos16a.style.display = 'none';
    mostrarMais16a.style.display = 'inline';
    btnLeiaMais16a.innerHTML = 'Ler Mentes';
}
}
function leiaMais17a() {
const tresPontos17a = document.getElementById('tresPontos17a');
const mostrarMais17a = document.getElementById('mostrarMais17a');
const btnLeiaMais17a = document.getElementById('btnLeiaMais17a');

if (tresPontos17a.style.display === 'none') {
    tresPontos17a.style.display = 'inline';
    mostrarMais17a.style.display = 'none';
    btnLeiaMais17a.innerHTML = 'Maestria em ítens';
} else {
    tresPontos17a.style.display = 'none';
    mostrarMais17a.style.display = 'inline';
    btnLeiaMais17a.innerHTML = 'Maestria em ítens';
}
}
function leiaMais18a() {
const tresPontos18a = document.getElementById('tresPontos18a');
const mostrarMais18a = document.getElementById('mostrarMais18a');
const btnLeiaMais18a = document.getElementById('btnLeiaMais18a');

if (tresPontos18a.style.display === 'none') {
    tresPontos18a.style.display = 'inline';
    mostrarMais18a.style.display = 'none';
    btnLeiaMais18a.innerHTML = 'Maestria sem Armas';
} else {
    tresPontos18a.style.display = 'none';
    mostrarMais18a.style.display = 'inline';
    btnLeiaMais18a.innerHTML = 'Maestria sem Armas';
}
}
function leiaMais19a() {
const tresPontos19a = document.getElementById('tresPontos19a');
const mostrarMais19a = document.getElementById('mostrarMais19a');
const btnLeiaMais19a = document.getElementById('btnLeiaMais19a');

if (tresPontos19a.style.display === 'none') {
    tresPontos19a.style.display = 'inline';
    mostrarMais19a.style.display = 'none';
    btnLeiaMais19a.innerHTML = 'Benção do Deus da Guerra';
} else {
    tresPontos19a.style.display = 'none';
    mostrarMais19a.style.display = 'inline';
    btnLeiaMais19a.innerHTML = 'Benção do Deus da Guerra';
}
}
function leiaMais20a() {
const tresPontos20a = document.getElementById('tresPontos20a');
const mostrarMais20a = document.getElementById('mostrarMais20a');
const btnLeiaMais20a = document.getElementById('btnLeiaMais20a');

if (tresPontos20a.style.display === 'none') {
    tresPontos20a.style.display = 'inline';
    mostrarMais20a.style.display = 'none';
    btnLeiaMais20a.innerHTML = 'Benção da Água';
} else {
    tresPontos20a.style.display = 'none';
    mostrarMais20a.style.display = 'inline';
    btnLeiaMais20a.innerHTML = 'Benção da Água';
}
}
function leiaMais21a() {
const tresPontos21a = document.getElementById('tresPontos21a');
const mostrarMais21a = document.getElementById('mostrarMais21a');
const btnLeiaMais21a = document.getElementById('btnLeiaMais21a');

if (tresPontos21a.style.display === 'none') {
    tresPontos21a.style.display = 'inline';
    mostrarMais21a.style.display = 'none';
    btnLeiaMais21a.innerHTML = 'Benção da Névoa';
} else {
    tresPontos21a.style.display = 'none';
    mostrarMais21a.style.display = 'inline';
    btnLeiaMais21a.innerHTML = 'Benção da Névoa';
}
}
function leiaMais22a() {
const tresPontos22a = document.getElementById('tresPontos22a');
const mostrarMais22a = document.getElementById('mostrarMais22a');
const btnLeiaMais22a = document.getElementById('btnLeiaMais22a');

if (tresPontos22a.style.display === 'none') {
    tresPontos22a.style.display = 'inline';
    mostrarMais22a.style.display = 'none';
    btnLeiaMais22a.innerHTML = 'Benção da Nuvem';
} else {
    tresPontos22a.style.display = 'none';
    mostrarMais22a.style.display = 'inline';
    btnLeiaMais22a.innerHTML = 'Benção da Nuvem';
}
}
function leiaMais23a() {
const tresPontos23a = document.getElementById('tresPontos23a');
const mostrarMais23a = document.getElementById('mostrarMais23a');
const btnLeiaMais23a = document.getElementById('btnLeiaMais23a');

if (tresPontos23a.style.display === 'none') {
    tresPontos23a.style.display = 'inline';
    mostrarMais23a.style.display = 'none';
    btnLeiaMais23a.innerHTML = 'Benção do Relâmpago';
} else {
    tresPontos23a.style.display = 'none';
    mostrarMais23a.style.display = 'inline';
    btnLeiaMais23a.innerHTML = 'Benção do Relâmpago';
}
}
function leiaMais24a() {
const tresPontos24a = document.getElementById('tresPontos24a');
const mostrarMais24a = document.getElementById('mostrarMais24a');
const btnLeiaMais24a = document.getElementById('btnLeiaMais24a');

if (tresPontos24a.style.display === 'none') {
    tresPontos24a.style.display = 'inline';
    mostrarMais24a.style.display = 'none';
    btnLeiaMais24a.innerHTML = 'Conhecimento de Sódio';
} else {
    tresPontos24a.style.display = 'none';
    mostrarMais24a.style.display = 'inline';
    btnLeiaMais24a.innerHTML = 'Conhecimento de Sódio';
}
}
function leiaMais25a() {
const tresPontos25a = document.getElementById('tresPontos25a');
const mostrarMais25a = document.getElementById('mostrarMais25a');
const btnLeiaMais25a = document.getElementById('btnLeiaMais25a');

if (tresPontos25a.style.display === 'none') {
    tresPontos25a.style.display = 'inline';
    mostrarMais25a.style.display = 'none';
    btnLeiaMais25a.innerHTML = 'Rei do Gosto';
} else {
    tresPontos25a.style.display = 'none';
    mostrarMais25a.style.display = 'inline';
    btnLeiaMais25a.innerHTML = 'Rei do Gosto';
}
}
function leiaMais26a() {
const tresPontos26a = document.getElementById('tresPontos26a');
const mostrarMais26a = document.getElementById('mostrarMais26a');
const btnLeiaMais26a = document.getElementById('btnLeiaMais26a');

if (tresPontos26a.style.display === 'none') {
    tresPontos26a.style.display = 'inline';
    mostrarMais26a.style.display = 'none';
    btnLeiaMais26a.innerHTML = 'Benção da cozinha';
} else {
    tresPontos26a.style.display = 'none';
    mostrarMais26a.style.display = 'inline';
    btnLeiaMais26a.innerHTML = 'Benção da cozinha';
}
}

function leiaMais27a() {
const tresPontos27a = document.getElementById('tresPontos27a');
const mostrarMais27a = document.getElementById('mostrarMais27a');
const btnLeiaMais27a = document.getElementById('btnLeiaMais27a');

if (tresPontos27a.style.display === 'none') {
    tresPontos27a.style.display = 'inline';
    mostrarMais27a.style.display = 'none';
    btnLeiaMais27a.innerHTML = 'Design de Roupas';
} else {
    tresPontos27a.style.display = 'none';
    mostrarMais27a.style.display = 'inline';
    btnLeiaMais27a.innerHTML = 'Design de Roupas';
}
}
function leiaMais28a() {
const tresPontos28a = document.getElementById('tresPontos28a');
const mostrarMais28a = document.getElementById('mostrarMais28a');
const btnLeiaMais28a = document.getElementById('btnLeiaMais28a');

if (tresPontos28a.style.display === 'none') {
    tresPontos28a.style.display = 'inline';
    mostrarMais28a.style.display = 'none';
    btnLeiaMais28a.innerHTML = 'Maestria em Ensinar';
} else {
    tresPontos28a.style.display = 'none';
    mostrarMais28a.style.display = 'inline';
    btnLeiaMais28a.innerHTML = 'Maestria em Ensinar';
}
}
function leiaMais29a() {
const tresPontos29a = document.getElementById('tresPontos29a');
const mostrarMais29a = document.getElementById('mostrarMais29a');
const btnLeiaMais29a = document.getElementById('btnLeiaMais29a');

if (tresPontos29a.style.display === 'none') {
    tresPontos29a.style.display = 'inline';
    mostrarMais29a.style.display = 'none';
    btnLeiaMais29a.innerHTML = 'Mestre em Treinamento';
} else {
    tresPontos29a.style.display = 'none';
    mostrarMais29a.style.display = 'inline';
    btnLeiaMais29a.innerHTML = 'Mestre em Treinamento';
}
}
function leiaMais30a() {
const tresPontos30a = document.getElementById('tresPontos30a');
const mostrarMais30a = document.getElementById('mostrarMais30a');
const btnLeiaMais30a = document.getElementById('btnLeiaMais30a');

if (tresPontos30a.style.display === 'none') {
    tresPontos30a.style.display = 'inline';
    mostrarMais30a.style.display = 'none';
    btnLeiaMais30a.innerHTML = 'Imunidade a Veneno';
} else {
    tresPontos30a.style.display = 'none';
    mostrarMais30a.style.display = 'inline';
    btnLeiaMais30a.innerHTML = 'Imunidade a Veneno';
}
}
function leiaMais31a() {
const tresPontos31a = document.getElementById('tresPontos31a');
const mostrarMais31a = document.getElementById('mostrarMais31a');
const btnLeiaMais31a = document.getElementById('btnLeiaMais31a');

if (tresPontos31a.style.display === 'none') {
    tresPontos31a.style.display = 'inline';
    mostrarMais31a.style.display = 'none';
    btnLeiaMais31a.innerHTML = 'Imunidade a Doenças';
} else {
    tresPontos31a.style.display = 'none';
    mostrarMais31a.style.display = 'inline';
    btnLeiaMais31a.innerHTML = 'Imunidade a Doenças';
}
}
function leiaMais32a() {
const tresPontos32a = document.getElementById('tresPontos32a');
const mostrarMais32a = document.getElementById('mostrarMais32a');
const btnLeiaMais32a = document.getElementById('btnLeiaMais32a');

if (tresPontos32a.style.display === 'none') {
    tresPontos32a.style.display = 'inline';
    mostrarMais32a.style.display = 'none';
    btnLeiaMais32a.innerHTML = 'Sangramento Poderoso';
} else {
    tresPontos32a.style.display = 'none';
    mostrarMais32a.style.display = 'inline';
    btnLeiaMais32a.innerHTML = 'Sangramento Poderoso';
}
}
function leiaMais33a() {
const tresPontos33a = document.getElementById('tresPontos33a');
const mostrarMais33a = document.getElementById('mostrarMais33a');
const btnLeiaMais33a = document.getElementById('btnLeiaMais33a');

if (tresPontos33a.style.display === 'none') {
    tresPontos33a.style.display = 'inline';
    mostrarMais33a.style.display = 'none';
    btnLeiaMais33a.innerHTML = 'Benção da Fênix';
} else {
    tresPontos33a.style.display = 'none';
    mostrarMais33a.style.display = 'inline';
    btnLeiaMais33a.innerHTML = 'Benção da Fênix';
}
}
function leiaMais34a() {
const tresPontos34a = document.getElementById('tresPontos34a');
const mostrarMais34a = document.getElementById('mostrarMais34a');
const btnLeiaMais34a = document.getElementById('btnLeiaMais34a');

if (tresPontos34a.style.display === 'none') {
    tresPontos34a.style.display = 'inline';
    mostrarMais34a.style.display = 'none';
    btnLeiaMais34a.innerHTML = 'Julgamento';
} else {
    tresPontos34a.style.display = 'none';
    mostrarMais34a.style.display = 'inline';
    btnLeiaMais34a.innerHTML = 'Julgamento';
}
}
function leiaMais35a() {
const tresPontos35a = document.getElementById('tresPontos35a');
const mostrarMais35a = document.getElementById('mostrarMais35a');
const btnLeiaMais35a = document.getElementById('btnLeiaMais35a');

if (tresPontos35a.style.display === 'none') {
    tresPontos35a.style.display = 'inline';
    mostrarMais35a.style.display = 'none';
    btnLeiaMais35a.innerHTML = 'Benção do sol';
} else {
    tresPontos35a.style.display = 'none';
    mostrarMais35a.style.display = 'inline';
    btnLeiaMais35a.innerHTML = 'Benção do sol';
}
}
function leiaMais36a() {
const tresPontos36a = document.getElementById('tresPontos36a');
const mostrarMais36a = document.getElementById('mostrarMais36a');
const btnLeiaMais36a = document.getElementById('btnLeiaMais36a');

if (tresPontos36a.style.display === 'none') {
    tresPontos36a.style.display = 'inline';
    mostrarMais36a.style.display = 'none';
    btnLeiaMais36a.innerHTML = 'Benção da noite';
} else {
    tresPontos36a.style.display = 'none';
    mostrarMais36a.style.display = 'inline';
    btnLeiaMais36a.innerHTML = 'Benção da noite';
}
}
function leiaMais38a() {
    const tresPontos38a = document.getElementById('tresPontos38a');
    const mostrarMais38a = document.getElementById('mostrarMais38a');
    const btnLeiaMais38a = document.getElementById('btnLeiaMais38a');
    
    if (tresPontos38a.style.display === 'none') {
        tresPontos38a.style.display = 'inline';
        mostrarMais38a.style.display = 'none';
        btnLeiaMais38a.innerHTML = 'Benção da indestrutibilidade ';
    } else {
        tresPontos38a.style.display = 'none';
        mostrarMais38a.style.display = 'inline';
        btnLeiaMais38a.innerHTML = 'Benção da indestrutibilidade ';
    }
    }
    function leiaMais37a() {
        const tresPontos37a = document.getElementById('tresPontos37a');
        const mostrarMais37a = document.getElementById('mostrarMais37a');
        const btnLeiaMais37a = document.getElementById('btnLeiaMais37a');
        
        if (tresPontos37a.style.display === 'none') {
            tresPontos37a.style.display = 'inline';
            mostrarMais37a.style.display = 'none';
            btnLeiaMais37a.innerHTML = 'Proteção Divina da Vestimenta';
        } else {
            tresPontos37a.style.display = 'none';
            mostrarMais37a.style.display = 'inline';
            btnLeiaMais37a.innerHTML = 'Proteção Divina da Vestimenta';
        }
        }

        // document.getElementById('discount-form').addEventListener('submit', calculateDiscount);

 document.getElementById('discount-form').addEventListener('submit', function(e) {

    // Hide Results
    document.getElementById('results').style.display = 'none';

    // Show Loader
    document.getElementById('loader').style.display = 'block';


    setTimeout(calculateDiscount, 700);

    e.preventDefault();
 });

 
// Calculate Results
function calculateDiscount() {
 
    // UI variables
    const actualPrice = document.getElementById('price');
    const discount = fogo
    let discountedResult = document.getElementById('discounted-price');

    var fogo = 80
    var agua = 80
    var sagrado = 80
    var morte = -50
    var veneno = 80
    var fisico = 80
    var ether = 80
    var eletrico = 80
    var sombra = 80
    var luz = 80
    var psiquico = 80
    var espiritual = 80

    const priceInput = parseFloat(actualPrice.value);
    const discountInput = parseFloat(discount.value);

    // console.log(priceInput);
    // console.log(discountInput);


    // Complete Formula to find discount
    const x = priceInput * (discount / 100);
    
    // Subtract the discount from the orignal file
    const discountedPrice = priceInput - x;
    // console.log(`Discounted Result: ${discountedPrice}`);
    if(isFinite(discountedPrice)) {
        discountedResult.value = discountedPrice.toFixed(2);

        // Show Reult
        document.getElementById('results').style.display = 'block';

        // Hide Loader
        document.getElementById('loader').style.display = 'none';
        
        //    console.log(`Discounted Result: ${discountedResult}`);
    } else {
        // console.log('Please check your number');
        showError('Please check your numbers');

        
    }

    // e.preventDefault();
}


// Show Error 

function showError(error) {

            // Hide Reult
            document.getElementById('results').style.display = 'none';

            // Hide Loader
            document.getElementById('loader').style.display = 'none';
 
    // Create a div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create a class
    errorDiv.className = 'alert alert-danger';
    // Create textnode and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 sec
    setTimeout(clearError, 3000);
}


// Clear Error Function
function clearError() {
    document.querySelector('.alert').remove();
}
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("show");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

   //modal//
   function openModal(mn){
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null) return;

    modal.style.display = 'block';
}
function closeModall(mn){
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null) return;

    modal.style.display = 'none';
}
