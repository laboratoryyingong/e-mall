import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A } from '@ember/array';

module('Integration | Component | cart-item', function(hooks) {
  setupRenderingTest(hooks);

  test('should render cart item block correctly', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('items',A([{"name":"Product-number-0","price":434,"rating":3,"intro":"intro","productDetails":null}]))
    this.set('name', 'Product-number-0');
    this.set('UnitPrice', 9);
    this.set('UnitNumber', 100);

    await render(hbs`<CartItem  @name={{this.name}} @items={{this.items}} />`);

    assert.equal(this.element.querySelectorAll('td')[2].innerHTML, 'Product-number-0');
    assert.equal(this.element.querySelectorAll('td')[3].innerHTML, 434);
    assert.equal(this.element.querySelectorAll('td')[4].innerHTML, 1);
    assert.equal(this.element.querySelectorAll('td')[5].innerHTML, '434.00');

  });

  test('should parent component action fired', async function(assert) {

    this.set('items',A([{"name":"Product-number-0","price":434,"rating":3,"intro":"intro","productDetails":null}]))
    this.set('name', 'Product-number-0');
    this.set('UnitPrice', 9);
    this.set('UnitNumber', 100);
    this.set('updateItemList', ()=>{

      this.set('fired', true);
        
    })

    await render(hbs`<CartItem  @name={{this.name}} @items={{this.items}} @action_update={{action this.updateItemList}} />`);

    //Click on the button
    await click('.btn');

    assert.equal(this.fired, true);

  });
});
