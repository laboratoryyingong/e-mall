import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    cart: service('cart'),

    init(){
        this._super(...arguments);
    },

    actions: {
        addToCart() {

            this.cart.addSessionItems(JSON.stringify(this.product));

        }
    }
});
