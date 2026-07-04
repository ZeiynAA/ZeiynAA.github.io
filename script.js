/* zeiyn.com — progressive enhancement only.
   Active nav state is set in the HTML via aria-current, so navigation works
   with JS disabled. This file just powers the theme toggle + footer year. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ----- Theme toggle -------------------------------------------------
     The <head> inline script has already applied the saved theme before
     first paint (no flash). Here we just wire up the button. */
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var label = function () {
      var isDark = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      toggle.textContent = isDark ? "☀ Light" : "☾ Dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    };
    label();
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }

  /* ----- Footer year --------------------------------------------------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
