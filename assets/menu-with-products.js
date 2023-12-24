class MenuWithProducts extends HTMLElement {
  constructor() {
    super();
    this.header = document.querySelector(".site-header ");
    this.triggerMegaMenu = document.querySelector("[data-trigger-megamenu]");
    this.buttons = this.querySelectorAll("[data-trigger-submenu]");
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
    this.triggerMegaMenu.addEventListener("click", () => {
      this.classList.toggle("active");
      this.header.classList.toggle("active");
    });

    this.header.addEventListener("mouseleave", () => {
      this.classList.remove("active");
      this.header.classList.remove("active");
    });
  }
}

customElements.define("menu-with-products", MenuWithProducts);
