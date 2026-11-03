const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((section) => {
  revealObserver.observe(section);
});

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalcontent");

function openModal(...content) {
  modalContent.replaceChildren(...content);
  modal.showModal();
}

function closeModal() {
  modal.close();
}

function openSampleReport() {
  const report = document.querySelector("#paper").cloneNode(true);
  report.removeAttribute("id");

  const note = document.createElement("p");
  note.textContent =
    "این نمونه برای بررسی طراحی وب‌سایت است؛ گزارش واقعی برنامه در نسخه نهایی جایگزین می‌شود.";

  openModal(report, note);
}

function openStoreNotice(storeName) {
  const title = document.createElement("h3");
  title.textContent = `دانلود از ${storeName}`;

  const message = document.createElement("p");
  message.textContent =
    "این دکمه در پیش‌نمایش طراحی است. لینک واقعی فروشگاه پیش از انتشار وب‌سایت به آن متصل می‌شود.";

  openModal(title, message);
}

document.querySelector("#close").addEventListener("click", closeModal);
document.querySelector("#sample").addEventListener("click", openSampleReport);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.querySelectorAll("[data-store]").forEach((button) => {
  button.addEventListener("click", () => {
    openStoreNotice(button.dataset.store);
  });
});

function detectDevicePlatform() {
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  const userAgent = navigator.userAgent || "";

  if (/android/i.test(platform) || /android/i.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";

  // iPadOS can identify itself as a Mac while still reporting touch input.
  if (/mac/i.test(platform) && navigator.maxTouchPoints > 1) return "ios";

  return null;
}

function showRelevantStores() {
  const platform = detectDevicePlatform();
  if (!platform) return;

  document.querySelectorAll("[data-platform]").forEach((button) => {
    button.hidden = button.dataset.platform !== platform;
  });
}

showRelevantStores();
