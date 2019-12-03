import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | cart', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('test if service is correct', function(assert) {
    let service = this.owner.lookup('service:cart');

    // set three items to web session storage
    service.setSessionItems([1,2,3]);
    assert.equal(service.getSessionItems(), '[1,2,3]');

    // add one items to web session storage
    service.addSessionItems('{"name": "faker"}');
    service.update();

    assert.equal(service.get('sessionCount'), '4');

  });
});
