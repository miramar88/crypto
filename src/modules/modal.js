const openModalBtn = document.querySelector('.hero__cta-button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', () => {
  overlay.classList.add('overlay--open');
  modal.classList.add('modal--open');
})

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay--open');
    modal.classList.remove('modal--open');
  }
})

const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    name: form.firstname.value,
    lastname: form.lastname.value,
    tel: form.phone.value
  }

  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'post',
    body: JSON.stringify(data),
  }).then(response => response.json())
  .then(person => {
    modalTitle.textContent = `${person.name}` + ', ваша заявка успешно отправлена.'
  })
  form.remove()

  setTimeout(() => {
    overlay.classList.remove('overlay--open');
    modal.classList.remove('modal--open');
  }, 3000)
})