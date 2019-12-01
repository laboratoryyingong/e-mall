export default function () {

  this.namespace = '/api';

  this.get('/products', async function (schema, request) {

    if (request.queryParams.name !== undefined) {

      let products = await schema.products.all();

      let searchResult = products.filter((product) => {
        let productName = product.name.toLocaleLowerCase();
        let searchName = request.queryParams.name.toLocaleLowerCase();
        return productName.indexOf(searchName) !== -1;
      });

      return searchResult;
    } else {
      return schema.products.all();
    }

  });

  this.get('/products/:id', function (schema, request) {
    let id = request.params.id;
    return schema.products.find(id);
  });

  this.passthrough();
}
