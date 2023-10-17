/* NOTES */

setEventHandler("windowDidOpen", magicNotesOpen);

/* HANDLER */

function magicNotesOpen(window) {
  if (!window.isNormal() || !window.isMain()) return;

  const name = window.app().name();

  if (!/Notes/.test(name) || false) return;

  setFrame("top-left", window);
}
