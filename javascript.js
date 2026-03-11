const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('nav-active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);


const swipers = new Swiper('.swiper', {
     cssMode: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
   slidesPerView: 1,
    // spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    // type: "progressbar",
    clickable:true,
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    dragable:true,
  },
   mousewheel: true,
      keyboard: true,
});



  const headers = document.querySelectorAll('.txt h4');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const paragraph = header.nextElementSibling;

      // Toggle active class
      if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
      } else {
        paragraph.style.display = "block";
      }
    });
  });



  const swiper = new Swiper('.swipers', {
     cssMode: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
   slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    // type: "progressbar",
    clickable:true,
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar

   mousewheel: true,
      keyboard: true,

    breakpoints: {
      448:{
      slidesPerView: 1,
      // spaceBetween: 20
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

// project filtering
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".filter-buttons button");
    const cards = document.querySelectorAll(".project-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // Remove active class
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            cards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

        });
    });

});



// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});