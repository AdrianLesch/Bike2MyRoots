
//Scroll to top script

// Show the button when scrolled down 200px
window.onscroll = function () {
  const scrollButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    user_name: this.user_name.value,
    user_email: this.user_email.value,
    message: this.message.value
  };

  emailjs.send('BikeToMyRoots', 'template_jdsw4xl', formData)
    .then(function (response) {
      document.getElementById('formResponse').textContent = 'Message sent successfully!/Nachricht erfolgreich übermittelt!';
      
      // Auto-response
      emailjs.send('BikeToMyRoots', 'template_1sg89qt', formData)
        .then(function () {
          console.log('Auto-response sent successfully!');
        })
        .catch(function (error) {
          console.error('Failed to send auto-response:', error);
        });
    })
    .catch(function (error) {
      document.getElementById('formResponse').textContent = 'Failed to send message.';
      console.error(error);
    });

  this.reset();
});



