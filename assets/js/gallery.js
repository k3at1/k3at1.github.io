// gallery.js
export const GALLERY = [
  {
    title: "Sleepy Cat",
    thumb: "assets/img/cat-thumb.jpg",
    full: "assets/img/cat-full.jpg",
    tags: ["cat", "blue"],
    desc: "Blue-pen doodle.",
  },
  // more items...
];

export function renderGallery(items = GALLERY) {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card" data-tags="${item.tags.join(" ")}">
        <img src="${item.thumb}" alt="${item.title}" data-full="${item.full}">
        <h3>${item.title}</h3>
        <p>#${item.tags.join(" #")}</p>
        ${item.desc ? `<p>${item.desc}</p>` : ""}
      </article>
    `
    )
    .join("");
}

export function setupFilters() {
  const grid = document.getElementById("grid");
  document.querySelectorAll(".filters [data-filter]").forEach((btn) => {
    btn.onclick = () => {
      const tag = btn.dataset.filter;
      grid.querySelectorAll(".card").forEach((c) => {
        c.style.display = !tag || c.dataset.tags.includes(tag) ? "" : "none";
      });
    };
  });
}
