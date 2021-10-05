const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', (e) => {
  const scrollHgt = window.pageYOffset;
  if(scrollHgt > 350) {
      topLink.classList.add('show-link');
  } else {
      topLink.classList.remove('show-link');
  }
});

 