import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  count: 0,
  cart: service('cart'),

  init() {
    this._super(...arguments);
    
    setInterval(() => {
      this.cart.update();
      this.set('count', this.cart.sessionCount);
    }, 500);

  }

});
