import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | Route | products/index', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', async function(assert) {
    let route = this.owner.lookup('route:products/index');
    assert.ok(route);

    await visit('/products');
    assert.equal(this.element.innerHTML, 3);
  });
});
