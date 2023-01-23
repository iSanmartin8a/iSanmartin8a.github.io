function nextCompany () {

    var nervia = document.getElementById('nervia');
    var osiria = document.getElementById('osiria');
    var adecco = document.getElementById('adecco');
    var algui = document.getElementById('algui');

    if (nervia.classList.contains('active')) {
        nervia.classList.remove('active');
        osiria.classList.add('active');
    } else if (osiria.classList.contains('active')) {
        osiria.classList.remove('active');
        adecco.classList.add('active');
    } else if (adecco.classList.contains('active')) {
        adecco.classList.remove('active');
        algui.classList.add('active');
    } else if (algui.classList.contains('active')) {
        algui.classList.remove('active');
        nervia.classList.add('active');
    }
};

function prevCompany () {

    var nervia = document.getElementById('nervia');
    var osiria = document.getElementById('osiria');
    var adecco = document.getElementById('adecco');
    var algui = document.getElementById('algui');

    if (nervia.classList.contains('active')) {
        nervia.classList.remove('active');
        algui.classList.add('active');
    } else if (osiria.classList.contains('active')) {
        osiria.classList.remove('active');
        nervia.classList.add('active');
    } else if (adecco.classList.contains('active')) {
        adecco.classList.remove('active');
        osiria.classList.add('active');
    } else if (algui.classList.contains('active')) {
        algui.classList.remove('active');
        adecco.classList.add('active');
    }
};