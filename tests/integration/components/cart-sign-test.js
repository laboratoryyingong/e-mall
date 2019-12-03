import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cart-sign', function(hooks) {
  setupRenderingTest(hooks);

  test('the badge renders correct count number', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('count', 0);
    await render(hbs`<CartSign />`);
    
    assert.equal(this.element.querySelector(".badge").innerHTML.trim(), 0);


  });
});
