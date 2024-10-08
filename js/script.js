function inputLength(input, maxLength) {
    input.addEventListener('input', function () {
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
    });
}

function showPopup(popup) {
    popup.classList.remove('hidden');
    popup.classList.add('show');
}

function hidePopup(popup) {
    popup.classList.remove('show');
    popup.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    inputLength(document.getElementById('maxValue'), 3);
    inputLength(document.getElementById('minValue'), 3);
});

document.getElementById('buttonGenerate').addEventListener('click', function () {
    const max = parseInt(document.getElementById('maxValue').value);
    const min = parseInt(document.getElementById('minValue').value);

    const popupValidate = document.getElementById('popupValidate');
    const messageValidate = document.getElementById('messageValidate');

    if (isNaN(max) || isNaN(min)) {
        messageValidate.textContent = "Please enter valid values.";
        showPopup(popupValidate);
        return;
    }

    if (min >= max) {
        messageValidate.textContent = "The minimum value must be less than the maximum value.";
        showPopup(popupValidate);
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const popupResult = document.getElementById('popupResult');
    const valueResult = document.getElementById('valueResult');

    valueResult.textContent = randomNumber;
    showPopup(popupResult);
});

document.getElementById('buttonValidate').addEventListener('click', function () {
    const popupValidate = document.getElementById('popupValidate');
    hidePopup(popupValidate);
});

document.getElementById('resultContinue').addEventListener('click', function () {
    const popupResult = document.getElementById('popupResult');
    hidePopup(popupResult);
});

document.getElementById('resultRestart').addEventListener('click', function () {
    const popupResult = document.getElementById('popupResult');
    hidePopup(popupResult);

    document.getElementById('maxValue').value = '';
    document.getElementById('minValue').value = '';
});