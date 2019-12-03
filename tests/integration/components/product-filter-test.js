import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const PRODUCTS = [{image: "/assets/images/sample.png", intro: "1", rating: 2, price: 823, name: "Product-number-0"},
{image: "/assets/images/sample.png", intro: "2", rating: 6, price: 435, name: "Product-number-1"},
{image: "/assets/images/sample.png", intro: "3", rating: 4, price: 999, name: "Product-number-0"}];

const SEARCH_PRODUCT = [{image: "/assets/images/sample.png", intro: "1", rating: 2, price: 823, name: "Product-number-0"}];

module('Integration | Component | product-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    assert.ok( true, "pass" );
  });

  test('should load all products', async function (assert) {
    // this.set('searchByKeywords', () => Promise.resolve({ results: PRODUCTS }));

    this.set('searchByKeywords',() => Promise.resolve({ results: PRODUCTS }));

    await render(hbs`
      <ProductFilter @filter={{action searchByKeywords }} as |filteredResults|>
        <div class="container">
          <div class="row">
            <div class="card-columns">
              {{#each filteredResults as |product|}}
                <ProductListing @product={{product}}></ProductListing>
              {{/each}}
            </div>
          </div>
        </div>
      </ProductFilter>
    `);

    await settled();

    assert.equal(this.element.querySelectorAll('.card-title').length, 3);

  });

  test('should list include search key word', async function (assert) {

    this.set('searchByKeywords', (param) => {
      if (param !== '') {
        return Promise.resolve({
          query: param,
          results: SEARCH_PRODUCT });
      } else {
        return Promise.resolve({
          query: param,
          results: PRODUCTS });
      }
    });
  
    await render(hbs`
      <ProductFilter @filter={{action searchByKeywords }} as |filteredResults|>
        <div class="container">
          <div class="row">
            <div class="card-columns">
              {{#each filteredResults as |product|}}
                <ProductListing @product={{product}}></ProductListing>
              {{/each}}
            </div>
          </div>
        </div>
      </ProductFilter>
    `);
  
    // fill in the input field with 'Product-number-0'
    await fillIn(this.element.querySelector('input'),'Product-number-0');
    await triggerKeyEvent(this.element.querySelector('input'), "keyup", 83);
    await settled();
  
    assert.equal(this.element.querySelectorAll('.card').length, 1);
    assert.dom(this.element.querySelector('.card-title')).hasText('Product-number-0');

  });
});
