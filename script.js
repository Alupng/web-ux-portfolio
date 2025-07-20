document.addEventListener('DOMContentLoaded', () => {
  const fadeIns = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(section => {
    observer.observe(section);
  });
});
