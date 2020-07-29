'use strict';

function getDogImage() {
    const number = $('#quantity').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
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