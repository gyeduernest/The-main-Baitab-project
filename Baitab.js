
function lockScroll() {
    var menuContainer = document.querySelector(".Menu-container");
    menuContainer.style.overflow = 'hidden';
  }
  
  function unlockScroll() {
    var menuContainer = document.querySelector(".post-area");
    menuContainer.style.overflow = '';
  }