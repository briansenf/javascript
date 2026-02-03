const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalStatic = document.getElementById("modalStaticContent");
const modalBox = modal.querySelector(".modal");
const closeBtn = modal.querySelector(".modal-close");

let lastFocusedElement = null;
let reactRoot = null;
const modalReactContainer = document.getElementById("modalReactRoot");

function isModalOpen() {
  return modal.classList.contains("is-open");
}

function trapFocus(e) {
  if (e.key !== "Tab") return;

  const focusable = modal.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function handleBackdropClick(e) {
  if (e.target === modal) closeModal();
}

function handleKeydown(e) {
  if (e.key === "Escape" && isModalOpen()) {
    e.preventDefault();
    closeModal();
  }
}

function openModalFromButton(btn) {
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = btn.dataset.modalTitle || "";

  modalStatic.replaceChildren();
  if (btn.dataset.modalId) {
    const tpl = document.getElementById(btn.dataset.modalId);
    if (tpl) modalStatic.appendChild(tpl.content.cloneNode(true));
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  modal.addEventListener("click", handleBackdropClick);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("keydown", trapFocus);

  closeBtn.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  modal.removeEventListener("click", handleBackdropClick);
  document.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("keydown", trapFocus);

  if (lastFocusedElement) lastFocusedElement.focus();
}

// Prevent inside clicks from bubbling to overlay
modalBox.addEventListener("click", e => e.stopPropagation());

// Wire buttons
document.querySelectorAll(".open-modal").forEach(btn =>
  btn.addEventListener("click", () => openModalFromButton(btn))
);

closeBtn.addEventListener("click", closeModal);
