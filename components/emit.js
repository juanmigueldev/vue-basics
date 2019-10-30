Vue.component('emit', {
    data () {
        return {
            carBrand: 'Ford'
        }
    },
    template:`
        <div>
            <h2>Emit events</h2>
            <p @click="$emit('show-car-brand', carBrand)">
                Click here to emit a event to Vue instance 
            </p>
        </div>
    `
});