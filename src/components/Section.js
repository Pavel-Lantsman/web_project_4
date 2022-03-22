export default class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }

    addItem(item) {
        const card = this._renderer(item);
        this._container.prepend(card);
    }

    renderItems(cardData) {
        const data = Array.from(cardData);
        data.forEach(item => {
            this.addItem(item);
        });
    }
}