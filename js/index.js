const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.section');

    if (entry.isIntersecting) {
      square.classList.add('section-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('section-animation');
  });
});

observer.observe(document.querySelector('.section__wrapper'));
observer.observe(document.querySelector('.digital__wrapper'));
observer.observe(document.querySelector('.social__wrapper'));
observer.observe(document.querySelector('.influencer__wrapper'));
observer.observe(document.querySelector('.mobile__wrapper'));
observer.observe(document.querySelector('.web__wrapper'));
observer.observe(document.querySelector('.other__wrapper'));