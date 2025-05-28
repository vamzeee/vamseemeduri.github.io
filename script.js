let lastScroll = 0;
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('hide');
      return;
    }

    if (currentScroll > lastScroll) {
      // Scrolling down
      header.classList.add('hide');
    } else {
      // Scrolling up
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });