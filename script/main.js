document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".product-slider");
  
    sliders.forEach(slider => {
      const images = slider.querySelectorAll("img");
      const leftArrow = slider.querySelector(".slider-arrow.left");
      const rightArrow = slider.querySelector(".slider-arrow.right");
  
      let current = 0;
  
      const showImage = (index) => {
        images.forEach((img, i) => {
          img.classList.toggle("active", i === index);
        });
      };
  
      leftArrow.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      });
  
      rightArrow.addEventListener("click", () => {
        current = (current + 1) % images.length;
        showImage(current);
      });
    });
  });
  