Vue.component('slots', {
    template: `
    <div>
        <h2>Slots, layout example</h2>
        <div>
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
    `
})