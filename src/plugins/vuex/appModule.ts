import { Action, getModule, Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '@/plugins/vuex';

@Module({
    name: 'app',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})

class AppModule extends VuexModule {}

export const appModule = getModule(AppModule);