Vue.component('vmodelCheckboxes', {
    data () {
        return {
            frameworks: []
        }
    },
    template:`
        <div>
            <h2>Working with v-model with arrays</h2>
            <input type="checkbox" id="vuejs2" value="vuejs2" v-model="frameworks" />
            <label for="vuejs2"> Vuejs 2</label>
            <input type="checkbox" id="reactjs" value="reactjs" v-model="frameworks" />
            <label for="reactjs"> React js</label>
            <input type="checkbox" id="angular" value="angular" v-model="frameworks" />
            <label for="angular"> Angular </label>
            <p>Frameworks seleccionados: {{ frameworks }}</p>
        </div>
    `
})