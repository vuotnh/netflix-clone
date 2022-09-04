<template>
    <div class="main-sidebar">
        <el-menu :collapse="isCollapse"
            :unique-opened="true"
            :collapse-transition="false">
            <template
                :key="['d', sidebarIndex].join('-')"
                v-for="(sidebar, sidebarIndex) in sidebars"
            >
                <router-link :to="sidebar.to || ''">
                    <el-menu-item
                        :index="['d', sidebarIndex, Date.now()].join('-')"
                        :class="{
                            'collapsed-menu-item': isCollapse,
                        }"
                    >
                        <img alt="" class="module-icon" :src="isActiveMenu(sidebar)?sidebar.iconActive : sidebar.icon" style="width: 24px; height: 24px;"/>
                        <template #title>
                            <span class="item-content">{{ sidebar.name }}</span>
                        </template>
                    </el-menu-item>
                </router-link>
            </template>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { menu } from '../menu';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {ISidebar} from '../../common/interfaces'
@Options({})
export default class SideBar extends Vue {
    @Prop({ default: false }) readonly isCollapse!: boolean;
    get sidebars(): ISidebar[] {
        return menu;
    }
    isActiveMenu(value: ISidebar): boolean {
        return value.to === `/${this.$route.path.split('/')[1]}`;
    }
}
</script>
<style lang="scss" scoped>
.item-content {
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
}

::v-deep(li.el-menu-item) {
    margin-left: 8px !important;
}
.collapsed-menu-item{
    padding-right: 5px;
}

</style>