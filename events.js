// Page created by Nelson Dominguez Martinez - 2025  
  
  const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = hamburger.querySelector('.icon-open');
  const iconClose = hamburger.querySelector('.icon-close');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('data-state') === 'open';

    if (isOpen) {
      mobileMenu.style.display = 'none';
      iconOpen.style.display = 'inline';
      iconClose.style.display = 'none';
      hamburger.setAttribute('data-state', 'closed');
    } else {
      mobileMenu.style.display = 'block';
      iconOpen.style.display = 'none';
      iconClose.style.display = 'inline';
      hamburger.setAttribute('data-state', 'open');
    }
  });



  const mobileLinks = mobileMenu.querySelectorAll('a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    iconOpen.style.display = 'inline';
    iconClose.style.display = 'none';
    hamburger.setAttribute('data-state', 'closed');
  });
});








const sections = document.querySelectorAll('.carousel-container .section');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainers = document.querySelectorAll('.dots-container');

let currentIndex = 0;
const transitionTime = 500;


sections.forEach((section, index) => {
  const dotsContainer = section.querySelector('.dots-container');
  sections.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      if (currentIndex !== i) changeSection(i);
    });
    dotsContainer.appendChild(dot);
  });
});

function changeSection(newIndex) {
  if (newIndex === currentIndex) return;


  const currentSection = sections[currentIndex];
  currentSection.style.opacity = 0;


  currentSection.style.pointerEvents = 'none';


  setTimeout(() => {

    currentSection.classList.remove('active');
    currentSection.style.opacity = '';
    currentSection.style.pointerEvents = '';

    const newSection = sections[newIndex];
    newSection.classList.add('active');
    newSection.style.opacity = 0;

    newSection.offsetHeight; 

    newSection.style.opacity = 1;


    updateDots(newIndex);

    currentIndex = newIndex;
  }, transitionTime);
}

function updateDots(activeIndex) {
  dotsContainers.forEach(container => {
    const dots = container.querySelectorAll('button');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  });
}


prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + sections.length) % sections.length;
  changeSection(newIndex);
});

nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % sections.length;
  changeSection(newIndex);
});


sections.forEach((section, i) => {
  if (i === 0) {
    section.classList.add('active');
    section.style.opacity = 1;
  } else {
    section.style.opacity = 0;
  }
});
updateDots(0);




document.querySelectorAll('.background-blur').forEach(div => {
  const bg = div.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/['"]/g, '');
  const img = new Image();
  img.src = bg;
  img.onload = () => {
    div.classList.add('loaded');
  }
});

// Page created by Nelson Dominguez Martinez - 2025
