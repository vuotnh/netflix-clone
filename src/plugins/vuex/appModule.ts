import { Action, getModule, Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '@/plugins/vuex';

@Module({
    name: 'app',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})

class AppModule extends VuexModule {
    isCollapse = false;

    @Action
    setIsCollapseSidebar() {
        this.SET_IS_COLLAPSE_SIDEBAR();
    }

    @Mutation
    SET_IS_COLLAPSE_SIDEBAR() {
        this.isCollapse = !this.isCollapse;
    }
}

export const appModule = getModule(AppModule);