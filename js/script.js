function showPopup(popup) {
    popup.classList.remove('hidden');
    popup.classList.add('show');
}

function hidePopup(popup) {
    popup.classList.remove('show');
    popup.classList.add('hidden');
}

document.getElementById('button-generate').addEventListener('click', function () {
    const max = parseInt(document.getElementById('max-value').value);
    const min = parseInt(document.getElementById('min-value').value);

    const popupValidate = document.getElementById('popup-validate');
    const messageValidate = document.getElementById('message-validate');

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
    const popupResult = document.getElementById('popup-result');
    const valueResult = document.getElementById('value-result');

    valueResult.textContent = randomNumber;
    showPopup(popupResult);
});

document.getElementById('button-validate').addEventListener('click', function () {
    const popupValidate = document.getElementById('popup-validate');
    hidePopup(popupValidate);
});

document.getElementById('result-continue').addEventListener('click', function () {
    const popupResult = document.getElementById('popup-result');
    hidePopup(popupResult);
});

document.getElementById('result-restart').addEventListener('click', function () {
    const popupResult = document.getElementById('popup-result');
    hidePopup(popupResult);

    document.getElementById('max-value').value = '';
    document.getElementById('min-value').value = '';
});
