import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/plugins/vuex/index';

@Module({ dynamic: true, store, namespaced: true, stateFactory: true, name: 'HomePage' })
class HomePageModule extends VuexModule {
  
}
export const homePageModule = getModule(HomePageModule);