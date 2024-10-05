document.getElementById('button-generate').addEventListener('click', function () {
    const max = parseInt(document.getElementById('max-value').value);
    const min = parseInt(document.getElementById('min-value').value);
});

document.getElementById('button-result-restart').addEventListener('click', function () {
    window.location.reload();
});


// function generateNumber() {


//     if (isNaN(min) || isNaN(max)) {
//         alert("Por favor, insira valores válidos.");
//         return;
//     }

//     if (min >= max) {
//         alert("O valor mínimo deve ser menor que o valor máximo.");
//         return;
//     }

//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     alert("Número gerado: " + randomNumber);
// }