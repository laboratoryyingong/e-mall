import Service from '@ember/service';

export default Service.extend({
  sessionItems: null,
  sessionCount: 0,

  init() {
    this._super(...arguments);
    this.update();
  },

  update() {

    // set session record data
    let items = JSON.parse(this.getSessionItems()) === null ? [] : JSON.parse(this.getSessionItems());
    this.setSessionItems(items);
    this.set('sessionItems', items);

    // set session record number
    let count = items.length;
    this.set('sessionCount', count);

  },

  addSessionItems(item){

    let parseItem = JSON.parse(item);

    // add new record 
    let items = JSON.parse(this.getSessionItems()) === null ? [] : JSON.parse(this.getSessionItems());
    items.push(parseItem);

    // sync to sessionStorage
    window.sessionStorage.setItem('max_cart', JSON.stringify(items));
    this.set('sessionItems', items);

  },

  removeSessionItems(item){

  },

  getSessionItems() {
    let data = window.sessionStorage.getItem('max_cart');
    if (data === undefined) {
      window.sessionStorage.setItem('max_cart', '');
      data = '';
    }
    return data;
  },

  setSessionItems(items) {
    let str = JSON.stringify(items);
    window.sessionStorage.setItem('max_cart', str);

    let data = window.sessionStorage.getItem('max_cart');
    return data;
  }


});
