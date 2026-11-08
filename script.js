const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((section) => {
  revealObserver.observe(section);
});

function initializeHeroSlideshow() {
  const slideshow = document.querySelector("[data-hero-slideshow]");
  if (!slideshow) return;

  const images = [...slideshow.querySelectorAll(".hero-art")];
  const headings = images.map((image) => document.getElementById(image.dataset.heading));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let timer;
  let advancing = false;

  function showSlide(index) {
    currentIndex = index;
    images.forEach((image, imageIndex) => {
      const active = imageIndex === index;
      image.classList.toggle("is-active", active);
      image.setAttribute("aria-hidden", String(!active));
      headings[imageIndex].classList.toggle("is-active", active);
      headings[imageIndex].setAttribute("aria-hidden", String(!active));
    });
  }

  async function advance() {
    if (advancing || document.hidden || reducedMotion.matches) return;
    advancing = true;
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    if (nextImage.dataset.src) {
      nextImage.src = nextImage.dataset.src;
      delete nextImage.dataset.src;
    }
    try {
      await nextImage.decode();
      if (nextImage.naturalWidth > 0 && !document.hidden && !reducedMotion.matches) {
        showSlide(nextIndex);
      }
    } catch {
      // Keep the current slide visible if a later image cannot be decoded.
    } finally {
      advancing = false;
    }
  }

  function updatePlayback() {
    window.clearInterval(timer);
    if (document.hidden || reducedMotion.matches || images.length < 2) return;
    timer = window.setInterval(advance, 3000);
  }

  images[0].decode().catch(() => {}).finally(() => {
    if (images[0].naturalWidth === 0) return;
    showSlide(0);
    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", updatePlayback);
    updatePlayback();
  });
}

initializeHeroSlideshow();
