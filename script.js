let slideIndex = 0;
let slides = document.querySelectorAll('.slides img');
let totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    const offset = -index * slideWidth;
    document.querySelector('.slides').style.transform = 'translateX(${offset}px)';
}

function moveSlide(direction) {
    slideIndex += direction;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    showSlide(slideIndex);
}

// Auto-slide feature (interval of 5 seconds)
setInterval(() => {
    moveSlide(1);
}, 5000);


document.addEventListener('scroll', function() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const content = document.querySelector('.content');
    
    const windowHeight = window.innerHeight;
    const contentPosition = contentWrapper.getBoundingClientRect().top;

    if (contentPosition < windowHeight) {
        content.classList.add('slide-in');
    }
});










document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else {
      alert('Message sent successfully!');
      // Here, you can handle further actions like sending the form data to a server
      document.getElementById('contactForm').reset();
    }
  });

  // This JS ensures that elements resize dynamically on window resize
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const eva = document.querySelector('.eva');
    
    if (width < 768) {
      eva.style.padding = '10px'; // Mobile view custom padding
    } else if (width >= 768 && width < 1024) {
      eva.style.padding = '20px'; // Tablet view custom padding
    } else {
      eva.style.padding = '40px'; // Desktop view custom padding
    }
  });
  