import DS from 'ember-data';

export default DS.Model.extend({
    desc: DS.attr(),
    product: DS.belongsTo('product')
});
