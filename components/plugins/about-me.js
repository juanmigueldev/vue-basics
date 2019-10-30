const AboutMe = {
    install: (Vue, options) => {
        const { job } = options;
        Vue.prototype.$me = (name, age) => {
            return `My name is ${name} i have ${age} years old and i work as ${job}`
        }
    }
};

Vue.use(AboutMe, {
    job: 'Web developer'
});