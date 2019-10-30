Vue.component('parent-data', {
    template:`
        <div>
            <h2>Accessing to parent data</h2>
            <p>
               Parent data:  {{ $parent.appName }}
            </p>
        </div>
    `
});