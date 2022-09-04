<template>
    <div class="main-layout">
        <MainHeader/>
        <div class="main-board">
            <div class="menu-sidebar">
                <SideBar :isCollapse="isCollapse"/>
            </div>
            <div class="main-content">
                Main-board
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { appModule } from '@/plugins/vuex/appModule';
import { Options, Vue } from 'vue-class-component';
import MainHeader from './components/Header.vue';
import SideBar from './components/SideBar.vue'
@Options({
    components: {
       MainHeader,
       SideBar
    }
})

export default class MainLayout extends Vue {

    get isCollapse() {
        return appModule.isCollapse;
    }

}
</script>

<style lang="scss" scoped>
.main-board {
    display: flex;
    .menu-sidebar{
        width: 250px;
    }
}

</style>