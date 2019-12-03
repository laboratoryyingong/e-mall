import Component from '@ember/component';

export default Component.extend({

    UnitPrice: 0,
    UnitNumber: 0,
    TotalPrice: 0,

    init() {
        this._super(...arguments);

        //todo: if price changed?
        this.UnitPrice = this.items[0].price;
        this.UnitNumber = this.items.length;
        this.TotalPrice = (this.UnitPrice * this.UnitNumber).toFixed(2)
    },

    actions: {
        removeItem() {
            this.get('action_update')(this.name);
        }
    }
});
