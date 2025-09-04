// main.js
import { renderGallery, setupFilters } from "./gallery.js";
import { setupLightbox } from "./lightbox.js";
import { setupGuestbook } from "./guestbook.js";

// optional: mobile nav + smooth scroll + footer year
initNav();
renderGallery(); // draw cards
setupFilters(); // tag buttons
setupLightbox(); // zoom images
setupGuestbook(); // wire form + list

function initNav() {
  const nav = document.getElementById("nav");
  const hamburger = document.getElementById("hamburger");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const open = nav.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("click", () => nav.classList.remove("show"))
      );
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}
