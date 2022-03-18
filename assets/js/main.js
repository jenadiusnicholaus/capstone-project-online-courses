const Data = [
  {
    imagename: 'kid6.jpg',
    title: 'Scratch Game Development',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },

  {
    imagename: 'kid3.jpeg',
    title: 'Coding Foundations',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },

  {
    imagename: 'kid3.jpeg',
    title: 'Python Coding For Kids',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },

  {
    imagename: 'kids.webp',
    title: 'Python Game Development',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },

  {
    imagename: 'kids.webp',
    title: 'Python Game Development',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },

  {
    imagename: 'kids.webp',
    title: 'Python Game Development',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.',

  },
];

const logoToggleClass = (element, toggleClass) => {
  element.classList.toggle(toggleClass);
};

document.querySelectorAll('.hamburger-icon').forEach((hamburgIcon) => {
  hamburgIcon.addEventListener('click', () => {
    hamburgIcon.classList.toggle('open');
    logoToggleClass(document.querySelector('.header'), 'solidheader');
  });
});

window.addEventListener('load', () => {
  const cardContainerEl = document.getElementById('card-container');
  cardContainerEl.innerHTML = '';
  let card = '';

  for (let index = 0; index < Data.length; index += 1) {
    card += `<div class="course-card">
        <div class="card-body">
            <img width="150" height="150" src="assets/images/${Data[index].imagename}" alt=" about us image">
            <div class = "col-3"> 
              <h3>${Data[index].title}</h3>
              <h6>Lorem Ipsum is simply dummy text of the printing</h6>
              <p class="content">${Data[index].description} </p>
            </div>
        </div>
        
    </div>`;
  }
  cardContainerEl.innerHTML = card;
});
