import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    price: DS.attr(),
    rating: DS.attr(),
    intro: DS.attr(),
    image: DS.attr(),
    productDetails: DS.belongsTo('product-detail')
});
