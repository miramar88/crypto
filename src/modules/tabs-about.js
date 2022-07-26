const benefitsNameButtons = document.querySelectorAll('.benefits-list__name');
const benefitsContentItems = document.querySelectorAll('.benefits-content__item');

benefitsNameButtons.forEach((benefitsNameButton, i) => {
  benefitsNameButton.addEventListener('click', () => {
    benefitsContentItems.forEach((benefitsContentItem, j) => {
      if (i === j) {
      benefitsNameButtons[j].classList.add('benefits-list__name--active');
      benefitsContentItems[j].classList.add('benefits-content__item--active');
    } else {
      benefitsNameButtons[j].classList.remove('benefits-list__name--active');
      benefitsContentItems[j].classList.remove('benefits-content__item--active');
    }
    })
  })
})