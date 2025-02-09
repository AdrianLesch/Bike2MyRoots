async function loadGallery() {
    const carouselInner = document.querySelector('.carousel-inner');
    
    try {
      const response = await fetch('./resources/scripts/gallery.json');
      const images = await response.json();
  
      // Clear the default items
      carouselInner.innerHTML = '';
  
      images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
        carouselItem.innerHTML = `
          <img src="${image.src}" class="d-block w-100" alt="${image.alt}">
        `;
        carouselInner.appendChild(carouselItem);
      });
  
    } catch (error) {
      console.error('Error loading gallery:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadGallery);
  