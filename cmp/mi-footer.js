class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Daniel Martínez Lujan.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
