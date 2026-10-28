// Floating description that follows the cursor over project rows
const preview = document.querySelector(".preview");
const canHover = window.matchMedia("(hover: hover)").matches;

if (canHover) {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("mouseenter", () => {
      preview.textContent = project.dataset.desc;
      preview.classList.add("show");
    });
    project.addEventListener("mouseleave", () => {
      preview.classList.remove("show");
    });
    project.addEventListener("mousemove", (e) => {
      preview.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
    });
  });
  window.addEventListener("scroll", () => preview.classList.remove("show"), { passive: true });
}

// Fade sections in as they scroll into view
const revealTargets = document.querySelectorAll(".lede, .project, .about-body, .say-hi, .links");
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
