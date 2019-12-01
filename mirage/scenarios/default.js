export default function (server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // let detail = server.create('product-detail', { desc: 'desc 1'});

  // server.create('product', {
  //     productDetail: detail,
  //     name: 'Interstellar'
  // })

  server.createList('product', 20);

}
