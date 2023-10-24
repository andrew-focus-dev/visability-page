new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.current-button-next',
    prevEl: '.current-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 2,
    },
  },
})

const animated = () => {
  const elements = document.querySelectorAll('[data-animation-classes]')

  elements.forEach(item => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          const clasess = item.target.dataset.animationClasses.split(' ')
          clasess.forEach(cls => item.target.classList.add(cls))
        }
      })
    })

    observer.observe(item)
  })
}

const toggleHeader = () => {
  const header = document.querySelector('.header')

  const foo = () => {
    if (window.scrollY) {
      header.classList.add('header--sticky')
    } else {
      header.classList.remove('header--sticky')
    }
  }

  window.addEventListener('scroll', () => {
    setTimeout(() => {
      foo()
    }, 200)
  })

  foo()
}

const toggleMenu = () => {
  const activeCls = 'header--open'
  const header = document.querySelector('.header')
  const open = document.querySelector('.header-icon')

  open.addEventListener('click', e => {
    if (e.target.dataset.openMenu) {
      header.classList.add(activeCls)
    }

    if (e.target.dataset.closeMenu) {
      header.classList.remove(activeCls)
    }
  })
}

animated()
toggleMenu()
toggleHeader()
