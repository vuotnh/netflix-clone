import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/plugins/vuex/index';

@Module({ dynamic: true, store, namespaced: true, stateFactory: true, name: 'ReadBook' })
class ReadBookModule extends VuexModule {
    currentPage = 1;
    @Action
    setCurrentPage(currentPage: number) {
        this.SET_CURRENT_PAGE(currentPage);
    }
    @Mutation
    SET_CURRENT_PAGE(currentPage: number) {
        this.currentPage = currentPage;
    }
}
export const readBookModule = getModule(ReadBookModule);