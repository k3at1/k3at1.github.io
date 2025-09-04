// guestbook.js
const API = "https://YOUR-VERCEL-APP.vercel.app/api/guestbook"; // set yours

export function setupGuestbook() {
  const form = document.getElementById("gb");
  const list = document.getElementById("msgs");
  if (!form || !list) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd)),
    });
    form.reset();
    loadMessages(list);
  };

  loadMessages(list);
}

async function loadMessages(list) {
  try {
    const res = await fetch(API);
    const data = await res.json();
    list.innerHTML = (data.messages || [])
      .map(
        (m) =>
          `<li><b>${escapeHtml(m.name)}</b> — ${new Date(
            m.at
          ).toLocaleString()}<br>${escapeHtml(m.text)}</li>`
      )
      .join("");
  } catch {
    list.innerHTML = "<li>Guestbook unavailable right now.</li>";
  }
}

function escapeHtml(s = "") {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
}
