'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    toasts.appendChild(notification);

    const btnData = btn.getAttribute('data-name');

    if (btnData === 'valid') {
      notification.classList.add('valid');
      notification.innerText = `Transacción exitosa!`;
    } else if (btnData === 'warning') {
      notification.classList.add('warning');
      notification.innerText = `Cuidado! algo no está bien`;
    } else if (btnData === 'error') {
      notification.classList.add('error');
      notification.innerText = `Hay un error`;
    }

    setTimeout(() => {
      notification.remove();
    }, 2500);
  });
});
