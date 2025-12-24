// src/view/abstract-view.js
export default class AbstractView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = this.#createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    throw new Error('Abstract method: you must implement template getter');
  }

  #createElement(template) {
    const div = document.createElement('div');
    div.innerHTML = template.trim();
    return div.firstElementChild;
  }

  removeElement() {
    this.#element = null;
  }


  getElement() {
    return this.element;
  }
}
