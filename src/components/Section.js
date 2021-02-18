export default class Section {
  constructor({renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.append(element);
  }

  _clear(){
    this._container.innerHTML = '';
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    this._clear();
    this._items = items;
    items.forEach(item => {
      this._renderer(item);
    });
  }
}
