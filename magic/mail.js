/* MAIL */

setEventHandler("windowDidOpen", magicMailOpen);

/* HANDLER */

function magicMailOpen(window) {
  if (!window.isNormal() || !window.isMain()) return;

  const name = window.app().name();

  if (!/Mail/.test(name) || false) return;

  setFrame("right", window);
}
