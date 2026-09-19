const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("pointermove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-img");

  image.src = src;
  image.alt = alt;
  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
  // Jangan tutup kalau yang diklik adalah gambar
  if (event && event.target.id === "lightbox-img") {
    return;
  }

  const lightbox = document.getElementById("lightbox");

  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// Tutup dengan tombol Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
