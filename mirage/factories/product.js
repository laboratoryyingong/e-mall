import {
  Factory
} from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Product-number-${i}`; // add a faker product name
  },

  price() {
    let min = 0;
    let max = 999;

    return Math.floor(Math.random() * (max - min + 1));
  },

  rating() {
    let min = 0;
    let max = 5;

    return Math.floor(Math.random() * (max - min + 1));
  },

  intro() {
    let intro = "A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.";
    return intro;
  },

  image(){
    return "/assets/images/sample.png"
  },

  afterCreate(product, server) {
    server.create('product-detail', {
      product
    });
  }

});
