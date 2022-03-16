const Data = [
    {
        imagename: 'kid6.jpg',
        title: 'Scratch Game Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.'
        
    },

    {
        imagename: 'kid3.jpeg',
        title: 'Coding Foundations',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.'
        
    },

    {
        imagename: 'kid3.jpeg',
        title: 'Python Coding For Kids',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.'
        
    },

    {
        imagename: 'kids.webp',
        title: 'Python Game Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta, cum sequi, nobis nisi odit molestiae a voluptatum quasi, deleniti hic dignissimos labore accusantium obcaecati iure in eaque enim ut!.'
        
    },
]



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

    for (let index =0; index< Data.length; index +=1){
        card += `<div class="course-card">
        <div class="card-body">
            <img width="200" height="200" src="assets/images/${Data[index].imagename}" alt=" about us image">
            <h3>${Data[index].title}</h3>
            <p class="content">${Data[index].description} </p>
        </div>
        <a href="#" class="btn btn-view-more"> Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </a>
    </div>`;
    }
    cardContainerEl.innerHTML = card;

});
