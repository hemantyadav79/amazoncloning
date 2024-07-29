// Get the element
const backToTop = document.querySelector('.foot-panel1');

// Add an event listener to the element
backToTop.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});