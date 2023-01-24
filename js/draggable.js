function nextCompany () {

    var nervia = document.getElementById('nervia');
    var osiria = document.getElementById('osiria');
    var adecco = document.getElementById('adecco');
    var algui = document.getElementById('algui');

    if (nervia.classList.contains('active')) {
        nervia.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { nervia.classList.remove('active'); }, 1000);
        setTimeout(function () { osiria.classList.add('active'); }, 1000);
        osiria.style.animation = 'venirseDer 2s ease forwards';
    } else if (osiria.classList.contains('active')) {
        osiria.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { osiria.classList.remove('active'); }, 1000);
        setTimeout(function () { adecco.classList.add('active'); }, 1000);
        adecco.style.animation = 'venirseDer 2s ease forwards';
    } else if (adecco.classList.contains('active')) {
        adecco.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { adecco.classList.remove('active'); }, 1000);
        setTimeout(function () { algui.classList.add('active'); }, 1000);
        algui.style.animation = 'venirseDer 2s ease forwards';
    } else if (algui.classList.contains('active')) {
        algui.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { algui.classList.remove('active'); }, 1000);
        setTimeout(function () { nervia.classList.add('active'); }, 1000);
        nervia.style.animation = 'venirseDer 2s ease forwards';
    }
};

function prevCompany () {

    var nervia = document.getElementById('nervia');
    var osiria = document.getElementById('osiria');
    var adecco = document.getElementById('adecco');
    var algui = document.getElementById('algui');

    if (nervia.classList.contains('active')) {
        nervia.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { nervia.classList.remove('active'); }, 1000);
        setTimeout(function () { algui.classList.add('active'); }, 1000);
        algui.style.animation = 'venirseIzq 2s ease forwards';
    } else if (osiria.classList.contains('active')) {
        osiria.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { osiria.classList.remove('active'); }, 1000);
        setTimeout(function () { nervia.classList.add('active'); }, 1000);
        nervia.style.animation = 'venirseIzq 2s ease forwards';
    } else if (adecco.classList.contains('active')) {
        adecco.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { adecco.classList.remove('active'); }, 1000);
        setTimeout(function () { osiria.classList.add('active'); }, 1000);
        osiria.style.animation = 'venirseIzq 2s ease forwards';
    } else if (algui.classList.contains('active')) {
        algui.style.animation = 'irse 2s ease forwards';
        setTimeout(function () { algui.classList.remove('active'); }, 1000);
        setTimeout(function () { adecco.classList.add('active'); }, 1000);
        adecco.style.animation = 'venirseIzq 2s ease forwards';
    }
};