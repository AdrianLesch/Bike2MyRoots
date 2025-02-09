
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


  //Contact Form Handler

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Show loading or processing status
    const formResponse = document.getElementById("formResponse");
    formResponse.textContent = "Sending...";
  
    // Send form data via EmailJS
    emailjs.sendForm("Bike To My Roots", "template_jdsw4xl", this)
      .then(
        function () {
          formResponse.textContent = "Message sent successfully!";
          document.getElementById("contactForm").reset();
        },
        function (error) {
          formResponse.textContent = "Failed to send message. Please try again.";
          console.error("Error:", error);
        }
      );
  });
  