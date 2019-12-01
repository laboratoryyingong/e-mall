import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({


  init() {
    this._super(...arguments)

    setInterval(() => {
      let sessionData = JSON.parse(this.getSessionData()) === null ? [] : JSON.parse(this.getSessionData());
      let count = sessionData.length;
      set(this, "count", count);
    }, 500);

  },

  getSessionData() {
    let data = window.sessionStorage.getItem('max_cart');
    if (data === undefined) {
      window.sessionStorage.setItem('max_cart', '');
      data = '';
    }
    return data;
  },

  setSessionData(products) {
    let str = JSON.stringify(products);
    window.sessionStorage.setItem('max_cart', str);

    let data = window.sessionStorage.getItem('max_cart');
    return data;
  }
});
