Vue.component('loadDynamicComponent', {
    data (){
        return {
            components: ['componentOne', 'componentTwo', 'componentThree'],
            currentComponent: 'componentOne'
        }
    },
    methods:{
        changeComponent (component){
            this.currentComponent = component;
        }
    },
    template: `
    <div>
        <h3>Dynamic components</h3>
        <button v-for="component in components" :key="component" @click="changeComponent(component)">
            Seleccionar {{ component }}
        </button> 
        <component v-bind:is="currentComponent" />
    </div>
    `
})