import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    productDetail: belongsTo('product-detail') 
});
