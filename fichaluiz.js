const data = {
    cristal: 500,
    star: 1,
    classe: 4,
    level: 38,
    age: 20,
    sex: 'male',

    life: {
        current: 2647,
        max: 91 * 10 * 4 * 1.05 - 340 - 835,
    },
    sanity: {
        current: 3560,
        max: 89 * 10 * 4 * 1.0,
    },

    weapons: [

    ],
    attributes: [
        {
            type: 'P.Mágico',
            amount: 84 * 1.10,
        },
        {
            type: 'Constituição',
            amount: 83 * 1.10,
        },
        {
            type: 'Destreza',
            amount: 85 * 1.10,
        },
        {
            type: 'Sabedoria',
            amount: 81 * 1.10,
        },
        {
            type: 'Força',
            amount: 79 * 1.10,
        },
        {
            type: 'Inteligência',
            amount: 81 * 1.10,
        },
        {
            type: 'Carisma',
            amount: 79 * 1.10,
        },
        {
            type: 'Sorte',
            amount: 85 * 1.10,
        },
        {
            type: 'Sanidade',
            amount: 80 * 1.10,
        },
    ],
}


data.attributes.map((attribute, index) => {
    addAttribute(attribute, index)
})

$('#cristal').val(data.cristal)
$('#classe').val(data.classe)
$('#level').val(data.level)
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

    if (tresPontos37.style.display === 'none') {
        tresPontos37.style.display = 'inline';
        mostrarMais37.style.display = 'none';
        btnLeiaMais37.innerHTML = 'F.Rashomon';
    } else {
        tresPontos37.style.display = 'none';
        mostrarMais37.style.display = 'inline';
        btnLeiaMais37.innerHTML = 'F.Rashomon';
    }
}

