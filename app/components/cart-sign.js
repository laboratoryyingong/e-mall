import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  count: 0,
  cart: service('cart'),

  init() {
    this._super(...arguments);

    /**
     *  @todo: 
     *  this demo I set the interval to listen to cart record change. In the real world,
     *  I prefer to use event to trigger change. Or maybe use socket to active push from
     *  server side.
     */
    
    setInterval(() => {
      this.cart.update();
      this.set('count', this.cart.sessionCount);
    }, 500);

  }

});
