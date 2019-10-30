Vue.component('props', {
    //props: ['name', 'props'],
    props: {
        name:{
            type: String,
            required: true
        },
        surname:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true,
            validator: value => {
                if(value < 18){
                    console.warn('Not adult');
                    return false;
                }else{
                    return true;
                }
            }
        }
    },
    template: `
    <div>
        <h2>Props with Vue js 2</h2>
        <p> {{ name }}  {{ surname }} {{ age }} </p>
    </div>
    `
})