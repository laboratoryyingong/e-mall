import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        searchByKeywords(param) {
            if (param !== '') {
                return this.store
                            .query('product', {name: param})
                            .then((results) => {
                                return {query: param, results: results}
                            });
            } else {

                return this.store
                            .findAll('product',{include: 'product-detail'})
                            .then((results) => {
                                return { query: param, results: results };
                            });

            }

 
        }
    }
});
