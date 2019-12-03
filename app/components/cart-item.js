import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

    UnitPrice: 0,
    UnitNumber: 0,
    TotalPrice: 0,
    items: A([]),

    init() {
        this._super(...arguments);

        if(this.items.length > 0){
            /**
             * @todo: one scenario, if price could change dynamically?
             */
            this.UnitPrice = this.items[0].price;
            this.UnitNumber = this.items.length;
            this.TotalPrice = (this.UnitPrice * this.UnitNumber).toFixed(2)
        }


    },

    actions: {
        removeItem() {
            this.get('action_update')(this.name);
        }
    }
});
