import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cart/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cart/index');
    assert.ok(route);
  });
});
