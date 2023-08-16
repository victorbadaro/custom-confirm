const button = document.querySelector('button');

button.addEventListener('click', async function () {
  const response = await customConfirm('Tem certeza???');

  console.log(response);
});

function customConfirm(message) {
  const confirmElement = document.getElementById('confirm');
  const confirmContentElement = confirmElement.querySelector('.confirm-content');
  const confirmMessageElement = confirmContentElement.querySelector('p');
  const confirmButtonsContainer = confirmContentElement.querySelector('.confirm-buttons');
  const confirmOkayButton = confirmButtonsContainer.querySelector('.okayButton');
  const confirmCancelButton = confirmButtonsContainer.querySelector('.cancelButton');

  confirmMessageElement.textContent = message;
  confirmElement.classList.remove('hide');

  return new Promise((resolve, reject) => {
    confirmOkayButton.onclick = () => {
      confirmElement.classList.add('hide');

      return resolve('clicou ok');
    };

    confirmCancelButton.onclick = () => {
      confirmElement.classList.add('hide');

      return resolve('clicou cancel');
    };
  })
}