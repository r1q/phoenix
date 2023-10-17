/* CONFIG */

Phoenix.set({
  daemon: true,
  openAtLogin: true,
});

// Key.on("z", ["ctrl", "shift"], () => {
//   const screen = Screen.main().flippedVisibleFrame();
//   const window = Window.focused();
//   // const size = Window.focused().size();
//   // const screens = Screen.all();
//   // Phoenix.notify(`screens: ${screens}`);
//   // Window.focused().setTopLeft({ x: 300, y: 0 });
//   // Phoenix.reload();
//   if (window) {
//     window.setTopLeft({
//       x: screen.x + screen.width / 2 - window.frame().width / 2,
//       y: screen.y + screen.height / 2 - window.frame().height / 2,
//     });
//     // Phoenix.notify("Done");
//     // Phoenix.notify(`${size.width} x ${size.height}`);
//   }
// });
