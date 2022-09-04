<template>
    <div class="header">
        <div class="button-menu" @click="toggleSideBar">
            <el-icon><Menu /></el-icon>
            <img class="img-fluid" src="../../assets/ic-film.png" style="width: 40px; height: 40px;"/>
        </div>
        <div class="search-box">
            <el-input
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
                :suffix-icon="Search"
            />
            
        </div>
        <div class="helper-button">
            <el-button>Login</el-button>
        </div>
        
    </div>
</template>
<script lang="ts">
import { appModule } from '@/plugins/vuex/appModule';
import { Search, Menu } from '@element-plus/icons-vue'
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {
        Search,
        Menu
    }
})
export default class MainHeader extends Vue {
    Search = Search;
    toggleSideBar() {
        appModule.setIsCollapseSidebar();
    }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-menu {
    margin-left: 25px;
    display: flex;
    align-items: center;
    ::v-deep(.el-icon) {
        margin-right: 35px;
        width: 28px !important;
        height: 28px !important;
        svg{
            width: 28px !important;
            height: 28px !important;
        }
    }
}
.search-box {
    width: 80%;
    ::v-deep(.el-input) {
        .el-input__wrapper{
            border-radius: 20px;
        }
    }
}
</style>