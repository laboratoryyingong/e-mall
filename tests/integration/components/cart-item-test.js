import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cart-item', function(hooks) {
  setupRenderingTest(hooks);

  test('should render cart item block', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('items',[{"name":"Product-number-0","price":434,"rating":3,"intro":"intro","productDetails":null}])
    this.set('name', 'Product-number-0');
    this.set('UnitPrice', 9);
    this.set('UnitNumber', 100);


    await render(hbs`<CartItem />`);

    assert.equal(this.element.querySelector('td')[1].innerHTML, 'Max');

  });
});
