
const logoToggleClass = (element, toggleClass) => {
    element.classList.toggle(toggleClass);
  };

document.querySelectorAll('.hamburger-icon').forEach((hamburgIcon) => {
  hamburgIcon.addEventListener('click', () => {
    hamburgIcon.classList.toggle('open');
    logoToggleClass(document.querySelector('.header'), 'solidheader');
  });
})
