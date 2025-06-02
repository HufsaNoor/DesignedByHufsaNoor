
// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const dropdowns = document.querySelectorAll('.dropdown');

//     // Toggle mobile menu
//     hamburger.addEventListener('click', function() {
//         mobileMenu.classList.toggle('active');
//     });

//     // Handle dropdowns in mobile menu
//     dropdowns.forEach(dropdown => {
//         const toggle = dropdown.querySelector('.dropdown-toggle');
//         toggle.addEventListener('click', function(e) {
//             e.preventDefault();
//             dropdown.classList.toggle('active');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) {
    console.warn("Hamburger or mobile menu not found");
    return;
  }

  // Toggle menu
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });

  // Prevent inside click from closing
  mobileMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Click outside closes it
  document.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});







document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('introWrapper');

  const hideIntro = () => {
    intro.classList.add('hide-intro');
    window.removeEventListener('mousemove', hideIntro);
  };

  // Hide intro on first mouse move
  window.addEventListener('mousemove', hideIntro);
});


















// Optional: Sparkle animation
setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.left = Math.random() * 50 + "%";
    sparkle.style.transition = "all 3s ease-out";
    document.querySelector(".creative-image").appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.style.transform = "scale(0)";
      sparkle.style.opacity = "0";
    }, 10);
  
    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }, 1800);
  


  const dots = document.querySelectorAll('.dot');
    const statements = document.querySelectorAll('.statement');
    let currentIndex = 0;
    let interval;

    function showStatement(targetId) {
      statements.forEach(statement => {
        statement.classList.remove('active');
        if(statement.id === targetId) {
          statement.classList.add('active');
        }
      });

      dots.forEach(dot => {
        dot.classList.remove('active');
        if(dot.dataset.target === targetId) {
          dot.classList.add('active');
        }
      });
    }

    function startCarousel() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % statements.length;
        const targetId = statements[currentIndex].id;
        showStatement(targetId);
      }, 8000);
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        showStatement(dot.dataset.target);
        currentIndex = Array.from(dots).indexOf(dot);
        startCarousel();
      });
    });

    // Initialize carousel
    startCarousel();



    document.addEventListener('DOMContentLoaded', () => {
      const animateValue = (element, start, end, duration, suffix = '') => {
        let startTimestamp = null;
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = Math.floor(progress * (end - start) + start);
          
          element.textContent = `${current}${suffix}`;
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      };
    
      // Configure achievement value animations
      const achievementCards = document.querySelectorAll('.achievement-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const valueElement = card.querySelector('.achievement-value');
            const endValue = parseInt(card.dataset.originalValue, 10);
            const suffix = card.dataset.suffix;
    
            animateValue(valueElement, 0, endValue, 2000, suffix);
            observer.unobserve(card);
          }
        });
      }, { threshold: 0.5 });
    
      // Initialize values and store original data
      achievementCards.forEach(card => {
        const valueElement = card.querySelector('.achievement-value');
        const originalText = valueElement.textContent;
        const match = originalText.match(/(\d+)(\D*)/);
        
        // Store original values on card element
        card.dataset.originalValue = match[1];
        card.dataset.suffix = match[2] || '';
        
        // Set initial display value to 0
        valueElement.textContent = `0${card.dataset.suffix}`;
        
        // Start observing
        observer.observe(card);
      });
    });



    document.addEventListener('DOMContentLoaded', function() {
      const galleryGrid = document.querySelector('.gallery-grid');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      
      let currentScroll = 0;
      const scrollAmount = galleryGrid.offsetWidth * 0.8; // Scroll 80% of viewport
  
      function smoothScrollTo(value) {
          galleryGrid.scrollTo({
              left: value,
              behavior: 'smooth'
          });
      }
  
      prevBtn.addEventListener('click', () => {
          currentScroll = Math.max(currentScroll - scrollAmount, 0);
          smoothScrollTo(currentScroll);
      });
  
      nextBtn.addEventListener('click', () => {
          currentScroll = Math.min(currentScroll + scrollAmount, galleryGrid.scrollWidth - galleryGrid.clientWidth);
          smoothScrollTo(currentScroll);
      });
  
      // Touch & Drag Support
      let isDragging = false;
      let startX;
      let startScrollLeft;
  
      galleryGrid.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.pageX;
          startScrollLeft = galleryGrid.scrollLeft;
          galleryGrid.style.cursor = 'grabbing';
      });
  
      galleryGrid.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX;
          const walk = (x - startX) * 2;
          galleryGrid.scrollLeft = startScrollLeft - walk;
      });
  
      galleryGrid.addEventListener('mouseup', () => {
          isDragging = false;
          galleryGrid.style.cursor = 'grab';
      });
  
      galleryGrid.addEventListener('mouseleave', () => {
          isDragging = false;
          galleryGrid.style.cursor = 'grab';
      });
  
      // Keyboard Navigation
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') prevBtn.click();
          if (e.key === 'ArrowRight') nextBtn.click();
      });
  });




  document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
  });
  
  // Add mouse position tracking for glow effect
document.querySelectorAll('.logo-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty('--x', `${x}px`);
    item.style.setProperty('--y', `${y}px`);
  });
});








