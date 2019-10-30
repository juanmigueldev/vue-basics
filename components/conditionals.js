Vue.component('conditionals', {
    data () {
        return{
            age: 10
        }
    },
    template: `
    <div>
        <h2>Vue conditionals</h2>
        <input v-model="age" />
        <p v-if="age < 18" >Under-age</p>
        <p v-else-if="age >= 18 && age < 70" >Adult</p>
        <p v-else >Older</p>
    </div>
    `
})