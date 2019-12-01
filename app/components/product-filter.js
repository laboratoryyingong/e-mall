import Component from '@ember/component';

export default Component.extend({
    classNames: ['filter'],
    value: '',

    init(){
        this._super(...arguments);
        this.filter('')
            .then((allResults)=>{
                this.set('results', allResults.results);
            });
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.value.trim();
            let filterAction = this.filter;
            filterAction(filterInputValue).then((filterResults) => {
                if (filterResults.query.trim() === this.value.trim()) {
                  this.set('results', filterResults.results);
                }
            });
        }
    }
});
