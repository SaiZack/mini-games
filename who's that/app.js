$(document).ready(function() {
    var rand = Math.floor(Math.random() * 10) + 1
    $('#pokemon_area').attr('src', `images/pokemon_shadow/0${rand < 10 ? '0'+ rand : rand}.png`);
})