document.addEventListener("click", (event) => {
  const image = event.target.closest("[data-lightbox]");
  const overlay = document.querySelector(".lightbox");
  const overlayImage = overlay?.querySelector("img");
  if (image && overlay && overlayImage) {
    overlayImage.src = image.getAttribute("src");
    overlay.classList.add("open");
    return;
  }
  if (event.target === overlay) {
    overlay.classList.remove("open");
    overlayImage.removeAttribute("src");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const overlay = document.querySelector(".lightbox");
    overlay?.classList.remove("open");
    overlay?.querySelector("img")?.removeAttribute("src");
  }
});
