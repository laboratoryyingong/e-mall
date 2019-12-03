import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  cart: service('cart'),
  items: null,
  groupItems: null,

  init() {
    this._super(...arguments);

    // update data
    this.cart.update();
    let updateItems = this.cart.sessionItems;

    // group items to groups
    let updateGroupItems = updateItems.reduce((r, a) => {
        r[a.name] = [...r[a.name] || [], a];
        return r;
    }, {});

    this.set('items', updateItems);
    this.set('groupItems', updateGroupItems);

  },

  actions: {
    updateItemList(param) {
      
        // update cart record data
        this.cart.update();

        // remove choose item group, then insert rest 
        let data = this.cart.sessionItems;
        let newData = [];

        for(let i = 0; i < data.length; i++){
            if(data[i].name !== param){
                newData.push(data[i]);
            } 
        }

        window.sessionStorage.setItem('max_cart',JSON.stringify(newData));

        // group items to groups
        let updateGroupItems = newData.reduce((r, a) => {
            r[a.name] = [...r[a.name] || [], a];
            return r;
        }, {});

        this.set('items', newData);
        this.set('groupItems', updateGroupItems);

    }
  }

});
