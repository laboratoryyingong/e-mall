import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list products', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /contact', async function(assert) {
    await visit('/contact');
    assert.equal(currentURL(), '/contact');
  });
  

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  //todo:


});
