function makeAccessigbleButtonsFocusable() {
  const $accessibleButtons = document.querySelectorAll('[role="button"]');

  [...$accessibleButtons].forEach(($button) =>
    $button.setAttribute("tabindex", 0)
  );
}

makeAccessigbleButtonsFocusable();
