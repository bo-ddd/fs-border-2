import BorderBoxTwo from './src/component/BorderBoxTwo.vue'
export const BorderBoxTwoPlugin = {
    install: function (app) {
        app.component(BorderBoxTwo.name, BorderBoxTwo)
    }
}