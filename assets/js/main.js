window.addEventListener("DOMContentLoaded", function () {
  var revealEls = document.querySelectorAll(".section");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      el.classList.add("visible");
    });
    return;
  }

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
});