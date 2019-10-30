Vue.component('child-methods', {
    data () {
        return {
            componentName: 'Child Method Component'
        }
    },
    methods:{
        showComponentName(){
            console.log("Call to method showComponentName", this.componentName);
        }
    },
    template:`
        <div>
            <h2>Accessing to child methods using references</h2>
        </div>
    `
});