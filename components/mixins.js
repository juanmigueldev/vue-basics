let myMixin = {
    mounted(){
        console.log('Mixin init');
        console.log(this.mixinData);
        this.test();
    },
    data (){
        return {
            mixinData: 'Mixin Data'
        }
    },
    methods:{
        test(){
            console.log('Test from mixins');
        }
    }
}

Vue.component('mixins', {
    mixins: [myMixin],
    mounted(){
        console.log('Mounted from component with mixin');
    },
    template: `
    <div>
        <h2>Use of mixins</h2>
        <p> {{ mixinData }} </p>
    </div>
    `
})