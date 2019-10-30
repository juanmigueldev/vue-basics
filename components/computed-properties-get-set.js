Vue.component('computed-properties-get-set', {
    data: function (){
        return {
            amount: 0
        }
    },
    computed:{
        amountFormatted: {
            get(){
                return `${this.amount}`;
            },
            set(value){
                this.amount = value;
            }
        }
    },
    template: `
    <div>
        <h2>Computed Properties with getters and setters</h2>
        <input v-model="amount" />
        <p> {{ amountFormatted | currency_filter('$') }}</p>
    </div>
    `
})