import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        searchByKeywords(param) {

            param = param.trim()

            if (param !== '') {
                return this.store
                            .query('product', {name: param})
                            .then((results) => {
                                return {query: param, results: results}
                            });
            } else {

                return this.store
                            .findAll('product')
                            .then((results) => {
                                return {query: param, results: results};
                            });

            }

 
        }
    }
});