function leiaMais38() {
    const tresPontos38 = document.getElementById('tresPontos38');
    const mostrarMais38 = document.getElementById('mostrarMais38');
    const btnLeiaMais38 = document.getElementById('btnLeiaMais38');

    if (tresPontos38.style.display === 'none') {
        tresPontos38.style.display = 'inline';
        mostrarMais38.style.display = 'none';
        btnLeiaMais38.innerHTML = 'Ananci soul: True god';
    } else {
        tresPontos38.style.display = 'none';
        mostrarMais38.style.display = 'inline';
        btnLeiaMais38.innerHTML = 'Ananci soul: True god';
    }
}
function leiaMais39() {
    const tresPontos39 = document.getElementById('tresPontos39');
    const mostrarMais39 = document.getElementById('mostrarMais39');
    const btnLeiaMais39 = document.getElementById('btnLeiaMais39');

    if (tresPontos39.style.display === 'none') {
        tresPontos39.style.display = 'inline';
        mostrarMais39.style.display = 'none';
        btnLeiaMais39.innerHTML = 'Haniel (fragmento)';
    } else {
        tresPontos39.style.display = 'none';
        mostrarMais39.style.display = 'inline';
        btnLeiaMais39.innerHTML = 'Haniel (fragmento)';
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
function leiaMais39a() {
    const tresPontos39a = document.getElementById('tresPontos39a');
    const mostrarMais39a = document.getElementById('mostrarMais39a');
    const btnLeiaMais39a = document.getElementById('btnLeiaMais39a');

    if (tresPontos39a.style.display === 'none') {
        tresPontos39a.style.display = 'inline';
        mostrarMais39a.style.display = 'none';
        btnLeiaMais39a.innerHTML = 'Verdade absoluta ';
    } else {
        tresPontos39a.style.display = 'none';
        mostrarMais39a.style.display = 'inline';
        btnLeiaMais39a.innerHTML = 'Verdade absoluta ';
    }
}
function leiaMais40a() {
    const tresPontos40a = document.getElementById('tresPontos40a');
    const mostrarMais40a = document.getElementById('mostrarMais40a');
    const btnLeiaMais40a = document.getElementById('btnLeiaMais40a');

    if (tresPontos40a.style.display === 'none') {
        tresPontos40a.style.display = 'inline';
        mostrarMais40a.style.display = 'none';
        btnLeiaMais40a.innerHTML = 'Flagelo de glória ';
    } else {
        tresPontos40a.style.display = 'none';
        mostrarMais40a.style.display = 'inline';
        btnLeiaMais40a.innerHTML = 'Flagelo de glória ';
    }
}
function leiaMais41a() {
    const tresPontos41a = document.getElementById('tresPontos41a');
    const mostrarMais41a = document.getElementById('mostrarMais41a');
    const btnLeiaMais41a = document.getElementById('btnLeiaMais41a');

    if (tresPontos41a.style.display === 'none') {
        tresPontos41a.style.display = 'inline';
        mostrarMais41a.style.display = 'none';
        btnLeiaMais41a.innerHTML = 'Começo atrasado ';
    } else {
        tresPontos41a.style.display = 'none';
        mostrarMais41a.style.display = 'inline';
        btnLeiaMais41a.innerHTML = 'Começo atrasado ';
    }
}
function leiaMais42a() {
    const tresPontos42a = document.getElementById('tresPontos42a');
    const mostrarMais42a = document.getElementById('mostrarMais42a');
    const btnLeiaMais42a = document.getElementById('btnLeiaMais42a');

    if (tresPontos42a.style.display === 'none') {
        tresPontos42a.style.display = 'inline';
        mostrarMais42a.style.display = 'none';
        btnLeiaMais42a.innerHTML = 'Identificação ';
    } else {
        tresPontos42a.style.display = 'none';
        mostrarMais42a.style.display = 'inline';
        btnLeiaMais42a.innerHTML = 'Identificação';
    }
}
function leiaMais43a() {
    const tresPontos43a = document.getElementById('tresPontos43a');
    const mostrarMais43a = document.getElementById('mostrarMais43a');
    const btnLeiaMais43a = document.getElementById('btnLeiaMais43a');

    if (tresPontos43a.style.display === 'none') {
        tresPontos43a.style.display = 'inline';
        mostrarMais43a.style.display = 'none';
        btnLeiaMais43a.innerHTML = 'Onde o coração desejar';
    } else {
        tresPontos43a.style.display = 'none';
        mostrarMais43a.style.display = 'inline';
        btnLeiaMais43a.innerHTML = 'Onde o coração desejar';
    }
}

function leiaMais1b() {
    const tresPontos1b = document.getElementById('tresPontos1b');
    const mostrarMais1b = document.getElementById('mostrarMais1b');
    const btnLeiaMais1b = document.getElementById('btnLeiaMais1b');

    if (tresPontos1b.style.display === 'none') {
        tresPontos1b.style.display = 'inline';
        mostrarMais1b.style.display = 'none';
        btnLeiaMais1b.innerHTML = 'Nightmare Wolfs';
    } else {
        tresPontos1b.style.display = 'none';
        mostrarMais1b.style.display = 'inline';
        btnLeiaMais1b.innerHTML = 'Nightmare Wolfs';
    }
}
function leiaMais2b() {
    const tresPontos2b = document.getElementById('tresPontos2b');
    const mostrarMais2b = document.getElementById('mostrarMais2b');
    const btnLeiaMais2b = document.getElementById('btnLeiaMais2b');

    if (tresPontos2b.style.display === 'none') {
        tresPontos2b.style.display = 'inline';
        mostrarMais2b.style.display = 'none';
        btnLeiaMais2b.innerHTML = 'Negative explosion';
    } else {
        tresPontos2b.style.display = 'none';
        mostrarMais2b.style.display = 'inline';
        btnLeiaMais2b.innerHTML = 'Negative explosion';
    }
}
function leiaMais3b() {
    const tresPontos3b = document.getElementById('tresPontos3b');
    const mostrarMais3b = document.getElementById('mostrarMais3b');
    const btnLeiaMais3b = document.getElementById('btnLeiaMais3b');

    if (tresPontos3b.style.display === 'none') {
        tresPontos3b.style.display = 'inline';
        mostrarMais3b.style.display = 'none';
        btnLeiaMais3b.innerHTML = 'Freeze';
    } else {
        tresPontos3b.style.display = 'none';
        mostrarMais3b.style.display = 'inline';
        btnLeiaMais3b.innerHTML = 'Freeze';
    }
}
function leiaMais4b() {
    const tresPontos4b = document.getElementById('tresPontos4b');
    const mostrarMais4b = document.getElementById('mostrarMais4b');
    const btnLeiaMais4b = document.getElementById('btnLeiaMais4b');

    if (tresPontos4b.style.display === 'none') {
        tresPontos4b.style.display = 'inline';
        mostrarMais4b.style.display = 'none';
        btnLeiaMais4b.innerHTML = 'Armadilha congelante';
    } else {
        tresPontos4b.style.display = 'none';
        mostrarMais4b.style.display = 'inline';
        btnLeiaMais4b.innerHTML = 'Armadilha congelante';
    }
}
function leiaMais5b() {
    const tresPontos5b = document.getElementById('tresPontos5b');
    const mostrarMais5b = document.getElementById('mostrarMais5b');
    const btnLeiaMais5b = document.getElementById('btnLeiaMais5b');

    if (tresPontos5b.style.display === 'none') {
        tresPontos5b.style.display = 'inline';
        mostrarMais5b.style.display = 'none';
        btnLeiaMais5b.innerHTML = 'Blackout';
    } else {
        tresPontos5b.style.display = 'none';
        mostrarMais5b.style.display = 'inline';
        btnLeiaMais5b.innerHTML = 'Blackout';
    }
}
function leiaMais6b() {
    const tresPontos6b = document.getElementById('tresPontos6b');
    const mostrarMais6b = document.getElementById('mostrarMais6b');
    const btnLeiaMais6b = document.getElementById('btnLeiaMais6b');

    if (tresPontos6b.style.display === 'none') {
        tresPontos6b.style.display = 'inline';
        mostrarMais6b.style.display = 'none';
        btnLeiaMais6b.innerHTML = 'Inferno congelante';
    } else {
        tresPontos6b.style.display = 'none';
        mostrarMais6b.style.display = 'inline';
        btnLeiaMais6b.innerHTML = 'Inferno congelante';
    }
}
function leiaMais7b() {
    const tresPontos7b = document.getElementById('tresPontos7b');
    const mostrarMais7b = document.getElementById('mostrarMais7b');
    const btnLeiaMais7b = document.getElementById('btnLeiaMais7b');

    if (tresPontos7b.style.display === 'none') {
        tresPontos7b.style.display = 'inline';
        mostrarMais7b.style.display = 'none';
        btnLeiaMais7b.innerHTML = 'Inverno eterno';
    } else {
        tresPontos7b.style.display = 'none';
        mostrarMais7b.style.display = 'inline';
        btnLeiaMais7b.innerHTML = 'Inverno eterno';
    }
}
function leiaMais8b() {
    const tresPontos8b = document.getElementById('tresPontos8b');
    const mostrarMais8b = document.getElementById('mostrarMais8b');
    const btnLeiaMais8b = document.getElementById('btnLeiaMais8b');

    if (tresPontos8b.style.display === 'none') {
        tresPontos8b.style.display = 'inline';
        mostrarMais8b.style.display = 'none';
        btnLeiaMais8b.innerHTML = 'Bala';
    } else {
        tresPontos8b.style.display = 'none';
        mostrarMais8b.style.display = 'inline';
        btnLeiaMais8b.innerHTML = 'Bala';
    }
}
function leiaMais9b() {
    const tresPontos9b = document.getElementById('tresPontos9b');
    const mostrarMais9b = document.getElementById('mostrarMais9b');
    const btnLeiaMais9b = document.getElementById('btnLeiaMais9b');

    if (tresPontos9b.style.display === 'none') {
        tresPontos9b.style.display = 'inline';
        mostrarMais9b.style.display = 'none';
        btnLeiaMais9b.innerHTML = 'Cero';
    } else {
        tresPontos9b.style.display = 'none';
        mostrarMais9b.style.display = 'inline';
        btnLeiaMais9b.innerHTML = 'Cero';
    }
}
function leiaMais10b() {
    const tresPontos10b = document.getElementById('tresPontos10b');
    const mostrarMais10b = document.getElementById('mostrarMais10b');
    const btnLeiaMais10b = document.getElementById('btnLeiaMais10b');

    if (tresPontos10b.style.display === 'none') {
        tresPontos10b.style.display = 'inline';
        mostrarMais10b.style.display = 'none';
        btnLeiaMais10b.innerHTML = 'Cero oblivion';
    } else {
        tresPontos10b.style.display = 'none';
        mostrarMais10b.style.display = 'inline';
        btnLeiaMais10b.innerHTML = 'Cero oblivion';
    }
}
function leiaMais11b() {
    const tresPontos11b = document.getElementById('tresPontos11b');
    const mostrarMais11b = document.getElementById('mostrarMais11b');
    const btnLeiaMais11b = document.getElementById('btnLeiaMais11b');

    if (tresPontos11b.style.display === 'none') {
        tresPontos11b.style.display = 'inline';
        mostrarMais11b.style.display = 'none';
        btnLeiaMais11b.innerHTML = 'Controle magnético';
    } else {
        tresPontos11b.style.display = 'none';
        mostrarMais11b.style.display = 'inline';
        btnLeiaMais11b.innerHTML = 'Controle magnético';
    }
}
function leiaMais12b() {
    const tresPontos12b = document.getElementById('tresPontos12b');
    const mostrarMais12b = document.getElementById('mostrarMais12b');
    const btnLeiaMais12b = document.getElementById('btnLeiaMais12b');

    if (tresPontos12b.style.display === 'none') {
        tresPontos12b.style.display = 'inline';
        mostrarMais12b.style.display = 'none';
        btnLeiaMais12b.innerHTML = 'Cero ascendente';
    } else {
        tresPontos12b.style.display = 'none';
        mostrarMais12b.style.display = 'inline';
        btnLeiaMais12b.innerHTML = 'Cero ascendente';
    }
}
function leiaMais13b() {
    const tresPontos13b = document.getElementById('tresPontos13b');
    const mostrarMais13b = document.getElementById('mostrarMais13b');
    const btnLeiaMais13b = document.getElementById('btnLeiaMais13b');

    if (tresPontos13b.style.display === 'none') {
        tresPontos13b.style.display = 'inline';
        mostrarMais13b.style.display = 'none';
        btnLeiaMais13b.innerHTML = 'Assopro divino';
    } else {
        tresPontos13b.style.display = 'none';
        mostrarMais13b.style.display = 'inline';
        btnLeiaMais13b.innerHTML = 'Assopro divino';
    }
}
function leiaMais14b() {
    const tresPontos14b = document.getElementById('tresPontos14b');
    const mostrarMais14b = document.getElementById('mostrarMais14b');
    const btnLeiaMais14b = document.getElementById('btnLeiaMais14b');

    if (tresPontos14b.style.display === 'none') {
        tresPontos14b.style.display = 'inline';
        mostrarMais14b.style.display = 'none';
        btnLeiaMais14b.innerHTML = 'Ventos de furacão';
    } else {
        tresPontos14b.style.display = 'none';
        mostrarMais14b.style.display = 'inline';
        btnLeiaMais14b.innerHTML = 'Ventos de furacão';
    }
}
function leiaMais15b() {
    const tresPontos15b = document.getElementById('tresPontos15b');
    const mostrarMais15b = document.getElementById('mostrarMais15b');
    const btnLeiaMais15b = document.getElementById('btnLeiaMais15b');

    if (tresPontos15b.style.display === 'none') {
        tresPontos15b.style.display = 'inline';
        mostrarMais15b.style.display = 'none';
        btnLeiaMais15b.innerHTML = 'Aurora boreal';
    } else {
        tresPontos15b.style.display = 'none';
        mostrarMais15b.style.display = 'inline';
        btnLeiaMais15b.innerHTML = 'Aurora boreal';
    }
}
function leiaMais16b() {
    const tresPontos16b = document.getElementById('tresPontos16b');
    const mostrarMais16b = document.getElementById('mostrarMais16b');
    const btnLeiaMais16b = document.getElementById('btnLeiaMais16b');

    if (tresPontos16b.style.display === 'none') {
        tresPontos16b.style.display = 'inline';
        mostrarMais16b.style.display = 'none';
        btnLeiaMais16b.innerHTML = 'Foice da possessão';
    } else {
        tresPontos16b.style.display = 'none';
        mostrarMais16b.style.display = 'inline';
        btnLeiaMais16b.innerHTML = 'Foice da possessão';
    }
}
function leiaMais17b() {
    const tresPontos17b = document.getElementById('tresPontos17b');
    const mostrarMais17b = document.getElementById('mostrarMais17b');
    const btnLeiaMais17b = document.getElementById('btnLeiaMais17b');

    if (tresPontos17b.style.display === 'none') {
        tresPontos17b.style.display = 'inline';
        mostrarMais17b.style.display = 'none';
        btnLeiaMais17b.innerHTML = 'Cero simbiótico';
    } else {
        tresPontos17b.style.display = 'none';
        mostrarMais17b.style.display = 'inline';
        btnLeiaMais17b.innerHTML = 'Cero simbiótico';
    }
}
function leiaMais18b() {
    const tresPontos18b = document.getElementById('tresPontos18b');
    const mostrarMais18b = document.getElementById('mostrarMais18b');
    const btnLeiaMais18b = document.getElementById('btnLeiaMais18b');

    if (tresPontos18b.style.display === 'none') {
        tresPontos18b.style.display = 'inline';
        mostrarMais18b.style.display = 'none';
        btnLeiaMais18b.innerHTML = 'Controle simbiótico';
    } else {
        tresPontos18b.style.display = 'none';
        mostrarMais18b.style.display = 'inline';
        btnLeiaMais18b.innerHTML = 'Controle simbiótico';
    }
}
function leiaMais19b() {
    const tresPontos19b = document.getElementById('tresPontos19b');
    const mostrarMais19b = document.getElementById('mostrarMais19b');
    const btnLeiaMais19b = document.getElementById('btnLeiaMais19b');

    if (tresPontos19b.style.display === 'none') {
        tresPontos19b.style.display = 'inline';
        mostrarMais19b.style.display = 'none';
        btnLeiaMais19b.innerHTML = 'Presa do pesadelo';
    } else {
        tresPontos19b.style.display = 'none';
        mostrarMais19b.style.display = 'inline';
        btnLeiaMais19b.innerHTML = 'Presa do pesadelo';
    }
}
function leiaMais20b() {
    const tresPontos20b = document.getElementById('tresPontos20b');
    const mostrarMais20b = document.getElementById('mostrarMais20b');
    const btnLeiaMais20b = document.getElementById('btnLeiaMais20b');

    if (tresPontos20b.style.display === 'none') {
        tresPontos20b.style.display = 'inline';
        mostrarMais20b.style.display = 'none';
        btnLeiaMais20b.innerHTML = 'Amor';
    } else {
        tresPontos20b.style.display = 'none';
        mostrarMais20b.style.display = 'inline';
        btnLeiaMais20b.innerHTML = 'Amor';
    }
}
function leiaMais21b() {
    const tresPontos21b = document.getElementById('tresPontos21b');
    const mostrarMais21b = document.getElementById('mostrarMais21b');
    const btnLeiaMais21b = document.getElementById('btnLeiaMais21b');

    if (tresPontos21b.style.display === 'none') {
        tresPontos21b.style.display = 'inline';
        mostrarMais21b.style.display = 'none';
        btnLeiaMais21b.innerHTML = 'Gran rey cero';
    } else {
        tresPontos21b.style.display = 'none';
        mostrarMais21b.style.display = 'inline';
        btnLeiaMais21b.innerHTML = 'Gran rey cero';
    }
}
function leiaMais22b() {
    const tresPontos22b = document.getElementById('tresPontos22b');
    const mostrarMais22b = document.getElementById('mostrarMais22b');
    const btnLeiaMais22b = document.getElementById('btnLeiaMais22b');

    if (tresPontos22b.style.display === 'none') {
        tresPontos22b.style.display = 'inline';
        mostrarMais22b.style.display = 'none';
        btnLeiaMais22b.innerHTML = 'Liberação de Vento: Palma Vendaval';
    } else {
        tresPontos22b.style.display = 'none';
        mostrarMais22b.style.display = 'inline';
        btnLeiaMais22b.innerHTML = 'Liberação de Vento: Palma Vendaval';
    }
}
function leiaMais23b() {
    const tresPontos23b = document.getElementById('tresPontos23b');
    const mostrarMais23b = document.getElementById('mostrarMais23b');
    const btnLeiaMais23b = document.getElementById('btnLeiaMais23b');

    if (tresPontos23b.style.display === 'none') {
        tresPontos23b.style.display = 'inline';
        mostrarMais23b.style.display = 'none';
        btnLeiaMais23b.innerHTML = 'Fissão de mandibula';
    } else {
        tresPontos23b.style.display = 'none';
        mostrarMais23b.style.display = 'inline';
        btnLeiaMais23b.innerHTML = 'Fissão de mandibula';
    }
}
function leiaMais24b() {
    const tresPontos24b = document.getElementById('tresPontos24b');
    const mostrarMais24b = document.getElementById('mostrarMais24b');
    const btnLeiaMais24b = document.getElementById('btnLeiaMais24b');

    if (tresPontos24b.style.display === 'none') {
        tresPontos24b.style.display = 'inline';
        mostrarMais24b.style.display = 'none';
        btnLeiaMais24b.innerHTML = 'Rinnegan';
    } else {
        tresPontos24b.style.display = 'none';
        mostrarMais24b.style.display = 'inline';
        btnLeiaMais24b.innerHTML = 'Rinnegan';
    }
}
function leiaMais25b() {
    const tresPontos25b = document.getElementById('tresPontos25b');
    const mostrarMais25b = document.getElementById('mostrarMais25b');
    const btnLeiaMais25b = document.getElementById('btnLeiaMais25b');

    if (tresPontos25b.style.display === 'none') {
        tresPontos25b.style.display = 'inline';
        mostrarMais25b.style.display = 'none';
        btnLeiaMais25b.innerHTML = 'Garra de la pantera';
    } else {
        tresPontos25b.style.display = 'none';
        mostrarMais25b.style.display = 'inline';
        btnLeiaMais25b.innerHTML = 'Garra de la pantera';
    }
}
function leiaMais26b() {
    const tresPontos26b = document.getElementById('tresPontos26b');
    const mostrarMais26b = document.getElementById('mostrarMais26b');
    const btnLeiaMais26b = document.getElementById('btnLeiaMais26b');

    if (tresPontos26b.style.display === 'none') {
        tresPontos26b.style.display = 'inline';
        mostrarMais26b.style.display = 'none';
        btnLeiaMais26b.innerHTML = 'Desgarron';
    } else {
        tresPontos26b.style.display = 'none';
        mostrarMais26b.style.display = 'inline';
        btnLeiaMais26b.innerHTML = 'Desgarron';
    }
}

function leiaMais27b() {
    const tresPontos27b = document.getElementById('tresPontos27b');
    const mostrarMais27b = document.getElementById('mostrarMais27b');
    const btnLeiaMais27b = document.getElementById('btnLeiaMais27b');

    if (tresPontos27b.style.display === 'none') {
        tresPontos27b.style.display = 'inline';
        mostrarMais27b.style.display = 'none';
        btnLeiaMais27b.innerHTML = 'Bomba negativa';
    } else {
        tresPontos27b.style.display = 'none';
        mostrarMais27b.style.display = 'inline';
        btnLeiaMais27b.innerHTML = 'Bomba negativa';
    }
}
function leiaMais28b() {
    const tresPontos28b = document.getElementById('tresPontos28b');
    const mostrarMais28b = document.getElementById('mostrarMais28b');
    const btnLeiaMais28b = document.getElementById('btnLeiaMais28b');

    if (tresPontos28b.style.display === 'none') {
        tresPontos28b.style.display = 'inline';
        mostrarMais28b.style.display = 'none';
        btnLeiaMais28b.innerHTML = 'Garras das trevas';
    } else {
        tresPontos28b.style.display = 'none';
        mostrarMais28b.style.display = 'inline';
        btnLeiaMais28b.innerHTML = 'Garras das trevas';
    }
}
function leiaMais29b() {
    const tresPontos29b = document.getElementById('tresPontos29b');
    const mostrarMais29b = document.getElementById('mostrarMais29b');
    const btnLeiaMais29b = document.getElementById('btnLeiaMais29b');

    if (tresPontos29b.style.display === 'none') {
        tresPontos29b.style.display = 'inline';
        mostrarMais29b.style.display = 'none';
        btnLeiaMais29b.innerHTML = 'Olhar do vazio';
    } else {
        tresPontos29b.style.display = 'none';
        mostrarMais29b.style.display = 'inline';
        btnLeiaMais29b.innerHTML = 'Olhar do vazio';
    }
}
function leiaMais30b() {
    const tresPontos30b = document.getElementById('tresPontos30b');
    const mostrarMais30b = document.getElementById('mostrarMais30b');
    const btnLeiaMais30b = document.getElementById('btnLeiaMais30b');

    if (tresPontos30b.style.display === 'none') {
        tresPontos30b.style.display = 'inline';
        mostrarMais30b.style.display = 'none';
        btnLeiaMais30b.innerHTML = 'Phantom arise';
    } else {
        tresPontos30b.style.display = 'none';
        mostrarMais30b.style.display = 'inline';
        btnLeiaMais30b.innerHTML = 'Phantom arise';
    }
}
function leiaMais31b() {
    const tresPontos31b = document.getElementById('tresPontos31b');
    const mostrarMais31b = document.getElementById('mostrarMais31b');
    const btnLeiaMais31b = document.getElementById('btnLeiaMais31b');

    if (tresPontos31b.style.display === 'none') {
        tresPontos31b.style.display = 'inline';
        mostrarMais31b.style.display = 'none';
        btnLeiaMais31b.innerHTML = 'Supa netherius bomb';
    } else {
        tresPontos31b.style.display = 'none';
        mostrarMais31b.style.display = 'inline';
        btnLeiaMais31b.innerHTML = 'Supa netherius bomb';
    }
}
function leiaMais32b() {
    const tresPontos32b = document.getElementById('tresPontos32b');
    const mostrarMais32b = document.getElementById('mostrarMais32b');
    const btnLeiaMais32b = document.getElementById('btnLeiaMais32b');

    if (tresPontos32b.style.display === 'none') {
        tresPontos32b.style.display = 'inline';
        mostrarMais32b.style.display = 'none';
        btnLeiaMais32b.innerHTML = 'Netherius phantom flame';
    } else {
        tresPontos32b.style.display = 'none';
        mostrarMais32b.style.display = 'inline';
        btnLeiaMais32b.innerHTML = 'Netherius phantom flame';
    }
}
function leiaMais33b() {
    const tresPontos33b = document.getElementById('tresPontos33b');
    const mostrarMais33b = document.getElementById('mostrarMais33b');
    const btnLeiaMais33b = document.getElementById('btnLeiaMais33b');

    if (tresPontos33b.style.display === 'none') {
        tresPontos33b.style.display = 'inline';
        mostrarMais33b.style.display = 'none';
        btnLeiaMais33b.innerHTML = 'Vendaval de garras';
    } else {
        tresPontos33b.style.display = 'none';
        mostrarMais33b.style.display = 'inline';
        btnLeiaMais33b.innerHTML = 'Vendaval de garras';
    }
}
function leiaMais34b() {
    const tresPontos34b = document.getElementById('tresPontos34b');
    const mostrarMais34b = document.getElementById('mostrarMais34b');
    const btnLeiaMais34b = document.getElementById('btnLeiaMais34b');

    if (tresPontos34b.style.display === 'none') {
        tresPontos34b.style.display = 'inline';
        mostrarMais34b.style.display = 'none';
        btnLeiaMais34b.innerHTML = 'Agouro infernal';
    } else {
        tresPontos34b.style.display = 'none';
        mostrarMais34b.style.display = 'inline';
        btnLeiaMais34b.innerHTML = 'Agouro infernal';
    }
}
function leiaMais35b() {
    const tresPontos35b = document.getElementById('tresPontos35b');
    const mostrarMais35b = document.getElementById('mostrarMais35b');
    const btnLeiaMais35b = document.getElementById('btnLeiaMais35b');

    if (tresPontos35b.style.display === 'none') {
        tresPontos35b.style.display = 'inline';
        mostrarMais35b.style.display = 'none';
        btnLeiaMais35b.innerHTML = 'Sorte reversa';
    } else {
        tresPontos35b.style.display = 'none';
        mostrarMais35b.style.display = 'inline';
        btnLeiaMais35b.innerHTML = 'Sorte reversa';
    }
}
function leiaMais36b() {
    const tresPontos36b = document.getElementById('tresPontos36b');
    const mostrarMais36b = document.getElementById('mostrarMais36b');
    const btnLeiaMais36b = document.getElementById('btnLeiaMais36b');

    if (tresPontos36b.style.display === 'none') {
        tresPontos36b.style.display = 'inline';
        mostrarMais36b.style.display = 'none';
        btnLeiaMais36b.innerHTML = 'Fukuma Mizushi';
    } else {
        tresPontos36b.style.display = 'none';
        mostrarMais36b.style.display = 'inline';
        btnLeiaMais36b.innerHTML = 'Fukuma Mizushi';
    }
}
function leiaMais38b() {
    const tresPontos38b = document.getElementById('tresPontos38b');
    const mostrarMais38b = document.getElementById('mostrarMais38b');
    const btnLeiaMais38b = document.getElementById('btnLeiaMais38b');

    if (tresPontos38b.style.display === 'none') {
        tresPontos38b.style.display = 'inline';
        mostrarMais38b.style.display = 'none';
        btnLeiaMais38b.innerHTML = 'Laser ';
    } else {
        tresPontos38b.style.display = 'none';
        mostrarMais38b.style.display = 'inline';
        btnLeiaMais38b.innerHTML = 'Laser';
    }
}
function leiaMais37b() {
    const tresPontos37b = document.getElementById('tresPontos37b');
    const mostrarMais37b = document.getElementById('mostrarMais37b');
    const btnLeiaMais37b = document.getElementById('btnLeiaMais37b');

    if (tresPontos37b.style.display === 'none') {
        tresPontos37b.style.display = 'inline';
        mostrarMais37b.style.display = 'none';
        btnLeiaMais37b.innerHTML = 'Estaca ocular';
    } else {
        tresPontos37b.style.display = 'none';
        mostrarMais37b.style.display = 'inline';
        btnLeiaMais37b.innerHTML = 'Estaca ocular';
    }
}
function leiaMais39b() {
    const tresPontos39b = document.getElementById('tresPontos39b');
    const mostrarMais39b = document.getElementById('mostrarMais39b');
    const btnLeiaMais39b = document.getElementById('btnLeiaMais39b');

    if (tresPontos39b.style.display === 'none') {
        tresPontos39b.style.display = 'inline';
        mostrarMais39b.style.display = 'none';
        btnLeiaMais39b.innerHTML = 'Spectres noctis insomnes';
    } else {
        tresPontos39b.style.display = 'none';
        mostrarMais39b.style.display = 'inline';
        btnLeiaMais39b.innerHTML = 'Spectres noctis insomnes';
    }
}
function leiaMais40b() {
    const tresPontos40b = document.getElementById('tresPontos40b');
    const mostrarMais40b = document.getElementById('mostrarMais40b');
    const btnLeiaMais40b = document.getElementById('btnLeiaMais40b');

    if (tresPontos40b.style.display === 'none') {
        tresPontos40b.style.display = 'inline';
        mostrarMais40b.style.display = 'none';
        btnLeiaMais40b.innerHTML = 'Volo spectris ';
    } else {
        tresPontos40b.style.display = 'none';
        mostrarMais40b.style.display = 'inline';
        btnLeiaMais40b.innerHTML = 'Volo spectris';
    }
}
function leiaMais41b() {
    const tresPontos41b = document.getElementById('tresPontos41b');
    const mostrarMais41b = document.getElementById('mostrarMais41b');
    const btnLeiaMais41b = document.getElementById('btnLeiaMais41b');

    if (tresPontos41b.style.display === 'none') {
        tresPontos41b.style.display = 'inline';
        mostrarMais41b.style.display = 'none';
        btnLeiaMais41b.innerHTML = 'Crepúsculo';
    } else {
        tresPontos41b.style.display = 'none';
        mostrarMais41b.style.display = 'inline';
        btnLeiaMais41b.innerHTML = 'Crepúsculo';
    }
}
function leiaMais42b() {
    const tresPontos42b = document.getElementById('tresPontos42b');
    const mostrarMais42b = document.getElementById('mostrarMais42b');
    const btnLeiaMais42b = document.getElementById('btnLeiaMais42b');

    if (tresPontos42b.style.display === 'none') {
        tresPontos42b.style.display = 'inline';
        mostrarMais42b.style.display = 'none';
        btnLeiaMais42b.innerHTML = 'Armadura espectral';
    } else {
        tresPontos42b.style.display = 'none';
        mostrarMais42b.style.display = 'inline';
        btnLeiaMais42b.innerHTML = 'Armadura espectral';
    }
}
function leiaMais43b() {
    const tresPontos43b = document.getElementById('tresPontos43b');
    const mostrarMais43b = document.getElementById('mostrarMais43b');
    const btnLeiaMais43b = document.getElementById('btnLeiaMais43b');

    if (tresPontos43b.style.display === 'none') {
        tresPontos43b.style.display = 'inline';
        mostrarMais43b.style.display = 'none';
        btnLeiaMais43b.innerHTML = 'Quoth e Roäc';
    } else {
        tresPontos43b.style.display = 'none';
        mostrarMais43b.style.display = 'inline';
        btnLeiaMais43b.innerHTML = 'Quoth e Roäc';
    }
}
function leiaMais44b() {
    const tresPontos44b = document.getElementById('tresPontos44b');
    const mostrarMais44b = document.getElementById('mostrarMais44b');
    const btnLeiaMais44b = document.getElementById('btnLeiaMais44b');

    if (tresPontos44b.style.display === 'none') {
        tresPontos44b.style.display = 'inline';
        mostrarMais44b.style.display = 'none';
        btnLeiaMais44b.innerHTML = 'Golpe de misericórdia';
    } else {
        tresPontos44b.style.display = 'none';
        mostrarMais44b.style.display = 'inline';
        btnLeiaMais44b.innerHTML = 'Golpe de misericórdia';
    }
}
function leiaMais45b() {
    const tresPontos45b = document.getElementById('tresPontos45b');
    const mostrarMais45b = document.getElementById('mostrarMais45b');
    const btnLeiaMais45b = document.getElementById('btnLeiaMais45b');

    if (tresPontos45b.style.display === 'none') {
        tresPontos45b.style.display = 'inline';
        mostrarMais45b.style.display = 'none';
        btnLeiaMais45b.innerHTML = 'Hirodora';
    } else {
        tresPontos45b.style.display = 'none';
        mostrarMais45b.style.display = 'inline';
        btnLeiaMais45b.innerHTML = 'Hirodora';
    }
}
function leiaMais46b() {
    const tresPontos46b = document.getElementById('tresPontos46b');
    const mostrarMais46b = document.getElementById('mostrarMais46b');
    const btnLeiaMais46b = document.getElementById('btnLeiaMais46b');

    if (tresPontos46b.style.display === 'none') {
        tresPontos46b.style.display = 'inline';
        mostrarMais46b.style.display = 'none';
        btnLeiaMais46b.innerHTML = 'Luz de la luna';
    } else {
        tresPontos46b.style.display = 'none';
        mostrarMais46b.style.display = 'inline';
        btnLeiaMais46b.innerHTML = 'Luz de la luna';
    }
}
function leiaMais47b() {
    const tresPontos47b = document.getElementById('tresPontos47b');
    const mostrarMais47b = document.getElementById('mostrarMais47b');
    const btnLeiaMais47b = document.getElementById('btnLeiaMais47b');

    if (tresPontos47b.style.display === 'none') {
        tresPontos47b.style.display = 'inline';
        mostrarMais47b.style.display = 'none';
        btnLeiaMais47b.innerHTML = 'Lanza del relampago';
    } else {
        tresPontos47b.style.display = 'none';
        mostrarMais47b.style.display = 'inline';
        btnLeiaMais47b.innerHTML = 'Lanza del relampago';
    }
}
function leiaMais48b() {
    const tresPontos48b = document.getElementById('tresPontos48b');
    const mostrarMais48b = document.getElementById('mostrarMais48b');
    const btnLeiaMais48b = document.getElementById('btnLeiaMais48b');

    if (tresPontos48b.style.display === 'none') {
        tresPontos48b.style.display = 'inline';
        mostrarMais48b.style.display = 'none';
        btnLeiaMais48b.innerHTML = 'Magia negra do caos';
    } else {
        tresPontos48b.style.display = 'none';
        mostrarMais48b.style.display = 'inline';
        btnLeiaMais48b.innerHTML = 'Magia negra do caos';
    }
}
function leiaMais49b() {
    const tresPontos49b = document.getElementById('tresPontos49b');
    const mostrarMais49b = document.getElementById('mostrarMais49b');
    const btnLeiaMais49b = document.getElementById('btnLeiaMais49b');

    if (tresPontos49b.style.display === 'none') {
        tresPontos49b.style.display = 'inline';
        mostrarMais49b.style.display = 'none';
        btnLeiaMais49b.innerHTML = 'Chaos zone';
    } else {
        tresPontos49b.style.display = 'none';
        mostrarMais49b.style.display = 'inline';
        btnLeiaMais49b.innerHTML = 'Chaos zone';
    }
}
function leiaMais50b() {
    const tresPontos50b = document.getElementById('tresPontos50b');
    const mostrarMais50b = document.getElementById('mostrarMais50b');
    const btnLeiaMais50b = document.getElementById('btnLeiaMais50b');

    if (tresPontos50b.style.display === 'none') {
        tresPontos50b.style.display = 'inline';
        mostrarMais50b.style.display = 'none';
        btnLeiaMais50b.innerHTML = 'Magia negra';
    } else {
        tresPontos50b.style.display = 'none';
        mostrarMais50b.style.display = 'inline';
        btnLeiaMais50b.innerHTML = 'Magia negra';
    }
}
function leiaMais51b() {
    const tresPontos51b = document.getElementById('tresPontos51b');
    const mostrarMais51b = document.getElementById('mostrarMais51b');
    const btnLeiaMais51b = document.getElementById('btnLeiaMais51b');

    if (tresPontos51b.style.display === 'none') {
        tresPontos51b.style.display = 'inline';
        mostrarMais51b.style.display = 'none';
        btnLeiaMais51b.innerHTML = 'Onda de fusão';
    } else {
        tresPontos51b.style.display = 'none';
        mostrarMais51b.style.display = 'inline';
        btnLeiaMais51b.innerHTML = 'Onda de fusão';
    }
}
function leiaMais52b() {
    const tresPontos52b = document.getElementById('tresPontos52b');
    const mostrarMais52b = document.getElementById('mostrarMais52b');
    const btnLeiaMais52b = document.getElementById('btnLeiaMais52b');

    if (tresPontos52b.style.display === 'none') {
        tresPontos52b.style.display = 'inline';
        mostrarMais52b.style.display = 'none';
        btnLeiaMais52b.innerHTML = 'Estilo fogo: jutsu da chama obscura: ';
    } else {
        tresPontos52b.style.display = 'none';
        mostrarMais52b.style.display = 'inline';
        btnLeiaMais52b.innerHTML = 'Estilo fogo: jutsu da chama obscura: ';
    }
}
function leiaMais53b() {
    const tresPontos53b = document.getElementById('tresPontos53b');
    const mostrarMais53b = document.getElementById('mostrarMais53b');
    const btnLeiaMais53b = document.getElementById('btnLeiaMais53b');

    if (tresPontos53b.style.display === 'none') {
        tresPontos53b.style.display = 'inline';
        mostrarMais53b.style.display = 'none';
        btnLeiaMais53b.innerHTML = 'Cero oscuras';
    } else {
        tresPontos53b.style.display = 'none';
        mostrarMais53b.style.display = 'inline';
        btnLeiaMais53b.innerHTML = 'Cero oscuras';
    }
}
function leiaMais54b() {
    const tresPontos54b = document.getElementById('tresPontos54b');
    const mostrarMais54b = document.getElementById('mostrarMais54b');
    const btnLeiaMais54b = document.getElementById('btnLeiaMais54b');

    if (tresPontos54b.style.display === 'none') {
        tresPontos54b.style.display = 'inline';
        mostrarMais54b.style.display = 'none';
        btnLeiaMais54b.innerHTML = 'Blade cero';
    } else {
        tresPontos54b.style.display = 'none';
        mostrarMais54b.style.display = 'inline';
        btnLeiaMais54b.innerHTML = 'Blade cero';
    }
}
function leiaMais55b() {
    const tresPontos55b = document.getElementById('tresPontos55b');
    const mostrarMais55b = document.getElementById('mostrarMais55b');
    const btnLeiaMais55b = document.getElementById('btnLeiaMais55b');

    if (tresPontos55b.style.display === 'none') {
        tresPontos55b.style.display = 'inline';
        mostrarMais55b.style.display = 'none';
        btnLeiaMais55b.innerHTML = 'Estilo fogo: Jutsu bola de fogo';
    } else {
        tresPontos55b.style.display = 'none';
        mostrarMais55b.style.display = 'inline';
        btnLeiaMais55b.innerHTML = 'Estilo fogo: Jutsu bola de fogo';
    }
}
function leiaMais56b() {
    const tresPontos56b = document.getElementById('tresPontos56b');
    const mostrarMais56b = document.getElementById('mostrarMais56b');
    const btnLeiaMais56b = document.getElementById('btnLeiaMais56b');

    if (tresPontos56b.style.display === 'none') {
        tresPontos56b.style.display = 'inline';
        mostrarMais56b.style.display = 'none';
        btnLeiaMais56b.innerHTML = 'Chama do desespero';
    } else {
        tresPontos56b.style.display = 'none';
        mostrarMais56b.style.display = 'inline';
        btnLeiaMais56b.innerHTML = 'Chama do desespero';
    }
}
function leiaMais57b() {
    const tresPontos57b = document.getElementById('tresPontos57b');
    const mostrarMais57b = document.getElementById('mostrarMais57b');
    const btnLeiaMais57b = document.getElementById('btnLeiaMais57b');

    if (tresPontos57b.style.display === 'none') {
        tresPontos57b.style.display = 'inline';
        mostrarMais57b.style.display = 'none';
        btnLeiaMais57b.innerHTML = 'Amaterasu';
    } else {
        tresPontos57b.style.display = 'none';
        mostrarMais57b.style.display = 'inline';
        btnLeiaMais57b.innerHTML = 'Amaterasu';
    }
}
function leiaMais58b() {
    const tresPontos58b = document.getElementById('tresPontos58b');
    const mostrarMais58b = document.getElementById('mostrarMais58b');
    const btnLeiaMais58b = document.getElementById('btnLeiaMais58b');

    if (tresPontos58b.style.display === 'none') {
        tresPontos58b.style.display = 'inline';
        mostrarMais58b.style.display = 'none';
        btnLeiaMais58b.innerHTML = 'Tsukuyomi';
    } else {
        tresPontos58b.style.display = 'none';
        mostrarMais58b.style.display = 'inline';
        btnLeiaMais58b.innerHTML = 'Tsukuyomi';
    }
}
function leiaMais59b() {
    const tresPontos59b = document.getElementById('tresPontos59b');
    const mostrarMais59b = document.getElementById('mostrarMais59b');
    const btnLeiaMais59b = document.getElementById('btnLeiaMais59b');

    if (tresPontos59b.style.display === 'none') {
        tresPontos59b.style.display = 'inline';
        mostrarMais59b.style.display = 'none';
        btnLeiaMais59b.innerHTML = 'susanoo';
    } else {
        tresPontos59b.style.display = 'none';
        mostrarMais59b.style.display = 'inline';
        btnLeiaMais59b.innerHTML = 'susanoo';
    }
}
function leiaMais60b() {
    const tresPontos60b = document.getElementById('tresPontos60b');
    const mostrarMais60b = document.getElementById('mostrarMais60b');
    const btnLeiaMais60b = document.getElementById('btnLeiaMais60b');

    if (tresPontos60b.style.display === 'none') {
        tresPontos60b.style.display = 'inline';
        mostrarMais60b.style.display = 'none';
        btnLeiaMais60b.innerHTML = 'Ola azul';
    } else {
        tresPontos60b.style.display = 'none';
        mostrarMais60b.style.display = 'inline';
        btnLeiaMais60b.innerHTML = 'Ola azul';
    }
}
function leiaMais61b() {
    const tresPontos61b = document.getElementById('tresPontos61b');
    const mostrarMais61b = document.getElementById('mostrarMais61b');
    const btnLeiaMais61b = document.getElementById('btnLeiaMais61b');

    if (tresPontos61b.style.display === 'none') {
        tresPontos61b.style.display = 'inline';
        mostrarMais61b.style.display = 'none';
        btnLeiaMais61b.innerHTML = 'Cascada';
    } else {
        tresPontos61b.style.display = 'none';
        mostrarMais61b.style.display = 'inline';
        btnLeiaMais61b.innerHTML = 'Cascada';
    }
}
function leiaMais62b() {
    const tresPontos62b = document.getElementById('tresPontos62b');
    const mostrarMais62b = document.getElementById('mostrarMais62b');
    const btnLeiaMais62b = document.getElementById('btnLeiaMais62b');

    if (tresPontos62b.style.display === 'none') {
        tresPontos62b.style.display = 'inline';
        mostrarMais62b.style.display = 'none';
        btnLeiaMais62b.innerHTML = 'la gota';
    } else {
        tresPontos62b.style.display = 'none';
        mostrarMais62b.style.display = 'inline';
        btnLeiaMais62b.innerHTML = 'la gota';
    }
}
function leiaMais63b() {
    const tresPontos63b = document.getElementById('tresPontos63b');
    const mostrarMais63b = document.getElementById('mostrarMais63b');
    const btnLeiaMais63b = document.getElementById('btnLeiaMais63b');

    if (tresPontos63b.style.display === 'none') {
        tresPontos63b.style.display = 'inline';
        mostrarMais63b.style.display = 'none';
        btnLeiaMais63b.innerHTML = 'Cero definitivo';
    } else {
        tresPontos63b.style.display = 'none';
        mostrarMais63b.style.display = 'inline';
        btnLeiaMais63b.innerHTML = 'Cero definitivo';
    }
}
function leiaMais64b() {
    const tresPontos64b = document.getElementById('tresPontos64b');
    const mostrarMais64b = document.getElementById('mostrarMais64b');
    const btnLeiaMais64b = document.getElementById('btnLeiaMais64b');

    if (tresPontos64b.style.display === 'none') {
        tresPontos64b.style.display = 'inline';
        mostrarMais64b.style.display = 'none';
        btnLeiaMais64b.innerHTML = 'Avada kedavra';
    } else {
        tresPontos64b.style.display = 'none';
        mostrarMais64b.style.display = 'inline';
        btnLeiaMais64b.innerHTML = 'Avada kedavra';
    }
}
function leiaMais65b() {
    const tresPontos65b = document.getElementById('tresPontos65b');
    const mostrarMais65b = document.getElementById('mostrarMais65b');
    const btnLeiaMais65b = document.getElementById('btnLeiaMais65b');

    if (tresPontos65b.style.display === 'none') {
        tresPontos65b.style.display = 'inline';
        mostrarMais65b.style.display = 'none';
        btnLeiaMais65b.innerHTML = 'Gigantic omegastorm';
    } else {
        tresPontos65b.style.display = 'none';
        mostrarMais65b.style.display = 'inline';
        btnLeiaMais65b.innerHTML = 'Gigantic omegastorm';
    }
}
function leiaMais66b() {
    const tresPontos66b = document.getElementById('tresPontos66b');
    const mostrarMais66b = document.getElementById('mostrarMais66b');
    const btnLeiaMais66b = document.getElementById('btnLeiaMais66b');

    if (tresPontos66b.style.display === 'none') {
        tresPontos66b.style.display = 'inline';
        mostrarMais66b.style.display = 'none';
        btnLeiaMais66b.innerHTML = 'Gigantic cluster';
    } else {
        tresPontos66b.style.display = 'none';
        mostrarMais66b.style.display = 'inline';
        btnLeiaMais66b.innerHTML = 'Gigantic cluster';
    }
}
function leiaMais67b() {
    const tresPontos67b = document.getElementById('tresPontos67b');
    const mostrarMais67b = document.getElementById('mostrarMais67b');
    const btnLeiaMais67b = document.getElementById('btnLeiaMais67b');

    if (tresPontos67b.style.display === 'none') {
        tresPontos67b.style.display = 'inline';
        mostrarMais67b.style.display = 'none';
        btnLeiaMais67b.innerHTML = 'Planet crsusher';
    } else {
        tresPontos67b.style.display = 'none';
        mostrarMais67b.style.display = 'inline';
        btnLeiaMais67b.innerHTML = 'Planet crsusher';
    }
}

function leiaMais68b() {
    const tresPontos68b = document.getElementById('tresPontos68b');
    const mostrarMais68b = document.getElementById('mostrarMais68b');
    const btnLeiaMais68b = document.getElementById('btnLeiaMais68b');

    if (tresPontos68b.style.display === 'none') {
        tresPontos68b.style.display = 'inline';
        mostrarMais68b.style.display = 'none';
        btnLeiaMais68b.innerHTML = 'Omega blaster';
    } else {
        tresPontos68b.style.display = 'none';
        mostrarMais68b.style.display = 'inline';
        btnLeiaMais68b.innerHTML = 'Omega blaster';
    }
}
function leiaMais69b() {
    const tresPontos69b = document.getElementById('tresPontos69b');
    const mostrarMais69b = document.getElementById('mostrarMais69b');
    const btnLeiaMais69b = document.getElementById('btnLeiaMais69b');

    if (tresPontos69b.style.display === 'none') {
        tresPontos69b.style.display = 'inline';
        mostrarMais69b.style.display = 'none';
        btnLeiaMais69b.innerHTML = 'Vetorização: cobra';
    } else {
        tresPontos69b.style.display = 'none';
        mostrarMais69b.style.display = 'inline';
        btnLeiaMais69b.innerHTML = 'Vetorização: cobra';
    }
}
function leiaMais70b() {
    const tresPontos70b = document.getElementById('tresPontos70b');
    const mostrarMais70b = document.getElementById('mostrarMais70b');
    const btnLeiaMais70b = document.getElementById('btnLeiaMais70b');

    if (tresPontos70b.style.display === 'none') {
        tresPontos70b.style.display = 'inline';
        mostrarMais70b.style.display = 'none';
        btnLeiaMais70b.innerHTML = 'Vetorização: mimetização';
    } else {
        tresPontos70b.style.display = 'none';
        mostrarMais70b.style.display = 'inline';
        btnLeiaMais70b.innerHTML = 'Vetorização: mimetização';
    }
}
function leiaMais71b() {
    const tresPontos71b = document.getElementById('tresPontos71b');
    const mostrarMais71b = document.getElementById('mostrarMais71b');
    const btnLeiaMais71b = document.getElementById('btnLeiaMais71b');

    if (tresPontos71b.style.display === 'none') {
        tresPontos71b.style.display = 'inline';
        mostrarMais71b.style.display = 'none';
        btnLeiaMais71b.innerHTML = 'Vetorização: sentido';
    } else {
        tresPontos71b.style.display = 'none';
        mostrarMais71b.style.display = 'inline';
        btnLeiaMais71b.innerHTML = 'Vetorização: sentido';
    }
}
function leiaMais72b() {
    const tresPontos72b = document.getElementById('tresPontos72b');
    const mostrarMais72b = document.getElementById('mostrarMais72b');
    const btnLeiaMais72b = document.getElementById('btnLeiaMais72b');

    if (tresPontos72b.style.display === 'none') {
        tresPontos72b.style.display = 'inline';
        mostrarMais72b.style.display = 'none';
        btnLeiaMais72b.innerHTML = 'Vetorização: espada';
    } else {
        tresPontos72b.style.display = 'none';
        mostrarMais72b.style.display = 'inline';
        btnLeiaMais72b.innerHTML = 'Vetorização: espada';
    }
}
function leiaMais73b() {
    const tresPontos73b = document.getElementById('tresPontos73b');
    const mostrarMais73b = document.getElementById('mostrarMais73b');
    const btnLeiaMais73b = document.getElementById('btnLeiaMais73b');

    if (tresPontos73b.style.display === 'none') {
        tresPontos73b.style.display = 'inline';
        mostrarMais73b.style.display = 'none';
        btnLeiaMais73b.innerHTML = 'Vetorização: Expulsão de sentidos';
    } else {
        tresPontos73b.style.display = 'none';
        mostrarMais73b.style.display = 'inline';
        btnLeiaMais73b.innerHTML = 'Vetorização: Expulsão de sentidos';
    }
}
function leiaMais74b() {
    const tresPontos74b = document.getElementById('tresPontos74b');
    const mostrarMais74b = document.getElementById('mostrarMais74b');
    const btnLeiaMais74b = document.getElementById('btnLeiaMais74b');

    if (tresPontos74b.style.display === 'none') {
        tresPontos74b.style.display = 'inline';
        mostrarMais74b.style.display = 'none';
        btnLeiaMais74b.innerHTML = 'Vetorização: Escudo';
    } else {
        tresPontos74b.style.display = 'none';
        mostrarMais74b.style.display = 'inline';
        btnLeiaMais74b.innerHTML = 'Vetorização: Escudo';
    }
}
function leiaMais75b() {
    const tresPontos75b = document.getElementById('tresPontos75b');
    const mostrarMais75b = document.getElementById('mostrarMais75b');
    const btnLeiaMais75b = document.getElementById('btnLeiaMais75b');

    if (tresPontos75b.style.display === 'none') {
        tresPontos75b.style.display = 'inline';
        mostrarMais75b.style.display = 'none';
        btnLeiaMais75b.innerHTML = 'Vetorização: Comprimir';
    } else {
        tresPontos75b.style.display = 'none';
        mostrarMais75b.style.display = 'inline';
        btnLeiaMais75b.innerHTML = 'Vetorização: Comprimir';
    }
}
function leiaMais76b() {
    const tresPontos76b = document.getElementById('tresPontos76b');
    const mostrarMais76b = document.getElementById('mostrarMais76b');
    const btnLeiaMais76b = document.getElementById('btnLeiaMais76b');

    if (tresPontos76b.style.display === 'none') {
        tresPontos76b.style.display = 'inline';
        mostrarMais76b.style.display = 'none';
        btnLeiaMais76b.innerHTML = 'Vetorização: correntes';
    } else {
        tresPontos76b.style.display = 'none';
        mostrarMais76b.style.display = 'inline';
        btnLeiaMais76b.innerHTML = 'Vetorização: correntes';
    }
}
function leiaMais77b() {
    const tresPontos77b = document.getElementById('tresPontos77b');
    const mostrarMais77b = document.getElementById('mostrarMais77b');
    const btnLeiaMais77b = document.getElementById('btnLeiaMais77b');

    if (tresPontos77b.style.display === 'none') {
        tresPontos77b.style.display = 'inline';
        mostrarMais77b.style.display = 'none';
        btnLeiaMais77b.innerHTML = 'Vetorização: divisão';
    } else {
        tresPontos77b.style.display = 'none';
        mostrarMais77b.style.display = 'inline';
        btnLeiaMais77b.innerHTML = 'Vetorização: divisão';
    }
}
function leiaMais78b() {
    const tresPontos78b = document.getElementById('tresPontos78b');
    const mostrarMais78b = document.getElementById('mostrarMais78b');
    const btnLeiaMais78b = document.getElementById('btnLeiaMais78b');

    if (tresPontos78b.style.display === 'none') {
        tresPontos78b.style.display = 'inline';
        mostrarMais78b.style.display = 'none';
        btnLeiaMais78b.innerHTML = 'Cura espiritual';
    } else {
        tresPontos78b.style.display = 'none';
        mostrarMais78b.style.display = 'inline';
        btnLeiaMais78b.innerHTML = 'Cura espiritual';
    }
}
function leiaMais79b() {
    const tresPontos79b = document.getElementById('tresPontos79b');
    const mostrarMais79b = document.getElementById('mostrarMais79b');
    const btnLeiaMais79b = document.getElementById('btnLeiaMais79b');

    if (tresPontos79b.style.display === 'none') {
        tresPontos79b.style.display = 'inline';
        mostrarMais79b.style.display = 'none';
        btnLeiaMais79b.innerHTML = 'Toque paralisante';
    } else {
        tresPontos79b.style.display = 'none';
        mostrarMais79b.style.display = 'inline';
        btnLeiaMais79b.innerHTML = 'Toque paralisante';
    }
}
function leiaMais80b() {
    const tresPontos80b = document.getElementById('tresPontos80b');
    const mostrarMais80b = document.getElementById('mostrarMais80b');
    const btnLeiaMais80b = document.getElementById('btnLeiaMais80b');

    if (tresPontos80b.style.display === 'none') {
        tresPontos80b.style.display = 'inline';
        mostrarMais80b.style.display = 'none';
        btnLeiaMais80b.innerHTML = 'Onda de choque';
    } else {
        tresPontos80b.style.display = 'none';
        mostrarMais80b.style.display = 'inline';
        btnLeiaMais80b.innerHTML = 'Onda de choque';
    }
}
function leiaMais81b() {
    const tresPontos81b = document.getElementById('tresPontos81b');
    const mostrarMais81b = document.getElementById('mostrarMais81b');
    const btnLeiaMais81b = document.getElementById('btnLeiaMais81b');

    if (tresPontos81b.style.display === 'none') {
        tresPontos81b.style.display = 'inline';
        mostrarMais81b.style.display = 'none';
        btnLeiaMais81b.innerHTML = 'Shotgun';
    } else {
        tresPontos81b.style.display = 'none';
        mostrarMais81b.style.display = 'inline';
        btnLeiaMais81b.innerHTML = 'Shotgun';
    }
}
function leiaMais82b() {
    const tresPontos82b = document.getElementById('tresPontos82b');
    const mostrarMais82b = document.getElementById('mostrarMais82b');
    const btnLeiaMais82b = document.getElementById('btnLeiaMais82b');

    if (tresPontos82b.style.display === 'none') {
        tresPontos82b.style.display = 'inline';
        mostrarMais82b.style.display = 'none';
        btnLeiaMais82b.innerHTML = 'Barreira espiritual';
    } else {
        tresPontos82b.style.display = 'none';
        mostrarMais82b.style.display = 'inline';
        btnLeiaMais82b.innerHTML = 'Barreira espiritual';
    }
}
function leiaMais83b() {
    const tresPontos83b = document.getElementById('tresPontos83b');
    const mostrarMais83b = document.getElementById('mostrarMais83b');
    const btnLeiaMais83b = document.getElementById('btnLeiaMais83b');

    if (tresPontos83b.style.display === 'none') {
        tresPontos83b.style.display = 'inline';
        mostrarMais83b.style.display = 'none';
        btnLeiaMais83b.innerHTML = 'Leigan';
    } else {
        tresPontos83b.style.display = 'none';
        mostrarMais83b.style.display = 'inline';
        btnLeiaMais83b.innerHTML = 'Leigan';
    }
}
function leiaMais84b() {
    const tresPontos84b = document.getElementById('tresPontos84b');
    const mostrarMais84b = document.getElementById('mostrarMais84b');
    const btnLeiaMais84b = document.getElementById('btnLeiaMais84b');

    if (tresPontos84b.style.display === 'none') {
        tresPontos84b.style.display = 'inline';
        mostrarMais84b.style.display = 'none';
        btnLeiaMais84b.innerHTML = 'Reflexo destrutivo leitor';
    } else {
        tresPontos84b.style.display = 'none';
        mostrarMais84b.style.display = 'inline';
        btnLeiaMais84b.innerHTML = 'Reflexo destrutivo leitor';
    }
}

function leiaMais85b() {
    const tresPontos85b = document.getElementById('tresPontos85b');
    const mostrarMais85b = document.getElementById('mostrarMais85b');
    const btnLeiaMais85b = document.getElementById('btnLeiaMais85b');

    if (tresPontos85b.style.display === 'none') {
        tresPontos85b.style.display = 'inline';
        mostrarMais85b.style.display = 'none';
        btnLeiaMais85b.innerHTML = 'Espada da luz reveladora';
    } else {
        tresPontos85b.style.display = 'none';
        mostrarMais85b.style.display = 'inline';
        btnLeiaMais85b.innerHTML = 'Espada da luz reveladora';
    }
}
function leiaMais86b() {
    const tresPontos86b = document.getElementById('tresPontos86b');
    const mostrarMais86b = document.getElementById('mostrarMais86b');
    const btnLeiaMais86b = document.getElementById('btnLeiaMais86b');

    if (tresPontos86b.style.display === 'none') {
        tresPontos86b.style.display = 'inline';
        mostrarMais86b.style.display = 'none';
        btnLeiaMais86b.innerHTML = 'Combo star';
    } else {
        tresPontos86b.style.display = 'none';
        mostrarMais86b.style.display = 'inline';
        btnLeiaMais86b.innerHTML = 'Combo star';
    }
}
function leiaMais87b() {
    const tresPontos87b = document.getElementById('tresPontos87b');
    const mostrarMais87b = document.getElementById('mostrarMais87b');
    const btnLeiaMais87b = document.getElementById('btnLeiaMais87b');

    if (tresPontos87b.style.display === 'none') {
        tresPontos87b.style.display = 'inline';
        mostrarMais87b.style.display = 'none';
        btnLeiaMais87b.innerHTML = 'Telepatia';
    } else {
        tresPontos87b.style.display = 'none';
        mostrarMais87b.style.display = 'inline';
        btnLeiaMais87b.innerHTML = 'Telepatia';
    }
}
function leiaMais88b() {
    const tresPontos88b = document.getElementById('tresPontos88b');
    const mostrarMais88b = document.getElementById('mostrarMais88b');
    const btnLeiaMais88b = document.getElementById('btnLeiaMais88b');

    if (tresPontos88b.style.display === 'none') {
        tresPontos88b.style.display = 'inline';
        mostrarMais88b.style.display = 'none';
        btnLeiaMais88b.innerHTML = 'Transferir';
    } else {
        tresPontos88b.style.display = 'none';
        mostrarMais88b.style.display = 'inline';
        btnLeiaMais88b.innerHTML = 'Transferir';
    }
}
function leiaMais89b() {
    const tresPontos89b = document.getElementById('tresPontos89b');
    const mostrarMais89b = document.getElementById('mostrarMais89b');
    const btnLeiaMais89b = document.getElementById('btnLeiaMais89b');

    if (tresPontos89b.style.display === 'none') {
        tresPontos89b.style.display = 'inline';
        mostrarMais89b.style.display = 'none';
        btnLeiaMais89b.innerHTML = 'Seja criativo';
    } else {
        tresPontos89b.style.display = 'none';
        mostrarMais89b.style.display = 'inline';
        btnLeiaMais89b.innerHTML = 'Seja criativo';
    }
}
function leiaMais90b() {
    const tresPontos90b = document.getElementById('tresPontos90b');
    const mostrarMais90b = document.getElementById('mostrarMais90b');
    const btnLeiaMais90b = document.getElementById('btnLeiaMais90b');

    if (tresPontos90b.style.display === 'none') {
        tresPontos90b.style.display = 'inline';
        mostrarMais90b.style.display = 'none';
        btnLeiaMais90b.innerHTML = 'Conceder';
    } else {
        tresPontos90b.style.display = 'none';
        mostrarMais90b.style.display = 'inline';
        btnLeiaMais90b.innerHTML = 'Conceder';
    }
}
function leiaMais91b() {
    const tresPontos91b = document.getElementById('tresPontos91b');
    const mostrarMais91b = document.getElementById('mostrarMais91b');
    const btnLeiaMais91b = document.getElementById('btnLeiaMais91b');

    if (tresPontos91b.style.display === 'none') {
        tresPontos91b.style.display = 'inline';
        mostrarMais91b.style.display = 'none';
        btnLeiaMais91b.innerHTML = 'Editor';
    } else {
        tresPontos84b.style.display = 'none';
        mostrarMais84b.style.display = 'inline';
        btnLeiaMais84b.innerHTML = 'Editor';
    }
}
function leiaMais92b() {
    const tresPontos92b = document.getElementById('tresPontos92b');
    const mostrarMais92b = document.getElementById('mostrarMais92b');
    const btnLeiaMais92b = document.getElementById('btnLeiaMais92b');

    if (tresPontos92b.style.display === 'none') {
        tresPontos92b.style.display = 'inline';
        mostrarMais92b.style.display = 'none';
        btnLeiaMais92b.innerHTML = 'Conversão de vida(Lp)';
    } else {
        tresPontos92b.style.display = 'none';
        mostrarMais92b.style.display = 'inline';
        btnLeiaMais92b.innerHTML = 'Conversão de vida(Lp)';
    }
}
function leiaMais93b() {
    const tresPontos93b = document.getElementById('tresPontos93b');
    const mostrarMais93b = document.getElementById('mostrarMais93b');
    const btnLeiaMais93b = document.getElementById('btnLeiaMais93b');

    if (tresPontos93b.style.display === 'none') {
        tresPontos93b.style.display = 'inline';
        mostrarMais93b.style.display = 'none';
        btnLeiaMais93b.innerHTML = 'Olho perspicaz';
    } else {
        tresPontos93b.style.display = 'none';
        mostrarMais93b.style.display = 'inline';
        btnLeiaMais93b.innerHTML = 'Olho perspicaz';
    }
}
function leiaMais94b() {
    const tresPontos94b = document.getElementById('tresPontos94b');
    const mostrarMais94b = document.getElementById('mostrarMais94b');
    const btnLeiaMais94b = document.getElementById('btnLeiaMais94b');

    if (tresPontos94b.style.display === 'none') {
        tresPontos94b.style.display = 'inline';
        mostrarMais94b.style.display = 'none';
        btnLeiaMais94b.innerHTML = 'Avaliar';
    } else {
        tresPontos94b.style.display = 'none';
        mostrarMais94b.style.display = 'inline';
        btnLeiaMais94b.innerHTML = 'Avaliar';
    }
}
function leiaMais95b() {
    const tresPontos95b = document.getElementById('tresPontos95b');
    const mostrarMais95b = document.getElementById('mostrarMais95b');
    const btnLeiaMais95b = document.getElementById('btnLeiaMais95b');

    if (tresPontos95b.style.display === 'none') {
        tresPontos95b.style.display = 'inline';
        mostrarMais95b.style.display = 'none';
        btnLeiaMais95b.innerHTML = 'Passo furtivo';
    } else {
        tresPontos95b.style.display = 'none';
        mostrarMais95b.style.display = 'inline';
        btnLeiaMais95b.innerHTML = 'Passo furtivo';
    }
}
function leiaMais96b() {
    const tresPontos96b = document.getElementById('tresPontos96b');
    const mostrarMais96b = document.getElementById('mostrarMais96b');
    const btnLeiaMais96b = document.getElementById('btnLeiaMais96b');

    if (tresPontos96b.style.display === 'none') {
        tresPontos96b.style.display = 'inline';
        mostrarMais96b.style.display = 'none';
        btnLeiaMais96b.innerHTML = 'Raios roxo';
    } else {
        tresPontos96b.style.display = 'none';
        mostrarMais96b.style.display = 'inline';
        btnLeiaMais96b.innerHTML = 'Raios roxo';
    }
}
function leiaMais97b() {
    const tresPontos97b = document.getElementById('tresPontos97b');
    const mostrarMais97b = document.getElementById('mostrarMais97b');
    const btnLeiaMais97b = document.getElementById('btnLeiaMais97b');

    if (tresPontos97b.style.display === 'none') {
        tresPontos97b.style.display = 'inline';
        mostrarMais97b.style.display = 'none';
        btnLeiaMais97b.innerHTML = 'Bala de pedra';
    } else {
        tresPontos97b.style.display = 'none';
        mostrarMais97b.style.display = 'inline';
        btnLeiaMais97b.innerHTML = 'Bala de pedra';
    }
}
function leiaMais98b() {
    const tresPontos98b = document.getElementById('tresPontos98b');
    const mostrarMais98b = document.getElementById('mostrarMais98b');
    const btnLeiaMais98b = document.getElementById('btnLeiaMais98b');

    if (tresPontos98b.style.display === 'none') {
        tresPontos98b.style.display = 'inline';
        mostrarMais98b.style.display = 'none';
        btnLeiaMais98b.innerHTML = 'Invocação';
    } else {
        tresPontos98b.style.display = 'none';
        mostrarMais98b.style.display = 'inline';
        btnLeiaMais98b.innerHTML = 'Invocação';
    }
}
function leiaMais99b() {
    const tresPontos99b = document.getElementById('tresPontos99b');
    const mostrarMais99b = document.getElementById('mostrarMais99b');
    const btnLeiaMais99b = document.getElementById('btnLeiaMais99b');

    if (tresPontos99b.style.display === 'none') {
        tresPontos99b.style.display = 'inline';
        mostrarMais99b.style.display = 'none';
        btnLeiaMais99b.innerHTML = 'Dimensão de bolso';
    } else {
        tresPontos99b.style.display = 'none';
        mostrarMais99b.style.display = 'inline';
        btnLeiaMais99b.innerHTML = 'Dimensão de bolso';
    }
}
function leiaMais100b() {
    const tresPontos100b = document.getElementById('tresPontos100b');
    const mostrarMais100b = document.getElementById('mostrarMais100b');
    const btnLeiaMais100b = document.getElementById('btnLeiaMais100b');

    if (tresPontos100b.style.display === 'none') {
        tresPontos100b.style.display = 'inline';
        mostrarMais100b.style.display = 'none';
        btnLeiaMais100b.innerHTML = 'Boca do abismo';
    } else {
        tresPontos100b.style.display = 'none';
        mostrarMais100b.style.display = 'inline';
        btnLeiaMais100b.innerHTML = 'Boca do abismo';
    }
}
function leiaMais101b() {
    const tresPontos101b = document.getElementById('tresPontos101b');
    const mostrarMais101b = document.getElementById('mostrarMais101b');
    const btnLeiaMais101b = document.getElementById('btnLeiaMais101b');

    if (tresPontos101b.style.display === 'none') {
        tresPontos101b.style.display = 'inline';
        mostrarMais101b.style.display = 'none';
        btnLeiaMais101b.innerHTML = 'Mini raio da destruição';
    } else {
        tresPontos101b.style.display = 'none';
        mostrarMais101b.style.display = 'inline';
        btnLeiaMais101b.innerHTML = 'Mini raio da destruição';
    }
}
function leiaMais102b() {
    const tresPontos102b = document.getElementById('tresPontos102b');
    const mostrarMais102b = document.getElementById('mostrarMais102b');
    const btnLeiaMais102b = document.getElementById('btnLeiaMais102b');

    if (tresPontos102b.style.display === 'none') {
        tresPontos102b.style.display = 'inline';
        mostrarMais102b.style.display = 'none';
        btnLeiaMais102b.innerHTML = 'Reciclagem';
    } else {
        tresPontos102b.style.display = 'none';
        mostrarMais102b.style.display = 'inline';
        btnLeiaMais102b.innerHTML = 'Reciclagem';
    }
}
function leiaMais103b() {
    const tresPontos103b = document.getElementById('tresPontos103b');
    const mostrarMais103b = document.getElementById('mostrarMais103b');
    const btnLeiaMais103b = document.getElementById('btnLeiaMais103b');

    if (tresPontos103b.style.display === 'none') {
        tresPontos103b.style.display = 'inline';
        mostrarMais103b.style.display = 'none';
        btnLeiaMais103b.innerHTML = 'Visão eteriana';
    } else {
        tresPontos103b.style.display = 'none';
        mostrarMais103b.style.display = 'inline';
        btnLeiaMais103b.innerHTML = 'Visão eteriana';
    }
}
function leiaMais104b() {
    const tresPontos104b = document.getElementById('tresPontos104b');
    const mostrarMais104b = document.getElementById('mostrarMais104b');
    const btnLeiaMais104b = document.getElementById('btnLeiaMais104b');

    if (tresPontos104b.style.display === 'none') {
        tresPontos104b.style.display = 'inline';
        mostrarMais104b.style.display = 'none';
        btnLeiaMais104b.innerHTML = 'identificador de runas (médio)';
    } else {
        tresPontos104b.style.display = 'none';
        mostrarMais104b.style.display = 'inline';
        btnLeiaMais104b.innerHTML = 'identificador de runas (médio)';
    }
}
function leiaMais105b() {
    const tresPontos105b = document.getElementById('tresPontos105b');
    const mostrarMais105b = document.getElementById('mostrarMais105b');
    const btnLeiaMais105b = document.getElementById('btnLeiaMais105b');

    if (tresPontos105b.style.display === 'none') {
        tresPontos105b.style.display = 'inline';
        mostrarMais105b.style.display = 'none';
        btnLeiaMais105b.innerHTML = 'Ocultação de ficha';
    } else {
        tresPontos105b.style.display = 'none';
        mostrarMais105b.style.display = 'inline';
        btnLeiaMais105b.innerHTML = 'Ocultação de ficha';
    }
}
function leiaMais106b() {
    const tresPontos106b = document.getElementById('tresPontos106b');
    const mostrarMais106b = document.getElementById('mostrarMais106b');
    const btnLeiaMais106b = document.getElementById('btnLeiaMais106b');

    if (tresPontos106b.style.display === 'none') {
        tresPontos106b.style.display = 'inline';
        mostrarMais106b.style.display = 'none';
        btnLeiaMais106b.innerHTML = 'Clones';
    } else {
        tresPontos106b.style.display = 'none';
        mostrarMais106b.style.display = 'inline';
        btnLeiaMais106b.innerHTML = 'Clones';
    }
}
function leiaMais107b() {
    const tresPontos107b = document.getElementById('tresPontos107b');
    const mostrarMais107b = document.getElementById('mostrarMais107b');
    const btnLeiaMais107b = document.getElementById('btnLeiaMais107b');

    if (tresPontos107b.style.display === 'none') {
        tresPontos107b.style.display = 'inline';
        mostrarMais107b.style.display = 'none';
        btnLeiaMais107b.innerHTML = 'No long human';
    } else {
        tresPontos107b.style.display = 'none';
        mostrarMais107b.style.display = 'inline';
        btnLeiaMais107b.innerHTML = 'No long human';
    }
}
// document.getElementById('discount-form').addEventListener('submit', calculateDiscount);

document.getElementById('discount-form').addEventListener('submit', function (e) {

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
    if (isFinite(discountedPrice)) {
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
function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null) return;

    modal.style.display = 'block';
}
function closeModall(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null) return;

    modal.style.display = 'none';
}
