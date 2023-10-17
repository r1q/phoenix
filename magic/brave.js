/* BRAVE */

setEventHandler("windowDidOpen", magicBraveOpen);

/* HELPERS */

function magicBraveOpen(window) {
  if (!window.isNormal() || !window.isMain()) return;

  const name = window.app().name();

  if (!/Brave Browser/.test(name)) return;

  const title = window.title();

  if (/(chrome-devtools)|(Developer Tools - )/.test(title)) return;

  setFrame("center", window);
}
