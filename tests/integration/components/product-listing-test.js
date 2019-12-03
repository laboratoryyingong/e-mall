import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('product', {"image":"/assets/images/sample.png","intro":"A product description ","rating":5,"price":421,"name":"Product-number-0"});

    await render(hbs`<ProductListing @product={{this.product}}></ProductListing>`);

    assert.equal(this.element.querySelector('.card-title').textContent, 'Product-number-0');
 
    // todo: add more test
  });
});
