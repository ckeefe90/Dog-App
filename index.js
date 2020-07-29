'use strict';

function getDogImage() {
    const number = $('#quantity').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            displayResults(responseJson);
        });
}

function displayResults(responseJson) {
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.results').append(
            `<img src="${responseJson.message[i]}" class="results-img">`
        )
    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}



$(function() {
    watchForm();
});