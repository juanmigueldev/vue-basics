Vue.component('methods', {
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
    methods:{
        sayHello(){
            alert(`Hello ${this.fullName}`);
        }
    },
    template: `
    <div>
        <h2>Execute methods with vue js</h2>
        <p @click="sayHello"> Click here to execute the "sayHello" method </p>
    </div>
    `
})