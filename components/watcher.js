Vue.component('watcher', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`
            } catch (ex) {
                console.log(ex);
            }
        }
    },
    watch:{
        user (newVal, oldVal){
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
    <div>
        <h2>Watchers with Vuejs 2</h2>  
        <button v-on:click="randomUser"> Generate random user </button> 
        <div v-show="user">User: {{ user }}</div>     
        <div v-show="oldUser">Old User: {{ oldUser }}</div>  
    </div>
    `
})