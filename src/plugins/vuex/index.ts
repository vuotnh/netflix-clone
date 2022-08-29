import { createLogger, createStore } from 'vuex';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
    plugins: process.env.mode === 'debug' ? [createLogger()] : [],
})