(() => {
  const header = document.querySelector("[data-menu-root]");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    header.setAttribute("data-menu-open", "false");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    header.setAttribute("data-menu-open", "true");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.getAttribute("data-menu-open") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeMenu();
    }
  });
})();
