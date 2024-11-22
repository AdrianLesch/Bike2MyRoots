
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
