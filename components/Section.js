export  class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items; //массив данных для добавления на страницу
    this._renderer = renderer; //функция отрисовки элемента
    this._container = document.querySelector(containerSelector); //сюда будут добавляться данные из items
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
