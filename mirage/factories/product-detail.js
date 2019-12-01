import {
  Factory
} from 'ember-cli-mirage';

export default Factory.extend({

    desc(i) {
        return `Description-${i}`; // Description-1, Description-2
    }

});
