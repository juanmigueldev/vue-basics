Vue.component('loops', {
    data () {
        return{
            frameworks: [
                { id: 1, name: 'Vuejs 2'},
                { id: 2, name: 'Reactjs'},
                { id: 3, name: 'Angular'},
                { id: 4, name: 'Ember'},
                { id: 5, name: 'Laravel'},
                { id: 6, name: '.Net Core'}
            ]
        }
    },
    template: `
    <div>
        <h2>Loops with v-for</h2>
        <ul v-if="frameworks.length">
            <li v-for="(framework, index) in frameworks" :key="framework.id"> 
              ({{ index }}) | {{ framework.name }} 
            </li>
        </ul>
    </div>
    `
})