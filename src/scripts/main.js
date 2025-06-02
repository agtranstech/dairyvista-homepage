 window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if(navbar)
    {
        if (window.scrollY > 45) {
        navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
        navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    }

    const backToTop = document.querySelector('.back-to-top') as HTMLElement;
    if(backToTop)
    {
        if (window.scrollY > 100) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = '1';
        } else {
        backToTop.style.opacity = '0';
        setTimeout(() => {
            backToTop.style.display = 'none';
        }, 300); // match fadeOut duration if needed
        }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });