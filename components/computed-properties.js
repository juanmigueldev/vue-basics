Vue.component('computed-properties', {
    data: function (){
        return {
            name: 'Juan',
            surname: 'Chacón'
        }
    },
    computed:{
        fullName: function(){
            return `${this.name} ${this.surname}`
        }
    },
    template: `
    <div>
        <h2>Computed Properties</h2>
        <input v-model="name" />
        <input v-model="surname" />
        <p> {{ fullName }}</p>
    </div>
    `
})