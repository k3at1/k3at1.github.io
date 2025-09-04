// lightbox.js
export function setupLightbox() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest("img[data-full]");
    if (!t) return;
    const d = document.createElement("dialog");
    d.className = "lightbox";
    d.innerHTML = `<img src="${t.dataset.full}" alt=""><form method="dialog"><button autofocus>Close</button></form>`;
    document.body.appendChild(d);
    d.showModal();
    d.addEventListener("close", () => d.remove());
  });
}
