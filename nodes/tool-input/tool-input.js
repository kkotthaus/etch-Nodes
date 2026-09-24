/* Node: tool-input
   - Klick aufs Werkzeug-Icon öffnet/schließt das Feld, beim Öffnen wird fokussiert
   - Escape schließt und setzt den Fokus zurück aufs Icon
   - Klick außerhalb schließt, solange das Feld leer ist
   - Events: "tool-input:toggle" (detail.open), "tool-input:submit" (detail.value, bei Enter) */
(() => {
  const initToolInput = (root) => {
    if (root.dataset.toolInputReady) return;
    root.dataset.toolInputReady = "true";

    const toggle = root.querySelector(".tool-input__toggle");
    const field = root.querySelector(".tool-input__field");
    const input = root.querySelector(".tool-input__input");
    if (!toggle || !field || !input) return;

    const isOpen = () => root.classList.contains("tool-input--open");

    const setOpen = (open) => {
      root.classList.toggle("tool-input--open", open);
      toggle.setAttribute("aria-expanded", String(open));
      const label = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
      if (label) toggle.setAttribute("aria-label", label);
      field.inert = !open;
      if (open) input.focus({ preventScroll: true });
      root.dispatchEvent(new CustomEvent("tool-input:toggle", { bubbles: true, detail: { open } }));
    };

    toggle.addEventListener("click", () => setOpen(!isOpen()));

    root.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        root.dispatchEvent(new CustomEvent("tool-input:submit", { bubbles: true, detail: { value: input.value } }));
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (isOpen() && !root.contains(event.target) && input.value.trim() === "") {
        setOpen(false);
      }
    });
  };

  const initAll = () => document.querySelectorAll("[data-tool-input]").forEach(initToolInput);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
