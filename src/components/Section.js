export default class Section {
    constructor({ items, renderer }, container) {
      this._itemsRendered = items;
      this._renderer = renderer;
      this._container = container;
    }
  
    renderer() {
      this._itemsRendered.reverse().forEach((element) => {
        this._renderer(element);
      });
    }

    addItem(element) {
      this._container.prepend(element);
    }
  }  

